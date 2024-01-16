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
  console.log("12ghs",onDateClick);
  console.log("style",getStyles);
 

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
 

  const dummyMarkedDates = [
    { date: new Date(2023, 0, 5), text: "Event 1", marked: true },
    { date: new Date(2023, 0, 15), text: "Event 2", marked: true },
    { date: new Date(2023, 1, 10), text: "Event 3", marked: true },
  
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
        SelectedDay={selectedDay}
        labelFormat={labelFormat}
        color={"#374e8c"}
        marked={dummyMarkedDates}
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
       marked={dummyMarkedDates}
       reddote={reddote}
       getStyles={getStyles}
       redDays={redDays}
       />
       
    </div>
  );
}

export default App;
