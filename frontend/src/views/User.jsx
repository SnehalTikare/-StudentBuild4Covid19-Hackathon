/*!
Login plus registration page
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
import axios from "axios";

// reactstrap components
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  Input,
  Form,
  Row,
  Col,
} from "reactstrap";

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal1: false,
      modal2: false,
      useremail: "",
      password: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.userRegistration = this.userRegistration.bind(this);
    this.userLogin = this.userLogin.bind(this);
    this.toggle1 = this.toggle1.bind(this);
    this.toggle2 = this.toggle2.bind(this);
  }
  toggle1() {
    this.setState({
      modal1: !this.state.modal1,
    });
  }
  toggle2() {
    this.setState({
      modal2: !this.state.modal2,
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

  userRegistration = (e) => {
    //var headers = new Headers();
    e.preventDefault();
    console.log("Console", this.state);

    var encodedPassword = btoa(this.state.password);
    var data = {
      useremail: this.state.email,
      pwd: encodedPassword,
      role: "user",
    };

    console.log("data : ", data);
    //axios.defaults.withCredentials = true;
    axios
      .post("http://10.225.125.24:5000/register", data, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        console.log("response :", response);
        if (response.status === 200) {
          console.log("ok response");
          this.toggle1();
          alert("Successfully registered");
        }

        //swal("User logged in Successfully!", "", "success");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  userLogin = (e) => {
    //var headers = new Headers();
    e.preventDefault();
    console.log("Console", this.state);

    var data = {
      username: this.state.username,
      pwd: btoa(this.state.password),
      role: "user",
    };

    console.log("data : ", data);
    //axios.defaults.withCredentials = true;

    /* axios.get('https://jsonplaceholder.typicode.com/login')
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      }) */

    axios
      .post("http://10.225.125.24:5000/login", data, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        console.log("response :", response);
        if (response.status == 200) {
          var mydata = response.data;
          console.log("ok response");
          console.log(mydata);
          this.toggle1();
          alert("Successfully registered");
        }

        //swal("User logged in Successfully!", "", "success");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }
  render() {
    const { useremail, username, password } = this.state;
    return (
      <>
        <div className="content">
          <Row>
            <Col align="center" lg="6" md="6" sm="12">
              <Button size="lg" color="primary" onClick={this.toggle1}>
                Register
              </Button>
              <Modal
                isOpen={this.state.modal1}
                toggle={this.toggle1}
                modalTransition={{ timeout: 700 }}
                backdropTransition={{ timeout: 1300 }}
              >
                <ModalHeader toggle={this.toggle1}>
                  User Registration
                </ModalHeader>
                <ModalBody>
                  <Form onSubmit={this.userRegistration.bind(this)}>
                    <Row>
                      <Col className="pl-1" md="6" sm="12">
                        <FormGroup>
                          <label>User Email</label>
                          <Input
                            type="text"
                            name="useremail"
                            value={useremail}
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
                          onClick={this.userRegistration}
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
              <Button size="lg" color="primary" onClick={this.toggle2}>
                Login
              </Button>
              <Modal
                isOpen={this.state.modal2}
                toggle={this.toggle2}
                modalTransition={{ timeout: 700 }}
                backdropTransition={{ timeout: 1300 }}
              >
                <ModalHeader toggle={this.toggle2}>User Login</ModalHeader>
                <ModalBody>
                  <Form onSubmit={this.userLogin.bind(this)}>
                    <Row>
                      <Col className="pl-1" md="6" sm="12">
                        <FormGroup>
                          <label>User Email</label>
                          <Input
                            type="text"
                            name="useremail"
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
                          onClick={this.userLogin}
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

export default User;
