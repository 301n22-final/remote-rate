import React from 'react';
import Offer from './Offer';
import OfferFormModal from './OfferFormModal';
import { Form, Button, Modal, Card, Container, CardColumns, Jumbotron, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import getDistance from 'geolib/es/getDistance';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        email: '',
        homeLat: '', 
        homeLon: '',
        workLat: '',
        workLon: '',
        curEmployer: '',
        curSalary: '',
        curRemote: false,
        commuteDist: '',
        milesPerGal: '',
        newJob: [],
        _id: '',
      },
      addressToSearch: '',
      showEditModal: false,
      showOfferModal: false,
    }
  }

  componentDidMount = async () => {
    try {
      await this.getUserData();
    } catch (err) {
      console.log('Component Did Mount Error',err);
    }
  }

  getUserData = async () => {
    const response = await axios.get(`${process.env.REACT_APP_BACKEND_SERVER}/profile`);
    const allData = response.data;
    allData.map(user => {
      // Database user vs user logged in
      if (user.email === this.props.email) {
        return this.setState({
          userInfo: user,
        });
      }
      return user;
    })
  }

  updateStateForUs = (offer) => {
    let prevState = this.state
    prevState.userInfo.newJob.push(offer)
    this.setState = (prevState)
  }

  getWorkLocation2 = (lat, lon) => {

    let distanceToWork = getDistance(
      { latitude: this.state.userInfo.homeLat, longitude: this.state.userInfo.homeLon },
      { latitude: lat, longitude: lon }
    )
    let distanceInMiles = distanceToWork / 1609

    this.setState(prevState => ({
      userInfo: {
        ...prevState.userInfo,
        commuteDist: distanceInMiles,
        workLat: lat,
        workLon: lon,
      },
    }));

    return Math.round(distanceInMiles);
  }



  getLocation = async (e) => {
    //  function will use city stored in state to search api with axios
    e.preventDefault();
    try {
      this.handleCloseForm();
      let locationData = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${this.state.addressToSearch}&key=${process.env.REACT_APP_GOOGLE_GEOCODE_API}`);

      this.setState(prevState => ({
        userInfo: {
          ...prevState.userInfo,
          email: this.props.email,
          homeLat: locationData.data.results[0].geometry.location.lat,
          homeLon: locationData.data.results[0].geometry.location.lng,
        },
        showEditModal: prevState.showEditModal,
      }));
      this.handleEditUser(this.state.userInfo);
    } catch (err) {
      console.log(err);
    }
  }
  handleCityInput = (e) => {
    e.preventDefault();
    this.setState(prevState => ({
      userInfo: {
        ...prevState.userInfo,
      },
      addressToSearch: e.target.value,
      showEditModal: prevState.showEditModal,
    }));
  };

  handleEmployerInput = (e) => {
    e.preventDefault();
    this.setState(prevState => ({
      userInfo: {
        ...prevState.userInfo,
        curEmployer: e.target.value,
      },
      showEditModal: prevState.showEditModal,
    }));
  }
  handleSalaryInput = (e) => {
    e.preventDefault();
    this.setState(prevState => ({
      userInfo: {
        ...prevState.userInfo,
        curSalary: e.target.value,
      },
      showEditModal: prevState.showEditModal,
    }));
  };
  handleIsRemote = (e) => {
    e.preventDefault();
    this.setState(prevState => ({
      userInfo: {
        ...prevState.userInfo,
        curRemote: true,
      },
      showEditModal: prevState.showEditModal,
    }));
  };
  handleCurCommute = (e) => {
    e.preventDefault();


    this.setState(prevState => ({
      userInfo: {
        ...prevState.userInfo,
        commuteDist: e.target.value,
      },
      showEditModal: prevState.showEditModal,
    }));
  };
  handleMPG = (e) => {
    e.preventDefault();
    this.setState(prevState => ({
      userInfo: {
        ...prevState.userInfo,
        milesPerGal: e.target.value,
      },
      showEditModal: prevState.showEditModal,
    }));
  };
  handleShowForm = () => {
    this.setState({
      showEditModal: true,
    })
  }

  handleShowOfferForm = () => {
    this.setState({
      showOfferModal: true,
    })
  }

  handleCloseOfferForm = () => {
    this.setState({
      showOfferModal: false,
    })
  }

  handleCloseForm = () => {
    this.setState({
      showEditModal: false,
    })
  }

  deleteOffer = async (user) => {
    try {
      this.setState(prevState => ({
        userInfo: user
      }));
      await axios.put(`${process.env.REACT_APP_BACKEND_SERVER}/profile/${user._id}`, user)
    } catch (error) {
      console.log(error);
    }
  }

  handleEditUser = async (userData) => {
    try {
      await axios.post(`${process.env.REACT_APP_BACKEND_SERVER}/profile`, userData)
      this.getUserData()
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <>
        <Container>
          <Row>
            <Col>
              <Jumbotron className="m-3 profileJumbotron">
                <h1>Hello, {this.props.name} !</h1>
              </Jumbotron>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card className="shadow-lg p-3 mb-5 bg-white rounded">
                <Card.Header>
                  Your Current Information
                </Card.Header>
                <Card.Body>
                  <Col>
                    Home Address: {this.state.addressToSearch}
                    <br />
                    Employer: {this.state.userInfo.curEmployer}
                    <br />
                    Salary: ${this.state.userInfo.curSalary}
                    <br />
                    Remote: {this.state.userInfo.curRemote ? 'Yes' : 'No'}
                  </Col>
                  <Col>
                    <Button
                      className="m-3"
                      onClick={this.handleShowForm}>
                      Edit User Info
                    </Button>
                    <Button
                      className="m-3"
                      variant='success'
                      onClick={this.handleShowOfferForm}>
                      New Offer
                    </Button>
                  </Col>
                </Card.Body>

              </Card>
            </Col>
            <Col>
              <CardColumns>
                {this.state.userInfo.newJob.map((job, idx) => (
                  <Offer 
                    key={idx}

                    userInfo={this.state.userInfo}
                    deleteOffer={this.deleteOffer}

                    employer={job.newEmployer}
                    salary={job.newSalary}
                    remote={job.newRemote}
                    location={job.newLocation}

                    id={job._id}

                  />
                ))}
              </CardColumns>
            </Col>
          </Row>
        </Container>
        {
          this.state.showEditModal ?
            <Modal show={this.state.showEditModal}><Modal.Header>
              <h2>Create New Profile</h2>
            </Modal.Header>
              <Modal.Body>
                <Form
                  className='form'
                  onSubmit={this.getLocation}
                >
                  <Form.Group>
                    <Form.Control
                      onChange={this.handleCityInput}
                      type="text"
                      placeholder="Enter Home Address"
                      required />
                  </Form.Group>
                  <Form.Group>
                    <Form.Control
                      onChange={this.handleEmployerInput}
                      type="text"
                      placeholder="Current Employer" />
                  </Form.Group>
                  <Form.Group>
                    <Form.Control
                      onChange={this.handleSalaryInput}
                      type="text"
                      placeholder="Current Salary"
                      required />
                  </Form.Group>
                  <Form.Group>
                    <Form.Check
                      onChange={this.handleIsRemote}
                      label="Currently Working Remote?" />
                  </Form.Group>
                  <Form.Group>
                    <Form.Control
                      onChange={this.handleMPG} as="select" >
                      <option value='0' >Average Fuel Economy</option>
                      <option value='15' >Less than 15</option>
                      <option value='17.5'>15-20</option>
                      <option value='22.5'>20-25</option>
                      <option value='27.5'>25-30</option>
                      <option value='32.5'>30-35</option>
                      <option value='35'>35+</option>
                      required
                    </Form.Control>
                  </Form.Group>

                  <Button
                    variant="primary"
                    type="submit"
                  >Submit</Button>
                  <Button
                    variant="outline-danger"
                    className="m-1"
                    onClick={this.handleCloseForm}
                  >Close</Button>

                </Form>
              </Modal.Body></Modal> : ''
        }
        {
          this.state.showOfferModal ?
            <OfferFormModal
              id={this.state.userInfo._id}
              getUserData={this.getUserData}
              userInfo={this.state.userInfo}
              newJob={this.state.userInfo.newJob}
              showOfferModal={this.state.showOfferModal}
              handleCloseOfferForm={this.handleCloseOfferForm}
              getWorkLocation2={this.getWorkLocation2}
              handleEditUser={this.handleEditUser}
              updateStateForUs={this.updateStateForUs}
            />
            : ''
        }
      </>
    )
  }
}

export default Profile;
