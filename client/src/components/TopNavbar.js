import './css/Navbar.css';

import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import ChatBubbleOutlinedIcon from '@mui/icons-material/ChatBubbleOutlined';

const Navbar = () =>{
    return(
       <div className="navbar">
            <div className='wrapper'>
                <div className='search'>
                   <SearchOutlinedIcon />
                  <input type="search" placeholder="search..." />
                    
                </div>
                <div className='items'>
                    <div className='item'>
                        <LanguageOutlinedIcon  className="icon"/>
                        <span>English</span>
                     
                    </div>
                    <div className='item'>
                        <ChatBubbleOutlinedIcon  className="icon"/>
                        <div className='counter'>12</div>
                        {/* <span>Chat</span> */}
                    </div>
                    <div className='item'>
                        <DarkModeOutlinedIcon className="icon"/>
                        {/* <span>Dark Mode</span> */}
                    
                    </div>
                    <div className='item'>
                        <NotificationsNoneIcon className="icon"/>
                        {/* <span>No Notifications</span> */}
                        <div className='counter'>1</div>
                    </div>
                    <div className='item'>
                        <ListOutlinedIcon className="icon"/>
                        {/* <span>List</span> */}
                    </div>
                    <div className='item'>
                        <img src="https://img.freepik.com/free-icon/user_318-563636.jpg?size=626&ext=jpg&ga=GA1.1.203490381.1685938840&semt=sph" 
                        alt=" " 
                        className="avatar"/>
                    </div>
                </div>
            </div>
       </div>
    );
};
export default Navbar;

// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function Navbar({ menuItems }) {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//       <div className="container">
//         <a className="navbar-brand" href="#">Logo</a>
//         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNav">
//         <ul className="navbar-nav ml-auto">
//             {menuItems.map((menuItem, index) => (
//               <li className="nav-item" key={index}>
//                 {menuItem.isButton ? (
//                   menuItem.component // Render the component as a button
//                 ) : (
//                   <a className="nav-link" href={menuItem.url}>{menuItem.label}</a> // Render the regular menu item as a link
//                 )}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
