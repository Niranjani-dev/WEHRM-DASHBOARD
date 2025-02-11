import React from 'react';
import { NavLink } from 'react-router-dom';
import { sidebarImage } from './Dashdata';

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <h1>WeHR</h1>
      <div className="dash-elements">
        <ul>
          {sidebarImage.map((item, index) => (
            <li key={index}>
              {item.link ? (  
                <NavLink to={item.link} activeClassName="active-link" exact>
                  {item.Image && <img src={item.Image} alt={item.title} />}  
                  {item.title}
                </NavLink>
              ) : (
                <span className="sidebar-title-only" >{item.title}</span> 
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

