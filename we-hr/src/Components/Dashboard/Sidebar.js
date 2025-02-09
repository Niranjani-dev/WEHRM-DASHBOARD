// import React from 'react'
// import Dashboard from '../Assets/Dashboard.png';



// function Sidebar() {
//   return (
//     <div className='Sidebar-container'>
//       <h1>We-HR</h1>
//       <div className='Dash-Elements'>
//       <ul></ul>
//       <li><img src={Dashboard}/> <a>Dashboard</a></li>
     
    
//       </div>
//     </div>
//   )
// }

// export default Sidebar
import React from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink for navigation
import {sidebarImage} from './Dashdata'; // Import Dashboard image

const Sidebar = ()=> {
  
  return (
    <div className="sidebar-container">
      <h1>WeHR</h1>
      <div className="dash-elements">
        <ul>
      
          {sidebarImage.map((item, index) => (
            <li key={index}> <NavLink to={item.link} activeClassName="active-link" exact >
                <img src={item.Image} alt={item.title} />
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
