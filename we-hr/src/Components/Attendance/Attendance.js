import React from 'react'
import Sidebar from '../Dashboard/Sidebar'
import Navbar from '../Dashboard/Navbar'
import Searchbar from '../Dashboard/Searchbar'
import AttendancePage from './AttendancePage'

function Attendance() {
  return (
    <div className='Attendance-Container'>
      
      <Sidebar/>
     <div className='Attendance-header'>
    Hi
    
      <Searchbar />
      <Navbar/>

      </div>
    <AttendancePage/>
    </div>
  )
}

export default Attendance
