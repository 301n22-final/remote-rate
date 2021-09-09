import React from 'react';
import { Button, Card } from 'react-bootstrap';


class Offer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        ...this.props.userInfo,
      },
      buttonClicked: false,
    }
  }

  handleClick = () => {
    let needle = this.props.userInfo.newJob.filter(job => job._id !== this.props.id);
    this.setState({
      userInfo: {
        ...this.state.userInfo,
        newJob: needle,
      },
      buttonClicked: true,
    })
  }

  render() {
    if (this.state.buttonClicked) {
      this.props.deleteOffer(this.state.userInfo);
      this.setState({
        buttonClicked: false,
      });
    };
    return (
      <Card>

        <Card.Header>
          {this.props.employer}
        </Card.Header>
        <Card.Body>
          Salary: {this.props.salary}
          <br />
          Remote: {this.props.remote ? 'Yes' : 'No'}
        </Card.Body>
        <Card.Footer>
          {this.props.location}

          <br />
          <Button 
          variant="outline-danger" 
          onClick={this.handleClick} >
            Delete
            </Button>

        </Card.Footer>
        
      </Card>
    )
  }
}

export default Offer;
