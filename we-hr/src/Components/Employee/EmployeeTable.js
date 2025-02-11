
// import Sidebar from '../Dashboard/Sidebar';
// 





import Sidebar from '../Dashboard/Sidebar';
import Navbar from '../Dashboard/Navbar';
import Searchbar from '../Dashboard/Searchbar';
import React, { useState } from "react";
import "../Signin/signin.css";
import "./EmployeeTable.css";
import { useNavigate } from "react-router-dom";

const employeesData = [
  { id: "11D001", name: "MAGHESH", email: "magesh@dotcod.in", joinDate: "5/2/2024", designation: "Software Engineer", status: "Confirmed" },
  { id: "11D002", name: "Tesla", email: "Rshaull@dotcod.in", joinDate: "6/3/2024", designation: "Frontend Engineer", status: "Probation" },
  { id: "11D003", name: "GM", email: "gm@dotcod.in", joinDate: "4/12/2023", designation: "Frontend Engineer", status: "Confirmed" },
  { id: "11D004", name: "AARP", email: "aarp@dotcod.in", joinDate: "1/2/2023", designation: "Software Engineer", status: "Probation" },
  { id: "11D005", name: "Disney", email: "", joinDate: "9/4/2023", designation: "Software Engineer", status: "Confirmed" },
  { id: "11D006", name: "Prime Therapeutics", email: "", joinDate: "6/3/2022", designation: "Software Engineer", status: "Probation" },
  { id: "11D007", name: "Match.com", email: "CODE@dotcod.in", joinDate: "12/2/2022", designation: "Software Engineer", status: "Confirmed" },
  { id: "11D008", name: "Chevy", email: "@dotcod.in", joinDate: "4/19/2023", designation: "Software Engineer", status: "Probation" },
];

const EmployeeTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortType, setSortType] = useState("Name");
  const [order, setOrder] = useState("Ascending");
  const navigate = useNavigate();

  const sortedEmployees = [...employeesData].sort((a, b) => {
    if (sortType === "Name") {
      return order === "Ascending" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
    } else if (sortType === "Date") {
      return order === "Ascending" ? new Date(a.joinDate) - new Date(b.joinDate) : new Date(b.joinDate) - new Date(a.joinDate);
    } else if (sortType === "Designation") {
      return order === "Ascending" ? a.designation.localeCompare(b.designation) : b.designation.localeCompare(a.designation);
    } else if (sortType === "Status") {
      return order === "Ascending" ? a.status.localeCompare(b.status) : b.status.localeCompare(a.status);
    }
    return 0;
  });

  return (
    <div>
      <div className='Employee-container'>
        <Sidebar />
        <div className='EmployeeTable-header'>
          <Searchbar />
          <Navbar />
        </div>
      </div>

      <div className="employee-container">
        <div className='Addbtn'>
          <h2>Employee</h2>
          <div>
            <button className="import-button"> + Import Excel</button>
            <button className="add-button" onClick={() => navigate("/mployeeform")}>
              + Add Employee
            </button>  
          </div>
        </div>

        <div className="top-controls">
          <span>Employee <strong>250</strong></span>
          <input 
            type="text" 
            className="search-bar" 
            placeholder="Search for Employee..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="table-container"> 
          <table className="employee-table">
            <thead>
              <tr>
                <th>Select</th>
                <th>
                  <select onChange={(e) => setSortType("Name") || setOrder(e.target.value)}>
                    <option>Name</option>
                    <option>Ascending</option>
                    <option>Descending</option>
                  </select>
                </th>
                <th>
                  <select onChange={(e) => setSortType("Date") || setOrder(e.target.value)}>
                    <option>Sort by Date</option>
                    <option>Created Date</option>
                    <option>Join Date</option>
                    <option>Releaved Date</option>
                    <option>Salary Hike Date</option>
                  </select>
                </th>
                <th>
                  <select onChange={(e) => setSortType("Designation") || setOrder(e.target.value)}>
                    <option>Designation</option>
                    <option>Software Engineer</option>
                    <option>Product Engineer</option>
                    <option>UX/UI Engineer</option>
                    <option>HR Manager</option>
                  </select>
                </th>
                <th>
                  <select onChange={(e) => setSortType("Status") || setOrder(e.target.value)}>
                    <option>Status</option>
                    <option>Confirmed</option>
                    <option>Probation</option>
                  </select>
                </th>
                <th>Options</th>
              </tr>
            </thead>
            <tbody>
              {sortedEmployees.length > 0 ? (
                sortedEmployees.map((emp) => (
                  <tr key={emp.id}>
                    <td>
                      <input type="radio" name="employeeSelect" className="radio-btn" /> {emp.id}
                    </td>
                    <td>{emp.name} <span className="email">{emp.email}</span></td>
                    <td>{emp.joinDate}</td>
                    <td>{emp.designation}</td>
                    <td>{emp.status}</td>
                    <td>...</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" style={{ textAlign: "center" }}>No employees found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EmployeeTable;
