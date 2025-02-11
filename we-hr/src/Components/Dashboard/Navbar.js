import React from 'react'
import Message from '../Assets/Message.png'
import bell from '../Assets/bell.png'
import lpimage from '../Assets/lpimage.png'
import lout from '../Assets/lout.svg'
import { useNavigate } from "react-router-dom";
import Hamburger from './Hamburger'



function Navbar({logoutFunction}) {
  const navigate = useNavigate();

  const handleLogout = () => {
    if (typeof logoutFunction === "function") {
      logoutFunction(); 
    } else {
      console.error("logoutFunction is not defined or not a function");
    }
    navigate("/Signin"); 
  };

  return (
   
 <div className='header-rightNav'>
  
<div className='inside-rightnav'>
<div className='bell'><img src={bell} alt='bell'/></div>
<div className='Message'><img src={Message}  alt='Message'/></div>
<div className='lpimage'><img src={lpimage} alt='lpimage'/></div>
<div className='Admmiraname'>Admirra John</div>
<div className="logout">
      <img src={lout} alt="logout" onClick={handleLogout} style={{ cursor: "pointer" }} />
    </div>
</div>
      </div>
    
  )
}

export default Navbar
