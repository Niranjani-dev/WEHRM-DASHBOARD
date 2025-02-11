import React, { useState } from "react";
import Calendar from "react-calendar";
// import Listingcards from "../../Components/Assets/Listingcards.png"
import Listingcards from "../../Components/Assets/Listingcards.png";

import "react-calendar/dist/Calendar.css";

const birthdayData = {
  "2025-02-1": [
    // { name: "Person A", img: "https://via.placeholder.com/150" },
    // { name: "Person B", img: "https://via.placeholder.com/150" }
  ],
  "2025-02-16": [
    { name: "RobertWhistable", img: Listingcards, designation: "Product Manager" }
  ]
};

const BirthdayCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [photos, setPhotos] = useState([]);

  const handleDateChange = (date) => {
    const formattedDate = date.toISOString().split("T")[0];
    setSelectedDate(formattedDate);
    setPhotos(birthdayData[formattedDate] || []);
  };

  return (
    <div style={{ textAlign: "center", padding: "30px"}}>
      <Calendar onClickDay={handleDateChange} />
      {selectedDate && (
        <div>
          <h3 className="BirthdayHeading">Birthdays on {selectedDate}</h3>
          <div style={{ display: "flex", justifyContent: "center", gap: "30px" }}>
            {photos.length > 0 ? (
              photos.map((person, index) => (
                <div key={index} padding={30}>
                  <img src={person.img} alt={person.name} width={300} height={300} margin={30} />
                  {/* <p>{person.name}</p> */}
                  {/* {person.designation && <p>{person.designation}</p>} */}
                </div>
              ))
            ) : (
              <p>No birthdays on this date.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default BirthdayCalendar;
