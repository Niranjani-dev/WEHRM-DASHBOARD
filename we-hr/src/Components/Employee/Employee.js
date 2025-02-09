import React from 'react'
import Sidebar from '../Dashboard/Sidebar'
import Navbar from '../Dashboard/Navbar'
import Searchbar from '../Dashboard/Searchbar'

function Employee() {
  return (
    <div className='Employee-Container'>
      
     <Sidebar/>
     <div className='Employee-header'>
      <Searchbar />
      <Navbar/>
      </div>

    </div>
  )
}

export default Employee
