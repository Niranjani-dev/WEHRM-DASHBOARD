import React from 'react'
import Leavereq from '../Assets/Leavereq.png'
import Attendences from '../Assets/Attendences.png'
import { useNavigate } from "react-router-dom";


function AttendancePage() {
  const navigate = useNavigate();
  return (
    <div className='Attendance-Container'>
     
       
       <div className='AttendanceImages'>
       <div><h1>Attendance</h1></div>
        <div className='Inside-attend'>
       
        <div><img src={Leavereq} alt="Leave Request"  style={{ cursor: "pointer", width: "250px" }} 
         onClick={() => navigate("/leave")} /></div>
    
        <div className='Attendences'><img src={Attendences}/></div>
       </div>
       </div>



    </div>
  )
}

export default AttendancePage
