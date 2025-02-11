
// import React, { useState } from "react";
// import Navbar from '../Dashboard/Navbar';
// import Searchbar from '../Dashboard/Searchbar';
// import Sidebar from '../Dashboard/Sidebar';

// const Accordion = ({ title, children }) => {
//   const [isOpen, setIsOpen] = useState(true);

//   return (

    
//     <div className="border rounded-lg mb-4">
//       <div
//         className="flex justify-between items-center p-4 bg-gray-100 cursor-pointer"
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         <h2 className="font-semibold">{title}</h2>
//         <button>{isOpen ? "−" : "+"}</button>
//       </div>
//       {isOpen && <div className="p-4">{children}</div>}
//     </div>
//   );
// };

// const EmployeeForm = () => {

    
//   return (
//     <div>
//         <Sidebar/>
//       <Searchbar />
//       <Navbar />
 
   
//     <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
//       <Accordion title="Add details of an employee">
//         <div className="grid grid-cols-2 gap-4">
//           <input type="text" placeholder="Enter Employee Name" className="border p-2 rounded w-full" />
//           <input type="text" placeholder="Employee Number" className="border p-2 rounded w-full" value="1100012" readOnly />
//           <input type="date" placeholder="Date of joining" className="border p-2 rounded w-full" />
//           <input type="email" placeholder="Enter Email ID" className="border p-2 rounded w-full" />
//           <input type="text" placeholder="Enter Mobile Number" className="border p-2 rounded w-full" />
//           <select className="border p-2 rounded w-full">
//             <option>Employee Status</option>
//             <option>Active</option>
//             <option>Inactive</option>
//           </select>
//         </div>
//       </Accordion>

//       <Accordion title="Personal Details">
//         <div className="grid grid-cols-2 gap-4">
//           <input type="date" placeholder="Date of Birth" className="border p-2 rounded w-full" />
//           <select className="border p-2 rounded w-full">
//             <option>Gender</option>
//             <option>Male</option>
//             <option>Female</option>
//             <option>Other</option>
//           </select>
//           <select className="border p-2 rounded w-full">
//             <option>Marital Status</option>
//             <option>Single</option>
//             <option>Married</option>
//           </select>
//           <select className="border p-2 rounded w-full">
//             <option>Is Physical Challenged</option>
//             <option>Yes</option>
//             <option>No</option>
//           </select>
//           <select className="border p-2 rounded w-full">
//             <option>Blood Group</option>
//             <option>O+</option>
//             <option>A+</option>
//             <option>B+</option>
//           </select>
//           <input type="email" placeholder="Enter Personal Email ID" className="border p-2 rounded w-full" />
//         </div>
//       </Accordion>

//       <Accordion title="Department">
//         <input type="text" placeholder="Enter Department" className="border p-2 rounded w-full" />
//       </Accordion>

//       <Accordion title="Configuration">
//         <input type="text" placeholder="Enter Configuration" className="border p-2 rounded w-full" />
//       </Accordion>

//       <div className="flex justify-end space-x-4 mt-4">
//         <button className="border px-4 py-2 rounded">Cancel</button>
//         <button className="bg-black text-white px-4 py-2 rounded">Save</button>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default EmployeeForm;

import Navbar from '../Dashboard/Navbar';
import Searchbar from '../Dashboard/Searchbar';
import Sidebar from '../Dashboard/Sidebar';
import React, { useState, useEffect } from "react";
import {Image} from '../../../src/Components/Assets/Plus.png';

import './EmployeeTable.css';
import Plus from '../Assets/Plus.png'



const Employeeform = () => {



  return (

      <div className='Employee-container'>
        <Sidebar />
        <div className='EmployeeTable-header'>
          <Searchbar />
          <Navbar />
        </div>
      

      <div className="main-container">
      {/ Add Employee Section /}
      <div className="section-container">
        <h2>Add details of an employee</h2>
        <form>
          <div className="form-grid">
            {/ Employee Name /}
            <div className="form-group">
              <label>Employee Name <span className="required">*</span></label>
              <input type="text" className="input-field" placeholder="Enter Employee Name" />
            </div>

            {/ Employee Number /}
            <div className="form-group">
              <label>Employee Number <span className="required">*</span></label>
              <input type="text" className="input-field" placeholder="Enter Employee ID"  />
            </div>

            {/ Date of Joining /}
            <div className="form-group">
              <label>Date of Joining <span className="required">*</span></label>
              <input type="date" className="input-field" />
            </div>

            {/ Email ID /}
            <div className="form-group">
              <label>Email ID <span className="required">*</span></label>
              <input type="email" className="input-field" placeholder="Enter Email ID" />
            </div>

            {/ Mobile Number /}
            <div className="form-group">
              <label>Mobile Number <span className="required">*</span></label>
              <input type="tel" className="input-field" placeholder="Enter Mobile Number" />
            </div>

            {/ Employee Status /}
            <div className="form-group">
              <label>Employee Status <span className="required">*</span></label>
              <select className="input-field">
                <option>Employee Status</option>
                <option>Active</option>
                <option>Inactive</option>
              </select>
            </div>
          </div>
        </form>
      </div>

      {/ Personal Details Section /}
      <div className="section-container">
        <h2>Personal Details</h2>
        <form>
          <div className="form-grid">
            {/ Date of Birth /}
            <div className="form-group">
              <label>Date of Birth <span className="required">*</span></label>
              <input type="date" className="input-field" />
            </div>

            {/ Gender /}
            <div className="form-group">
              <label>Gender <span className="required">*</span></label>
              <select className="input-field">
                <option>Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>

            {/ Marital Status /}
            <div className="form-group">
              <label>Marital Status <span className="required">*</span></label>
              <select className="input-field">
                <option>Marital Status</option>
                <option>Single</option>
                <option>Married</option>
                <option>Divorced</option>
              </select>
            </div>

            {/ Is Physically Challenged /}
            <div className="form-group">
              <label>Is Physically Challenged</label>
              <select className="input-field">
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>

            {/ Blood Group /}
            <div className="form-group">
              <label>Blood Group <span className="required">*</span></label>
              <select className="input-field">
                <option>O+</option>
                <option>A+</option>
                <option>B+</option>
                <option>AB+</option>
              </select>
            </div>

            {/ Personal Email ID /}
            <div className="form-group">
              <label>Personal Email ID <span className="required">*</span></label>
              <input type="email" className="input-field" placeholder="Enter Email ID" />
            </div>
          </div>
        </form>
        
        <div className="config-container">
      {/ Department Section /}
      <div className="config-section">
        <span className="config-label">Department</span>
       <span><img className='img'src={("../Assets/Plus.png")} ></img></span>
     
      </div>

      {/ Configuration Section /}
      <div className="config-section">
        <span className="config-label">Configuration</span>
        <div className="btn">
        <button className="cancel-button">Cancel</button>
        <button className="save-button">Save</button>
        </div>
      </div>

      {/ Buttons /}
      
    </div>

    
    
      </div>
    </div>
    </div>
    

    
   


  );
};

export default Employeeform;