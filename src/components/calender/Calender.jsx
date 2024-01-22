import React, { useState } from 'react';
import './calender.css';
import { DatePicker } from "./DatePicker";
import {
  addDays,
  addMonths,
  differenceInMonths,
  format,
  isSameDay,
  lastDayOfMonth,
  startOfMonth,
} from "date-fns";
import { DateView } from './DateView';
import { MonthView } from './MonthView';

function App({ onSelectDate, labelFormat,SelectedDay,onRedDayClick ,onDateClick,getStyles,redDays}) {

 

  const [reddote, setReddote] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);

  const selectedDay = (val) => {
    console.log(val);
  };
  const handleSelectDate = (date) => {
    if (onSelectDate) {
      onSelectDate(date);
    }
  };
 
  const isRedDay = (day) => {
    return redDays.some((redDay) => isSameDay(redDay, day));
  };
 

 

  return (
    <div className="App">
      <DatePicker
        startDate={new Date()}
        days={90}
        // Remove endDate prop if not needed
        // endDate={100}
        selectDate={new Date()}
        SelectedDay={selectedDay}
        labelFormat={labelFormat}
        color={"#374e8c"}
       
        reddote={reddote}
        onDateClick={onDateClick}
        getStyles={getStyles}
        redDays={redDays}
        

      
      />

      <DateView
       onDateClick={onDateClick}
       onRedDayClick={isRedDay}
       SelectedDay={selectedDay}
       startDate={new Date()}
       days={90}
       // Remove endDate prop if not needed
       // endDate={100}
       selectDate={new Date()}
      
       labelFormat={labelFormat}
       color={"#374e8c"}
      
       reddote={reddote}
       getStyles={getStyles}
       redDays={redDays}
       />
       
    </div>
  );
}

export default App;
