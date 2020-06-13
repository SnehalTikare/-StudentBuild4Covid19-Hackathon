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
import Assign from './Assign';
import Validate from './Validate';
import Dashboard from './Dashboard';

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

class MainAdminFunctions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      casesData:
      
      {
        "cases": [{
          caseid:1,
          problem_description:'Need a fan',
          priority: 'low',
          help_type: 'others',
          name: 'John Doe',
          contact: '1234561234',
          address: 'Alpha Beta Gamma Street'
          },
          {
            caseid:2,
        problem_description:'Need medication',
        priority: 'high',
        help_type: 'heath_care',
        name: 'Jane Doe',
        contact: '4561234123',
        address: 'San Jose Street'
          }
        ]
      },
      volunteerData:'',
      dashboardData:''
    };

  }

  componentDidMount = () => {
    var headers = new Headers();
    //e.preventDefault();
const casesData = 
    {
      "cases": [{
        caseid:1,
        problem_description:'Need a fan',
        priority: 'low',
        help_type: 'others',
        name: 'John Doe',
        contact: '1234561234',
        address: 'Alpha Beta Gamma Street'
        },
        {
          caseid:2,
      problem_description:'Need medication',
      priority: 'high',
      help_type: 'heath_care',
      name: 'Jane Doe',
      contact: '4561234123',
      address: 'San Jose Street'
        }
      ]
    };
    this.setState({
      casesData: casesData
    });
      
    const volunteerData = 
    {
      "cases": [{
        caseid:1,
        problem_description:'Need a fan'
        },
        {
          caseid:2,
      problem_description:'Need medication'  }
      ],
      "volunteers":[{
      userid: 5,
      firstname: "Harry",
      lastname: "Lee"
      },
      {
        userid: 7,
        firstname: "Mary",
        lastname: "Jane"
      }]
    };
    this.setState({
      volunteerData: volunteerData
    });

    // do 3 get calls for validate, assign volunteer, dashboard

    /* axios.get('http://10.225.125.24:5000/getcases', { headers: { 'Content-Type': 'application/json'}})
      .then(response => { 
      console.log("response :", response)
      
      if(response.status == 200)
      {
        console.log("ok response");
      
        this.setState({
          casesData: data
        });
      }         
          
          //swal("User logged in Successfully!", "", "success");
  })
  .catch(error => {
      console.log(error)
  });


  axios.get('http://10.225.125.24:5000/getcases', { headers: { 'Content-Type': 'application/json'}})
      .then(response => { 
      console.log("response :", response)
      
      if(response.status == 200)
      {
        console.log("ok response");
      
        this.setState({
          volunteerData: response.data
        });
      }         
          
          //swal("User logged in Successfully!", "", "success");
  })
  .catch(error => {
      console.log(error)
  });


  axios.get('http://10.225.125.24:5000/getdashboardData', { headers: { 'Content-Type': 'application/json'}})
      .then(response => { 
      console.log("response :", response)
      
      if(response.status == 200)
      {
        console.log("ok response");
      
        this.setState({
          casesData: response.data
        });
      }         
          
          //swal("User logged in Successfully!", "", "success");
  })
  .catch(error => {
      console.log(error)
  }); */

  };
  


  render() {
    const {  } = this.state;
    return (
      <>
        <div className="content">
          <Row>
            <Col align="center" lg="12" md="12" sm="12">
            <Validate casesData={this.state.casesData}/>
            </Col>
            </Row>
            {/*<Row>
            <Col align="center" lg="6" md="6" sm="12">
            <Assign volunteerData = {this.state.volunteerData}/>
            </Col>
            </Row>
             <Row>
            <Col align="center" lg="6" md="6" sm="12">
            <Dashboard dashboardData = {this.state.dashboardData}/>
            </Col>
          </Row> */}
          
          
        </div>
      </>
    );
  }
}

export default MainAdminFunctions;
