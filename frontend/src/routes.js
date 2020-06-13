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
import Dashboard from "views/Dashboard.jsx";
import Notifications from "views/Notifications.jsx";
import Icons from "views/Icons.jsx";
import SeekHelp from "views/SeekHelp.jsx";
import TableList from "views/Tables.jsx";
import Volunteer from "views/Volunteer.jsx";
import Donor from "views/Donor.jsx";
import Admin1 from "views/Admin.jsx";
import Home from "views/Home.jsx";

var routes = [
  {
    path: "/home",
    name: "Home",
    icon: "nc-icon nc-bank",
    component: Home,
    layout: "/admin"
  },
  /* {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-bank",
    component: Dashboard,
    layout: "/admin"
  }, */
  /* {
    path: "/icons",
    name: "Icons",
    icon: "nc-icon nc-diamond",
    component: Icons,
    layout: "/admin"
  }, */
  {
    path: "/volunteer",
    name: "Volunteer",
    icon: "nc-icon nc-single-02",
    component: Volunteer,
    layout: "/admin"
  },
  /* {
    path: "/notifications",
    name: "Notifications",
    icon: "nc-icon nc-bell-55",
    component: Notifications,
    layout: "/admin"
  }, */
  {
    path: "/donate",
    name: "Donate",
    icon: "nc-icon nc-cart-simple",
    component: Donor,
    layout: "/admin"
  },
  /* {
    path: "/tables",
    name: "Table List",
    icon: "nc-icon nc-tile-56",
    component: TableList,
    layout: "/admin"
  }, */
  {
    path: "/seekHelp",
    name: "Seek Help",
    icon: "nc-icon nc-ambulance",
    component: SeekHelp,
    layout: "/admin"
  },
  {
    path: "/admin1",
    name: "Admin",
    icon: "nc-icon nc-circle-10",
    component: Admin1,
    layout: "/admin"
  }
];
export default routes;
