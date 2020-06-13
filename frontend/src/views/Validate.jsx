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
  Table,
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


class Validate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal1:false,
      myData:"",
      finalData:[]
      
      };
      console.log("i am here");

    this.handleInputChange = this.handleInputChange.bind(this);
    this.validateCases = this.validateCases.bind(this);
    this.toggle1 = this.toggle1.bind(this);
    
  }

  componentDidMount = () => {
    console.log(this.props.casesData.cases);
    let temp = this.props.casesData.cases;
    console.log(temp);
    this.setState({
      myData: temp
    });
    let arrtemp =["Case Id","Problem Description", "Priority","help Type", "Name", "Contact", "Address"];
    temp.forEach(row =>{
      arrtemp.push(row);
      console.log(row.caseid);
    });
    this.setState({
      finalData: arrtemp
    });

     /* temp.forEach(maintenanceRow => {
      if (maintenanceRow.sr_type in myData) {
        myData[maintenanceRow.sr_type] =
          myData[maintenanceRow.sr_type] +
          maintenanceRow.labour_cost_$ +
          maintenanceRow.extended_cost_$;
      } else {
        myData[maintenanceRow.sr_type] =
          maintenanceRow.labour_cost_$ + maintenanceRow.extended_cost_$;
      }
    }); */

    /* let serviceArr = [];
    let Arr = [];
    temp.forEach(row =>{
      let st="";
      st=row.firstname+row.lastname;
      let Arrtemp=[row.caseid, row.problem_description, row.na
      console.log(row.caseid);
    }) */
  }

  toggle1() {
    this.setState({
      modal1: !this.state.modal1
    });
  }
  
  validateCases = (e) => {
    var headers = new Headers();
    e.preventhefault();
    console.log("Console",this.state);
    
    var encodedPassword = btoa(this.state.password);
    var data = {
      1:"low",
      2:"high",
      3:"medium"  
    };

    //console.log("data : ",  data);
    //axios.defaults.withCredentials = true;
    axios.post('http://10.225.125.24:5000/validate', data, { headers: { 'Content-Type': 'application/json'}})
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

  renderTableData() {
    console.log(this.state.finalData);
    return this.state.finalData.map((row, index) => {

       const { caseid, problem_description, priority, help_type, name, contact, address } = row //destructuring
       return (
          <tr key={caseid}>
            <td>{caseid}</td>
             <td>{problem_description}</td>
             <td>{priority}</td>
             <td>{help_type}</td>
             <td>{name}</td>
             <td>{contact}</td>
             <td>{address}</td>
          </tr>
       )
    })
 }

 renderTableHeader() {
  let header = Object.keys({"Case Id": 1,"Problem Description":2, "Priority":3,"Help Type":4,"Name":5,"Contact":6,"Address":7});
      return header.map((row, index) => {
         return <th key={index}>{row}</th>
      })
}

  render() {
    
    const { firstname, lastname, email, primarycontact, secondarycontact, address, username, password } = this.state;
    return (       
      <>
      <div className="content">
        <Row>
          <Col align="center" lg="6" md="6" sm="12">
          <Button size="lg" color="primary" onClick={this.toggle1}>Validate</Button>
      <Modal isOpen={this.state.modal1} toggle={this.toggle1}
      modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }}
       >
        <ModalHeader toggle={this.toggle1}>Validate</ModalHeader>
        <ModalBody>
        <div>

            <table id='rowData'>
              <thead>
                {this.renderTableHeader()}
              </thead>
               <tbody>
                  {this.renderTableData()}
               </tbody>
            </table>
         </div>
          </ModalBody>
          </Modal>
</Col>
</Row>          
        </div>
      </>
    )}};  
        

    
    export default Validate;