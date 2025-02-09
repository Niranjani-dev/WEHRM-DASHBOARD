import React from "react";
import Leave from '../Assets/Leave.png'
import Attend from '../Assets/Attend.png'
import TotalEmployee from '../Assets/TotalEmployee.png'
function Mainsection() {
  return (
    <div className="Main">
      <h1>Dashboard</h1>
      <div className="Mainsection">
      <div className="Leave-container">
        <div className="Leave">
          <img src={Leave} alt="leave" />
        </div>

        <div className="Attendance">
          <img src={Attend}  alt="Attend" />
        </div>

        <div className="Total-Employees">
          <img src={TotalEmployee}  alt="total"/>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Mainsection;
