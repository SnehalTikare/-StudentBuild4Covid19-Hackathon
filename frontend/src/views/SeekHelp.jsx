/*!

=========================================================
* Paper Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import axios from 'axios';

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Dropdown,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  CardTitle,
  FormGroup,
  Form,
  Input,
  Row,
  Col
} from "reactstrap";

class Typography extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      contact: '',
      address: '',
      priority: '',
      helpType: '',
      description: '',
      ddPriorityOpen: false,
      ddHelpOpen: false
      

    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.submitHelp = this.submitHelp.bind(this);
    this.handleHelpType = this.handleHelpType.bind(this);
    this.handlePriority = this.handlePriority.bind(this);
    this.togglePriority = this.togglePriority.bind(this);
    this.selectPriority = this.selectPriority.bind(this);    
    this.toggleHelp= this.toggleHelp.bind(this);
    this.selectHelp = this.selectHelp.bind(this);
  }

  /* onSubmit = (e) => {
    e.preventDefault();
    // get our form data out of state
    const { name, phoneNumber , email } = this.state;

    axios.post('http://10.225.125.24:5000/donate', { name, email, phoneNumber })
      .then((result) => {
        //access the results here....
        console.log("done");
        console.log(result);
      });
  } */

  togglePriority() {
    this.setState({
      ddPriorityOpen: !this.state.ddPriorityOpen
    });
  }

  toggleHelp() {
    this.setState({
      ddHelpOpen: !this.state.ddHelpOpen
    });
  }

  selectHelp(event) {
    this.setState({
      ddHelpOpen: !this.state.ddHelpOpen,
      help_type: event.target.value
    });
  }

  selectPriority(event) {
    this.setState({
      ddPriorityOpen: !this.state.ddPriorityOpen,
      priority: event.target.value
    });
  }

  handleHelpType(event) {
    this.setState({ helpType: event.target.value });
  }

  handlePriority(event) {
    this.setState({ priority: event.target.value });
  }
  submitHelp = (e) => {
    var headers = new Headers();
    e.preventDefault();
    console.log("", this.state);


    var data = {
      contact: this.state.contact,
      name: this.state.name,
      address: this.state.address,
      assigned_priority: this.state.priority,
      priority: this.state.priority,
      help_type: this.state.helpType,
      problem_description: this.state.description,

    }

    console.log("data : ", data);
    //axios.defaults.withCredentials = true;
    axios.post('http://10.225.125.24:5000/seekhelp', data, { headers: { 'Content-Type': 'application/json' } })
      .then(response => {
        console.log("response :", response)
        if (response.status == 200) {
          console.log("ok response");
          alert("Successfully submitted");
        }


        //swal("User logged in Successfully!", "", "success");
      })
      .catch(error => {
        console.log(error)
      });
  }


  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  render() {
    const { name, contact, address, helpType, priority, description, ddPriorityOpen, ddHelpOpen} = this.state;
    return (
      <>
        <div className="content">
          <Row>
            <Col>
            </Col>
          </Row>
          <Row>
            <Col md="2">
            </Col>
            <Col md="8">
              <Card className="card-user">
                <CardHeader>
                  <CardTitle tag="h5">Seek Help form</CardTitle>
                </CardHeader>
                <CardBody>
                  <Form onSubmit={this.submitHelp.bind(this)}>
                    <Row>
                      <Col className="pr-1" md="5">
                        <FormGroup>
                          <label>Name</label>
                          <Input
                            type="text"
                            name="name"
                            value={name}
                            onChange={this.handleInputChange}
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-1" md="3">
                        <FormGroup>
                          <label>Phone Number</label>
                          <Input
                            type="text"
                            name="contact"
                            value={contact}
                            onChange={this.handleInputChange}
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-1" md="4">
                        <FormGroup>
                          <label>Address</label>
                          <Input
                            type="text"
                            name="address"
                            value={address}
                            onChange={this.handleInputChange}
                          />
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Col className="pr-1" md="4">
                        <FormGroup>

                          <label>
                            Help Type
                            <br></br>
          <select value={this.state.helpType} onChange={this.handleHelpType}>
                              <option default value="family-service">Family Services</option>
                              <option value="disaster-service">Disaster Services</option>
                            </select>
                          </label>
                        </FormGroup>


                      </Col>
                      <Col className="pl-1" md="4">
                        <FormGroup>
                          <label>Description of Help</label>
                          <Input
                            name="description"
                            type="textarea"
                            value={description}
                            onChange={this.handleInputChange} />
                        </FormGroup>
                      </Col>

                      <Col className="pr-1" md="4">
                        <FormGroup>

                          <label>
                            Priority
                            <br></br>
                         <select value={this.state.priority} onChange={this.handlePriority}>
                           
                              <option default value="low">Low</option>
                              <option value="medium">Medium</option>
                              <option value="high">High</option>
                            </select>
                          </label>
                        </FormGroup>


                      </Col>


                    </Row>


                   {/*  <Row>
                      <Col className="pr-1" md="4">
                        <FormGroup>
                        <Dropdown isOpen={this.state.ddHelpOpen} toggle={this.toggleHelp}>
      <DropdownToggle caret>
        Help Type
        </DropdownToggle>
      <DropdownMenu>
        
        <DropdownItem>Family Services</DropdownItem>
        <DropdownItem>Disaster Relief</DropdownItem>
      </DropdownMenu>
    </Dropdown>
                        </FormGroup>


                      </Col>

                      <Col className="pr-1" md="4">
                        <FormGroup>

                          <label>
                            Priority
                            <br></br>
                         <select value={this.state.priority} onChange={this.handlePriority}>
                           
                              <option default value="low">Low</option>
                              <option value="medium">Medium</option>
                              <option value="high">High</option>
                            </select>
                          </label>
                        </FormGroup>


                      </Col>


                    </Row> */}




                    <Row>
                      <div className="update ml-auto mr-auto">
                        <Button
                          className="btn-round"
                          color="primary"
                          type="submit"
                          onClick={this.submitHelp}
                        >
                          Submit
                        </Button>
                      </div>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Typography;
