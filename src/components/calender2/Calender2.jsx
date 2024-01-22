import React, { useState } from 'react';
import './calender.css';
import { DatePicker } from "./DatePicker";

function App({ onSelectDate, labelFormat,onDateClick,getStyles,redDays }) {
 

  const [reddote, setReddote] = useState([]);
  const selectedDay = (val) => {
    console.log(val);
  };



  return (
    <div className="App">
      <DatePicker
        startDate={new Date()}
        days={90}
      
        selectDate={new Date()}
        getSelectedDay={selectedDay}
        labelFormat={labelFormat}
        color={"#374e8c"}
       
        reddote={reddote}
        onDateClick={onDateClick}
        getStyles={getStyles}
        redDays={redDays} 
      />
    </div>
  );
}

export default App;
