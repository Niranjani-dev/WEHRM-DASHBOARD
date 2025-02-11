import React from 'react'


import './Attend.css'
import Searchbar from '../Dashboard/Searchbar'
import Sidebar from '../Dashboard/Sidebar'
import Navbar from '../Dashboard/Navbar'


function Leaverequest() {
  
  
  
  
  return (

    
    <div className='Dashboard-container'>
      <div className='Dashboard-div'> 
       
      <Sidebar/>
      <div className='Header'>
      <Searchbar />
      <Navbar/>
      </div>

    

     </div>

     
     <div class="dashboard">
     <h1>Leave Request</h1>
        <div class="stats">
            <div class="card pink">Casual Leave <span>04</span></div>
            <div class="card red">Emergency Leave <span>06</span></div>
            <div class="card blue">Total Leave Jan <span>10</span></div>
            <div class="card purple">Today Leave <span>02</span></div>
        </div>

        <div class="table-container">
            <h2>Leave Request <span>01</span></h2>
            <input type="text" class="search" placeholder="Type here..."/>

            <div class="table-wrapper">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Request Date</th>
                            <th>Leave Type</th>
                            <th>Reason</th>
                            <th>No Days</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>MAGHESH <br /> <small>magesh@dotcod.in</small></td>
                            <td>6/3/22</td>
                            <td>Casual Leave</td>
                            <td>Not Well...</td>
                            <td>01</td>
                            <td class="status pending">Pending</td>
                            <td>
                                <button class="dropdown-btn">⋮</button>
                                <div class="dropdown-menu">
                                    <a href="#">✅ Approve Leave</a>
                                    <a href="#">❌ Reject Leave</a>
                                    <a href="#">👁 View Details</a>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Tesla <br /> <small>rahul@dotcod.in</small></td>
                            <td>12/2/22 - 16/2/22</td>
                            <td>Sick Leave</td>
                            <td>Not Well...</td>
                            <td>04</td>
                            <td class="status approved">Approved</td>
                            <td>
                                <button class="dropdown-btn">⋮</button>
                                <div class="dropdown-menu">
                                    <a href="#">✅ Approve Leave</a>
                                    <a href="#">❌ Reject Leave</a>
                                    <a href="#">👁 View Details</a>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>GM <br /> <small>gm@dotcod.in</small></td>
                            <td>4/19/23</td>
                            <td>Casual Leave</td>
                            <td>Sick leave</td>
                            <td>01</td>
                            <td class="status pending">Pending</td>
                            <td>
                                <button class="dropdown-btn">⋮</button>
                                <div class="dropdown-menu">
                                    <a href="#">✅ Approve Leave</a>
                                    <a href="#">❌ Reject Leave</a>
                                    <a href="#">👁 View Details</a>

                                    
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

     </div>
  )
}

export default Leaverequest
