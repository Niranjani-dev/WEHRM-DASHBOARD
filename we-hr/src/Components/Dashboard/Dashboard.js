import React from 'react'

import Searchbar from './Searchbar'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import Mainsection from './Mainsection'

 

const Dashboard = () => {
  return (
    <div className='Dashboard-container'>
      <div className='Dashboard-div'> 
       
      <Sidebar/>
      <div className='Header'>
      <Searchbar />
      <Navbar/>
      </div>
      <div className='Mainpage'>
      <Mainsection />
     
      </div>
     
      </div>
       
        
        
        
      </div>
  
  )
}

export default Dashboard
