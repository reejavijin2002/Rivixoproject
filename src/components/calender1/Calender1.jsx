import React, { useState } from 'react';
import './calender.css';
import { DatePicker } from "./DatePicker";

function App({ onSelectDate, labelFormat,onDateClick,getStyles,greenDays }) {
 

  const [reddote, setReddote] = useState([]);
  const selectedDay = (val) => {
    console.log(val);
  };

  const dummyMarkedDates = [
    { date: new Date(2023, 0, 5), text: "Event 1", marked: true },
    { date: new Date(2023, 0, 15), text: "Event 2", marked: true },
    { date: new Date(2023, 1, 10), text: "Event 3", marked: true },
    // Add more dummy dates as needed
  ];

  const furedDote = () => {
    setReddote(dummyMarkedDates);
  };

  return (
    <div className="App">
      <DatePicker
        startDate={new Date()}
        days={90}
        // Remove endDate prop if not needed
        // endDate={100}
        selectDate={new Date()}
        getSelectedDay={selectedDay}
        labelFormat={labelFormat}
        color={"#374e8c"}
        marked={dummyMarkedDates}
        reddote={reddote}
        onDateClick={onDateClick}
        getStyles={getStyles}
        greenDays={greenDays}
         // Pass reddote state to the DatePicker component
      />
    </div>
  );
}

export default App;
