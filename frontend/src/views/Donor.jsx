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
  CardTitle,
  Dropdown,
  FormGroup,
  Form,
  Input,
  Row,
  Col
} from "reactstrap";

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'',
      contact:'',
      email:'',
      clothingDesc:'',
      foodDesc:'',
      medicineDesc:'',
      otherDesc:'',
      numberOfClothes: 0,
      numberOfFood: 0,
      numberOfMedicine: 0,
      numberOfOther: 0,

    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.submitDonation = this.submitDonation.bind(this);
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

  submitDonation = (e) => {
    var headers = new Headers();
    e.preventDefault();
    console.log("",this.state.numberOfClothes,this.state.numberOfFood, this.state.numberOfMedicine, this.state.numberOfOther)
    var arrayClothes={};
    var arrayFood={};
    var arrayMedicine={};
    var arrayOthers={};
    if (this.state.numberOfClothes!=0){
      arrayClothes={
        "category":"clothes",
        "quantity":this.state.numberOfClothes,
        "description": this.state.clothingDesc
      }
    }
    if (this.state.numberOfFood!=0){
      arrayFood={
        "category":"food",
        "quantity":this.state.numberOfFood,
        "description": this.state.foodDesc
      }
    }
    if (this.state.numberOfMedicine!=0){
      arrayMedicine={
        "category":"health-care",
        "quantity":this.state.numberOfMedicine,
        "description": this.state.medicineDesc
      }
    }
    if (this.state.numberOfOther!=0){
      arrayOthers={
        "category":"other",
        "quantity":this.state.numberOfOther,
        "description": this.state.otherDesc
      }
    }
    
    var data = {
        email : this.state.email, 
        name : this.state.name,
        contact : this.state.contact,
        items: [arrayClothes,arrayFood,arrayMedicine,arrayOthers]
    }

    console.log("data : ",  data);
    //axios.defaults.withCredentials = true;
    axios.post('http://10.225.125.24:5000/donate', data, { headers: { 'Content-Type': 'application/json'}})
        .then(response => { 
        console.log("response :", response)
        if(response.status == 200)
        {
          console.log("ok response");
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
    const { name, email, contact, clothingDesc, medicineDesc, foodDesc, numberOfClothes, numberOfFood, numberOfMedicine, numberOfOther } = this.state;
    return (
      <>
        <div className="content">
          <Row>
            <Col>
            </Col>
          </Row>
          <Row>
            <Col md="2">
              {/* <Card className="card-user">
                <div className="image">
                  <img
                    alt="..."
                    src={require("assets/img/damir-bosnjak.jpg")}
                  />
                </div>
                <CardBody>
                  <div className="author">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        className="avatar border-gray"
                        src={require("assets/img/mike.jpg")}
                      />
                      <h5 className="title">Chet Faker</h5>
                    </a>
                    <p className="description">@chetfaker</p>
                  </div>
                  <p className="description text-center">
                    "I like the way you work it <br />
                    No diggity <br />I wanna bag it up"
                  </p>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="button-container">
                    <Row>
                      <Col className="ml-auto" lg="3" md="6" xs="6">
                        <h5>
                          12 <br />
                          <small>Files</small>
                        </h5>
                      </Col>
                      <Col className="ml-auto mr-auto" lg="4" md="6" xs="6">
                        <h5>
                          2GB <br />
                          <small>Used</small>
                        </h5>
                      </Col>
                      <Col className="mr-auto" lg="3">
                        <h5>
                          24,6$ <br />
                          <small>Spent</small>
                        </h5>
                      </Col>
                    </Row>
                  </div>
                </CardFooter>
              </Card> */}
              {/* <Card>
                <CardHeader>
                  <CardTitle tag="h4">Team Members</CardTitle>
                </CardHeader>
                <CardBody>
                  <ul className="list-unstyled team-members">
                    <li>
                      <Row>
                        <Col md="2" xs="2">
                          <div className="avatar">
                            <img
                              alt="..."
                              className="img-circle img-no-padding img-responsive"
                              src={require("assets/img/faces/ayo-ogunseinde-2.jpg")}
                            />
                          </div>
                        </Col>
                        <Col md="7" xs="7">
                          DJ Khaled <br />
                          <span className="text-muted">
                            <small>Offline</small>
                          </span>
                        </Col>
                        <Col className="text-right" md="3" xs="3">
                          <Button
                            className="btn-round btn-icon"
                            color="success"
                            outline
                            size="sm"
                          >
                            <i className="fa fa-envelope" />
                          </Button>
                        </Col>
                      </Row>
                    </li>
                    <li>
                      <Row>
                        <Col md="2" xs="2">
                          <div className="avatar">
                            <img
                              alt="..."
                              className="img-circle img-no-padding img-responsive"
                              src={require("assets/img/faces/joe-gardner-2.jpg")}
                            />
                          </div>
                        </Col>
                        <Col md="7" xs="7">
                          Creative Tim <br />
                          <span className="text-success">
                            <small>Available</small>
                          </span>
                        </Col>
                        <Col className="text-right" md="3" xs="3">
                          <Button
                            className="btn-round btn-icon"
                            color="success"
                            outline
                            size="sm"
                          >
                            <i className="fa fa-envelope" />
                          </Button>
                        </Col>
                      </Row>
                    </li>
                    <li>
                      <Row>
                        <Col md="2" xs="2">
                          <div className="avatar">
                            <img
                              alt="..."
                              className="img-circle img-no-padding img-responsive"
                              src={require("assets/img/faces/clem-onojeghuo-2.jpg")}
                            />
                          </div>
                        </Col>
                        <Col className="col-ms-7" xs="7">
                          Flume <br />
                          <span className="text-danger">
                            <small>Busy</small>
                          </span>
                        </Col>
                        <Col className="text-right" md="3" xs="3">
                          <Button
                            className="btn-round btn-icon"
                            color="success"
                            outline
                            size="sm"
                          >
                            <i className="fa fa-envelope" />
                          </Button>
                        </Col>
                      </Row>
                    </li>
                  </ul>
                </CardBody>
              </Card> */}
            </Col>
            <Col md="8">
              <Card className="card-user">
                <CardHeader>
                  <CardTitle tag="h5">Item Donation form</CardTitle>
                </CardHeader>
                <CardBody>
                  <Form onSubmit={this.submitDonation.bind(this)}>
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
                          <label htmlFor="exampleInputEmail1">
                            Email address
                          </label>
                          <Input type="email"
                          name="email"
                          value={email}
                          onChange={this.handleInputChange} />
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Col className="pr-1" md="4">
                        <FormGroup>
                          <label>Item</label>
                          <Input
                            disabled
                            placeholder = "Clothing"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-1" md="4">
                        <FormGroup>
                          <label>Description</label>
                          <Input
                            type="text"
                            name="clothingDesc"
                            placeholder="N/A"
                            value={clothingDesc}
                            onChange={this.handleInputChange}
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-1" md="4">
                        <FormGroup>                          
                          <label>Number of items</label>
                              <Input
                              name="numberOfClothes"
                              type="number"
                              value={numberOfClothes}
                              onChange={this.handleInputChange} />                          
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-1" md="4">
                        <FormGroup>
                          <label>Item</label>
                          <Input
                            disabled
                            placeholder = "Medicines"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-1" md="4">
                        <FormGroup>
                          <label>Description</label>
                          <Input
                            placeholder="N/A"
                            type="text"
                            name="medicineDesc"
                            value={medicineDesc}
                            onChange={this.handleInputChange}
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-1" md="4">
                        <FormGroup>                          
                          <label>Number of items</label>
                              <Input
                              name="numberOfMedicine"
                              type="number"
                              value={this.state.numberOfMedicine}
                              onChange={this.handleInputChange} />                          
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-1" md="4">
                        <FormGroup>
                          <label>Item</label>
                          <Input
                            disabled
                            placeholder = "Food"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-1" md="4">
                        <FormGroup>
                          <label>Description</label>
                          <Input
                            placeholder="N/A"
                            type="text"
                            name="foodDesc"
                            value={foodDesc}
                            onChange={this.handleInputChange}
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-1" md="4">
                        <FormGroup>                          
                          <label>Number of items</label>
                              <Input
                              name="numberOfFood"
                              type="number"
                              value={this.state.numberOfFood}
                              onChange={this.handleInputChange} />                          
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-1" md="4">
                        <FormGroup>
                          <label>Item</label>
                          <Input
                            disabled
                            placeholder = "Ohers"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-1" md="4">
                        <FormGroup>
                          <label>Description</label>
                          <Input
                            placeholder="N/A"
                            type="text"
                            name="otherDesc"
                            value={this.state.otherDesc}
                            onChange={this.handleInputChange}
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-1" md="4">
                        <FormGroup>                          
                          <label>Number of items</label>
                              <Input
                              name="numberOfOther"
                              type="number"
                              value={this.state.numberOfOther}
                              onChange={this.handleInputChange} />                          
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <div className="update ml-auto mr-auto">
                        <Button
                          className="btn-round"
                          color="primary"
                          type="submit"
                          onClick = {this.submitDonation}
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
          <Row>
            <Col md="3"></Col>
            <Col md="6">
            <Card className="card-user">
              <CardHeader>
              <CardTitle tag="h5">Payment Donation</CardTitle>
              </CardHeader>
              <CardBody>
              <a href="https://www.paypal.com/for-you/transfer-money/send-money">
  <img src={require('./paypal.png')} />
</a>
              </CardBody>
              <CardFooter>
              
              </CardFooter>
              </Card></Col>

          </Row>
        </div>
      </>
    );
  }
}

export default User;
