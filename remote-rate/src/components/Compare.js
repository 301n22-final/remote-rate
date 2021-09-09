import React from 'react';
import '../css/Compare.css';
import axios from 'axios';
import { Accordion, Card, Button, Container } from 'react-bootstrap';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Popover from 'react-bootstrap/Popover'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'

class Compare extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: this.props.email,
      renderData: false,
    }
  }

  componentDidMount = async () => {
    try {
      await this.getUserData();
    } catch (err) {
      console.log(err);
    }
  }

  getUserData = async () => {
    const response = await axios.get(`${process.env.REACT_APP_BACKEND_SERVER}/profile`);
    const allData = response.data;
    allData.map(user => {
      if (user.email === this.state.email) {
        this.setState({
          userInfo: user,
          renderData: true,
        });
      }
      return user;
    })
  }

  annualGasCost = (distance, gasAPI, carMPG) => {
    gasAPI = 3.50;

    let gallonsPerTrip = distance / carMPG;

    let costPerDay = gallonsPerTrip * 2 * gasAPI;

    let annualCost = costPerDay * 261;
    return annualCost;
  }


  compareOffer = (offer1, offer2) => {
    let difference = offer1 - offer2;
    return difference;
  }


  compareRemote = (compare, annualCost) => {

    let comparedCost = compare - annualCost;

    if (Math.sign(comparedCost) === 1) {
      return `You will save ${comparedCost} yearly by taking not driving into work`
    } else {
      return `You will have to spend ${comparedCost} more each year driving if your driving into work`
    }
  }

  render() {

    const popover = (
      <Popover id="popover-basic">
        <Popover.Title as="h3">How to see comparisons</Popover.Title>
        <Popover.Content>
          Click on your offered Company Name below to see the comparison from your profile.
        </Popover.Content>
      </Popover>
    );

    return (

      <>

        <Jumbotron className="p-3 mb-2 m-3 bg-secondary text-white" fluid>
          <h1>Hello!</h1>
          <p>
            Select your Offers below to compare them!
          </p>
          <p>


            <OverlayTrigger 
            trigger="click"   
            placement="right" 
            overlay={popover}>
              <Button 
              className="bg-warning text-dark">
                Click me compare!</Button>
            </OverlayTrigger>
          </p>
        </Jumbotron>
        {this.state.renderData ?
          <Container >
            <Accordion className="m-4">
              {this.state.userInfo.newJob.map((job, indx) => {
                return (
                  <Card key={indx}>
                    <Accordion.Toggle as={Card.Header} eventKey={String(indx)}>
                      {job.newEmployer}
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey={String(indx)}>
                      <Card.Body>
                        Net Gain from taking this position: {this.compareOffer(job.newSalary, this.state.userInfo.curSalary)}
                        <br />
                        New Salary: ${job.newSalary}
                        <br />
                        New Job Location: {job.newLocation}
                        <br />
                        Remote: {job.newRemote ? 'Yes' : "No"}
                        <br />

                        {job.newRemote ?
                          '' :
                          <>
                            Annual gas cost: ${Math.round(this.annualGasCost(job.newCommuteDist, 3.50, this.state.userInfo.milesPerGal))}
                            <br />
                            New Commute Distance to Work:  {job.newCommuteDist} Miles
                            <br />
                            Your annual commute will be between {job.newCommuteTime}
                          </>

                        }
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                )
              })}
            </Accordion>
          </Container>

          : ''}
        <footer className="footer"></footer>
      </>
    )
  }
}

export default Compare;
