import React from "react";
import Leave from '../Assets/Leave.png'
import Attend from '../Assets/Attend.png'
import TotalEmployee from '../Assets/TotalEmployee.png'
import TalentPayroll from '../Assets/TalentPayroll.png'
import Taskrequest from '../Assets/Taskrequest.png'
import Announcement from '../Assets/Announcement1.png'
import BirthdayCalendar from "./Birthday.js";

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
        <div className="GraphAnnounce">
        <div className="Graph-1">
          <img src={TalentPayroll}  alt="total"/>
        </div>
        <div className="Graphe-2">
          <img src={Taskrequest}  alt="total"/>

        </div>

        <div className="Announcement">
          <img src={Announcement}  alt="total"/>

        </div>
        <div className="Calendar">
        <h1>Calendar</h1>

        <BirthdayCalendar/>


        <div>

        </div>



        </div>



        </div>





      </div>
      </div>
    </div>
  );
}

export default Mainsection;
