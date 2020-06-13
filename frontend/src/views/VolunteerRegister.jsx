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
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  CardFooter,
  CardTitle,
  Dropdown,
  FormGroup,
  Input,
  Form,
  Row,
  Col
} from "reactstrap";

class Volunteer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal1:false,
      firstname:'',
      lastname:'',
      primarycontact:'',
      secondarycontact:'',
      email:'',
      address:'',
      username:'',
      password:''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.volunteerRegistration = this.volunteerRegistration.bind(this);
    this.toggle1 = this.toggle1.bind(this);
  }
  toggle1() {
    this.setState({
      modal1: !this.state.modal1
    });
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

  volunteerRegistration = (e) => {
    var headers = new Headers();
    e.preventDefault();
    console.log("Console",this.state);
    
    var encodedPassword = btoa(this.state.password);
    var data = {
      firstname:this.state.firstname,
      lastname:this.state.lastname,
      primary_contact:this.state.primarycontact,
      secondary_contact:this.state.secondarycontact,
      email:this.state.email,
      address:this.state.address,
      username:this.state.username,
      pwd:encodedPassword,
      role:"volunteer"  
    };

    console.log("data : ",  data);
    //axios.defaults.withCredentials = true;
    axios.post('http://10.225.125.24:5000/register', data, { headers: { 'Content-Type': 'application/json'}})
        .then(response => { 
        console.log("response :", response)
        if(response.status == 200)
        {
          console.log("ok response");
          this.toggle1();
          alert("Successfully registered");
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
    const { firstname, lastname, email, primarycontact, secondarycontact, address, username, password } = this.state;
    return (
      <>
        <div className="content">
          <Row>
            <Col align="center" lg="6" md="6" sm="12">
            <Button size="lg" color="primary" onClick={this.toggle1}>Register</Button>
        <Modal isOpen={this.state.modal1} toggle={this.toggle1}
        modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }}
         >
          <ModalHeader toggle={this.toggle1}>Volunteer Registration</ModalHeader>
          <ModalBody>
          <Form onSubmit={this.volunteerRegistration.bind(this)}>
                    <Row>
                      <Col className="pl-1" md="6" sm="12">
                        <FormGroup>
                          <label>First Name</label>
                          <Input
                            type="text"
                            name="firstname"
                            value={firstname}
                            onChange={this.handleInputChange}
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-1" md="6" sm="12">
                      <FormGroup>
                          <label>Last Name</label>
                          <Input
                            type="text"
                            name="lastname"
                            value={lastname}
                            onChange={this.handleInputChange}
                          />
                        </FormGroup>
                      </Col>
                      </Row>
                      <Row>
                      <Col className="pl-1" md="6" sm="12">
                        <FormGroup>
                          <label htmlFor="exampleInputEmail1">
                            Email
                          </label>
                          <Input type="text"
                          name="address"
                          value={address}
                          onChange={this.handleInputChange} />
                        </FormGroup>
                      </Col>
                      <Col className="pl-1" md="6" sm="12">
                        <FormGroup>
                          <label>
                            Address
                          </label>
                          <Input type="email"
                          name="email"
                          value={email}
                          onChange={this.handleInputChange} />
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Col className="pl-1" md="6" sm="12">
                        <FormGroup>
                        <label>Primary Contact</label>
                          <Input
                            type="text"
                            name="primarycontact"
                            value={primarycontact}
                            onChange={this.handleInputChange}
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-1" md="6" sm="12">
                        <FormGroup>
                        <label>Secondary Contact</label>
                          <Input
                            type="text"
                            name="secondarycontact"
                            value={secondarycontact}
                            onChange={this.handleInputChange}
                          />
                        </FormGroup>
                      </Col>
                      </Row>
                      <Row>
                      <Col className="pl-1" md="6" sm="12">
                        <FormGroup>
                        <label>Username</label>
                          <Input
                            type="text"
                            name="username"
                            value={username}
                            onChange={this.handleInputChange}
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-1" md="6" sm="12">
                        <FormGroup>
                        <label>Password</label>
                          <Input
                            type="password"
                            name="password"
                            value={password}
                            onChange={this.handleInputChange}
                          />
                        </FormGroup>
                      </Col>
                      </Row>
                    
                    <Row>
                      <div className="update ml-auto mr-auto">
                        <Button
                          className="btn-round"
                          color="primary"
                          type="submit"
                          onClick = {this.volunteerRegistration}
                        >
                          Register
                        </Button>
                      </div>
                    </Row>
                  </Form>

          </ModalBody>
        </Modal>
            </Col>
            <Col align="center" lg="6" md="6" sm="12">
            <Button size="lg" color="primary" onClick={this.toggle2}>Login</Button>
        <Modal isOpen={this.state.modal2} toggle={this.toggle2}
        modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }}
         >
          <ModalHeader toggle={this.toggle2}>Volunteer Login</ModalHeader>
          <ModalBody>
          <Form onSubmit={this.volunteerLogin.bind(this)}>
                    
                      <Row>
                      <Col className="pl-1" md="6" sm="12">
                        <FormGroup>
                        <label>Username</label>
                          <Input
                            type="text"
                            name="username"
                            value={username}
                            onChange={this.handleInputChange}
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-1" md="6" sm="12">
                        <FormGroup>
                        <label>Password</label>
                          <Input
                            type="password"
                            name="password"
                            value={password}
                            onChange={this.handleInputChange}
                          />
                        </FormGroup>
                      </Col>
                      </Row>
                    
                    <Row>
                      <div className="update ml-auto mr-auto">
                        <Button
                          className="btn-round"
                          color="primary"
                          type="submit"
                          onClick = {this.volunteerLogin}
                        >
                          Login
                        </Button>
                      </div>
                    </Row>
                  </Form>

          </ModalBody>
        </Modal>
            </Col>
          </Row>
          
          
        </div>
      </>
    );
  }
}

export default Volunteer;
