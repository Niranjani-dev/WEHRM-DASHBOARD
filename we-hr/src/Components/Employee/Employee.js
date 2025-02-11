import React from 'react'
import Sidebar from '../Dashboard/Sidebar'
import Navbar from '../Dashboard/Navbar'
import Searchbar from '../Dashboard/Searchbar'
import Empicon from '../Assets/Empicon.png'
import Groupicon from '../Assets/Groupicon.png'
import { useNavigate } from "react-router-dom";


function Employee() {
  const navigate = useNavigate(); 
  return (
    <div className='Employee-Container'>
      
     <Sidebar/>
     <div className='Employee-header'>
      <Searchbar />
      <Navbar/>
      
      <div className='Employee-div'>
       <div><h1>Employee</h1></div> 
       <div className='Employee-img'>
       <div><img src= {Empicon} className='Empicon cursor-pointer' onClick={() => navigate("/employeetable")} /></div>
       <div><img src= {Groupicon} className='Grouicon'  /></div>
       </div>
      


      </div>
    
      </div>

    </div>
  )
}

export default Employee
