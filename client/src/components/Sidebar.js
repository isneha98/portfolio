// // Sidebar.js

// import React from 'react';
// import './css/Sidebar.css'; // Import a separate CSS file or apply styles directly
// import DashboardIcon from '@mui/icons-material/Dashboard';
// import PeopleIcon from '@mui/icons-material/People';
// function Sidebar() {
//   return (
  
//     <div className="sidebar">
//       <div class ="content">
//       <div className='top'>
//               <span className="adminLogo">logo</span>
//           </div>
//           <hr />
//           <div className='center'>
//                 <ul>
//                     <p className='title'>Main</p>
//                     <li><DashboardIcon  className="icon"/><span>Dashboard</span></li>
//                     <p className='title'>Lists</p>
//                     <li><PeopleIcon className="icon"></PeopleIcon><span>Home</span></li>
//                     <li><PeopleIcon className="icon"></PeopleIcon><span>About</span></li>
//                     <p className='title'>Services</p>
//                     <li><PeopleIcon className="icon"></PeopleIcon><span>Profile</span></li>
//                     <li><PeopleIcon className="icon"></PeopleIcon><span>Contact</span></li>
//                     <li><PeopleIcon className="icon"></PeopleIcon><span>Contact</span></li>
//                     <li><PeopleIcon className="icon"></PeopleIcon><span>Contact</span></li>
//                     <li><PeopleIcon className="icon"></PeopleIcon><span>Contact</span></li>
//                     <p className='title'>Users</p>
//                     <li><PeopleIcon className="icon"></PeopleIcon><span>Profile</span></li>
//                     <li><PeopleIcon className="icon"></PeopleIcon><span>Contact</span></li>
                    
                    
//                 </ul>
//             </div>
//           <div className='bottom'>
//             <div className='colorOption'></div>
//             <div className='colorOption'></div>
//             <div className='colorOption'></div>
//           </div>
          
//       </div>
         
//     </div>
//   );
// }

// export default Sidebar;
import React from 'react';
import { Nav } from 'react-bootstrap';
import './css/Sidebar.css'; // Import a separate CSS file or apply styles directly
import 'bootstrap/dist/css/bootstrap.min.css';
import BannerAdminForm from "./BannerAdminForm";
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <Nav className="flex-column sidebar">
      <Nav.Link href="#">Home</Nav.Link>
      <Nav.Link href="#">Dashboard</Nav.Link>
      <Nav.Link href="#">Settings</Nav.Link>
      <Link to="/BannerAdminForm">Update Banner</Link>
      <Link to="/admins">Admin list</Link>
      {/* Add more sidebar links */}
    </Nav>
  );
};

export default Sidebar;

