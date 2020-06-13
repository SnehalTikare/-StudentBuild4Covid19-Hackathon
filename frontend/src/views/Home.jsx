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
// react plugin used to create charts
import { Line, Pie } from "react-chartjs-2";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col
} from "reactstrap";
// core components
import {
  dashboard24HoursPerformanceChart,
  dashboardEmailStatisticsChart,
  dashboardNASDAQChart
} from "variables/charts.jsx";

class Home extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h5">About Us</CardTitle>
                  
                </CardHeader>
                <CardBody>
                  <p>Sewa International is a Hindu faith-based, humanitarian, nonprofit service organization registered under Internal Revenue Code 501 (c) (3). Founded in 2003, Sewa International is part of a larger movement that started in India in 1989 and is active in twenty countries. Sewa serves humanity irrespective of race, color, religion, gender or nationality.
We specialize in disaster relief and rehabilitation. Our development programs focus on family services; child, tribal and refugee welfare; women empowerment; health; and education. In addition to our work in the US, we have undertaken development projects in Colombia, Guyana, India, Kenya, Pakistan and Sri Lanka.

</p>
                </CardBody>
                
              </Card>
            </Col>
          </Row>
          <Row>
            
            <Col md="12">
              <Card className="card-chart">
                <CardHeader>
                  <CardTitle tag="h5">Our Website</CardTitle>
                </CardHeader>
                <CardBody>
                <a href="https://sewausa.org/">
  <img src={require('./sewa.PNG')} />
</a>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
          <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h5">Contact Us</CardTitle>
                </CardHeader>
                <CardBody>
                Address : Sewa International, P.O. Box 820867, Houston, Texas 
                <br></br>
                Contact Information : 77282-0867
                </CardBody>
               
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Home;
