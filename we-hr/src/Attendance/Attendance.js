import React from 'react'
import Sidebar from '../Components/Dashboard/Sidebar'
import Navbar from '../Components/Dashboard/Navbar'
import Searchbar from '../Components/Dashboard/Searchbar'

function Attendance() {
  return (
    <div className='Attendance-Container'>
      
     <Sidebar/>
     <div className='Attendance-header'>
      <Searchbar />
      <Navbar/>
      </div>

    </div>
  )
}

export default Attendance
