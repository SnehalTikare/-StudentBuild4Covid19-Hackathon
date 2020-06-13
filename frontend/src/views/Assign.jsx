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
import LoginAdmin from './LoginAdmin';


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
      username:'',
      password:'',
      isHidden:false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.adminLogin = this.adminLogin.bind(this);
    this.toggle1 = this.toggle1.bind(this);
  }
  toggle1() {
    this.setState({
      modal1: !this.state.modal1
    });
  }

  callbackFunction = (childData) => {
    this.setState({isHidden: true})
};

  toggleHidden () {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }
  

adminLogin = (e) => {
  var headers = new Headers();
  e.preventDefault();
  console.log("Console",this.state);
  
  
  var data = {
    username:this.state.username,
    pwd:btoa(this.state.password),
    role:"admin"  
  };

  console.log("data : ",  data);
  //axios.defaults.withCredentials = true;
  axios.get('http://10.225.125.24:5000/login', data, { headers: { 'Content-Type': 'application/json'}})
      .then(response => { 
      console.log("response :", response)
      if(response.status == 200)
      {
        console.log("ok response");
        this.toggle1();
        setTimeout(function() {
          alert('Successfully registered');
      }, 3000);

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
    const { username, password } = this.state;
    return (
      <>
        <div className="content">
          
          {!this.state.isHidden && <LoginAdmin parentCallback = {this.callbackFunction}/>}
          {/*< Row>
            <Col align="center" lg="12" md="12" sm="12">
            <Button size="lg" color="primary" onClick={this.toggle1}>Login</Button>
        <Modal isOpen={this.state.modal1} toggle={this.toggle1}
        modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }}
         >
          <ModalHeader toggle={this.toggle1}>Admin Login</ModalHeader>
          <ModalBody>
          <Form onSubmit={this.adminLogin.bind(this)}>
                    
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
                          onClick = {this.adminLogin}
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
           */}
          
        </div>
      </>
    );
  }
}

export default Volunteer;
