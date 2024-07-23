import React from "react";
import LogoutButton from './LogoutButton';
import './css/Sidebar.css';
// import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Dashboard = () => {
    // const menuItems = [
    //     { label: 'Home', url: '#' },
    //     { label: 'About', url: '#' },
    //     { label: 'Services', url: '#' },
    //     { label: 'Contact', url: '#' },
    //     { label: 'Logout', component: <LogoutButton />, isButton: true },
    //   ];
    return(
        // <div>
            
        //     {/* <Navbar menuItems={menuItems} /> */}
        //  hello
        // </div>
        <Container fluid>
        <Row>
          <Col md={3} className="sidebar-wrapper">
            <Sidebar />
          </Col>
          <Col md={10} className="content-wrapper">
            {/* Main content goes here */}
          </Col>
        </Row>
      </Container>
    )
}
export default Dashboard;
// import React from "react";
// import Sidebar from './Sidebar';
// import Navbar from './Navbar';
// import Widgets from './Widgets';
// import Featured from './Featured';
// import Charts from './Charts';
// import BasicTable from './Table';
// import './css/Dashboard.css';
// import Dashboard from "@mui/icons-material/Dashboard";

// const Dashboard = () => {
//     return(
//         <div className="dashboard">
//            {/* <ul>
//             <li>login</li>
      
//            </ul> */}
//            <Sidebar />
       
//            <div className="dashboardContainer">
//              <Navbar />
//               home Container
//               <div className="widgets">
//                     <Widgets type="Users"/>
//                     <Widgets type="Orders"/>
//                     <Widgets type="Earnings"/>
//                     <Widgets type="Balance"/>
//               </div>
//               <div className="charts">
//                  <Featured />
//                  <Charts />
//               </div>
//               <div className="listContainer">
//                 <div className="listTitle">
//                     Latest Transaction
//                 </div>
//                 <BasicTable />
//               </div>
//             </div>
           
//         </div>
//     )
// }
// export default Dashboard;