import React from 'react';
import axios from 'axios';
import { Form, Button, Modal } from 'react-bootstrap';

class OfferFormModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: this.props.userInfo,
      offer: {
        newSalary: 150000,
        newEmployer: 'Best Place of Work',
        newRemote: false,
        newCommuteDist: '',
        newCommuteTime: '',
        newLocation: '',
        workLat: '',
        workLon: '',
        newJob: this.props.newJob,
        id: this.props.id,
      },
      email: '',
    }
  }

  getNewLocation = async () => {
    // function will use city stored in state to search api with axios
    try {
      let newLocationData = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${this.state.offer.newLocation}&key=${process.env.REACT_APP_GOOGLE_GEOCODE_API}`)
      let lat = newLocationData.data.results[0].geometry.location.lat
      let lon = newLocationData.data.results[0].geometry.location.lng
      this.props.getWorkLocation2(lat, lon)

      return { lat, lon };
    } catch (err) {

      console.log('get location error',err);
    }
  }

  getDistanceTime = (commuteDist) => {
    let totalCommute = commuteDist * 2

    let hours = totalCommute / 60
    let hoursShortened = hours.toFixed(2);

    return `${hoursShortened/2*261} and ${hoursShortened*261} hours`

  }
  

  handleSubmitOffer = async (e) => {
    this.props.handleCloseOfferForm();
    e.preventDefault();
    try {
      let lat;
      let lon;
      let dataObject = this.getNewLocation();
      Promise.resolve(dataObject).then(res => {
        lat = res.lat;
        lon = res.lon;
        let newCommute = this.props.getWorkLocation2(lat, lon)
        let newCommuteTime = this.getDistanceTime(newCommute)
        
        let data = {
          newSalary: this.state.offer.newSalary,
          newEmployer: this.state.offer.newEmployer,
          newRemote: this.state.offer.newRemote,
          newLocation: this.state.offer.newLocation,
          newCommuteDist: newCommute,
          newCommuteTime: newCommuteTime,
          workLat: lat,
          workLon: lon,
        }
        let sendMe = this.state.userInfo.newJob
        sendMe.push(data);
        axios.put(`${process.env.REACT_APP_BACKEND_SERVER}/newoffer/${this.state.offer.id}`, this.state.userInfo)

      }).then(res => {
        this.getUserData();
      })
    } catch (error) {
      console.log(error);
    }
  }

  updateStateForUs =(data) => {
    this.props.updateStateForUs(data)
  }


  getUserData = async (e) => {
    await this.props.getUserData();
  }


  handleNewEmployerInput = (e) => {
    e.preventDefault();
    this.setState(prevState => ({
      offer: {
        ...prevState.offer,
        newEmployer: e.target.value,
      },
      email: prevState.email,
    }));
  }


  handleNewSalaryInput = (e) => {
    e.preventDefault();
    this.setState(prevState => ({
      offer: {
        ...prevState.offer,
        newSalary: e.target.value,
      },
      email: prevState.email,
    }));
  };


  handleIsNewRemote = (e) => {
    e.preventDefault();
    this.setState(prevState => ({
      offer: {
        ...prevState.offer,
        newRemote: true,
      },
      email: prevState.email,
    }));
  };

  handleNewLocation = (e) => {
    e.preventDefault();
    this.setState(prevState => ({
      offer: {
        ...prevState.offer,
        newLocation: e.target.value,
      },
      email: prevState.email,
    }));
  };

  handleCommuteDist = (e) => {
    e.preventDefault();
    this.setState(prevState => ({
      offer: {
        ...prevState.offer,
        newCommuteDist: this.state.commuteDist,
      },
      email: prevState.email,
    }));
  }

  render() {
    return (
      <Modal show={this.props.showOfferModal}>
        <Modal.Header>
        </Modal.Header>
        <Modal.Body>
          <Form 
          className='form' 
          onSubmit={this.handleSubmitOffer}
          >
            <Form.Group>
            <Form.Group>
              <Form.Control 
              onChange={this.handleNewLocation} 
              type="text" 
              placeholder="New Offers Address" 
              />
            </Form.Group>
              <Form.Control 
              onChange={this.handleNewEmployerInput} 
              type="text" 
              placeholder="New Offers Company Name" 
              required
              />
            </Form.Group>
            <Form.Group >
              <Form.Control 
              onChange={this.handleNewSalaryInput} 
              type="text" 
              placeholder="Offers Salary" 
              required
              />
            </Form.Group>
            <Form.Group>
              <Form.Check 
              onChange={this.handleIsNewRemote} 
              label="Remote Offer?" />
            </Form.Group>
            <Button 
            variant="primary" 
            type="submit">
              Submit</Button>
            <Button 
            variant="outline-danger" 
            className="m-1" 
            onClick={this.props.handleCloseOfferForm}>
              Close
            </Button>
          </Form>
        </Modal.Body></Modal>
    )
  }
}
export default OfferFormModal;
