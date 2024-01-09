import React, { useState, useEffect } from "react";
import "./calendarcomponent.css";
import Calender from "../calender/Calender";
import image1 from "../../assets/Images/member.png";
import image2 from "../../assets/Images/creater.png";
import image3 from "../../assets/Images/image3.png";
import { isSameDay } from "date-fns";
import img1 from "../../assets/Images/nomeeting.png";
import Deskcalendar2 from '../Desktopcalendar2/Deskcalendar2'


function Calendarcomponent(props) {
  const { labelFormat } = props;
  const { getSelectedDay } = props;
  const { onRedDayClick } = props;

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [clicked, setClicked] = useState(false);
  const [selectedRedDayData, setSelectedRedDayData] = useState(null);
 
  
  const handleClicked = () => {
    setClicked(true);
  }; 

  const handleClicked1 = () => {
    setClicked(false);
    setSelectedRedDayData(null); // Reset the selected red day's data
  };
  let day=[];
  useEffect(() => {
    // Check if the current date is a red day
    const isCurrentDateRed = isRedDay(selectedDate);

    // Set the clicked state based on the condition
    setClicked(isCurrentDateRed);

    if (getSelectedDay) {
      getSelectedDay(selectedDate);
    }

    if (isCurrentDateRed) {
      handleClicked();

      const calenderMap = [
        { date: redDays[0], data: calendarData },
        { date: redDays[1], data: calendarData1 },
        { date: redDays[2], data: calendarData2 },
      ];

      const selectedMapping = calenderMap.find((mapping) =>
        isSameDay(selectedDate, mapping.date)
      );

      const dynamicData = selectedMapping ? selectedMapping.data : [];
      setSelectedRedDayData(renderCalendarItems(dynamicData));

      if (onRedDayClick) {
        onRedDayClick(selectedDate);
      }
    } else {
      handleClicked1();
    }
  }, [selectedDate]);
  const selectedStyle = {
    fontWeight: "bold",
    width: "35px",
    height: "35px",
    borderRadius: "8px",
    color: "white",
    background: "var(--btn, linear-gradient(90deg, #4A78A1 22.43%, #56B9CF 96.11%, #57BDD3 102.05%))",
    fontSize: "12px",
    fontWeight: "400",
  };
  const selectedStyle1 = {
    fontWeight: "bold",
    width: "40px",
    height: "50px",
    borderRadius: "8px",
    color: "white",
    background:
      "var(--btn, linear-gradient(90deg, #4A78A1 22.43%, #56B9CF 96.11%, #57BDD3 102.05%))",
    fontSize: "12px",
    
  };

  const getStyles = (currentDay) => {
    const isSelected = isSameDay(currentDay, selectedDate);
    return isSelected ? selectedStyle : null;
  };
  const getStyles1 = (currentDay) => {
    const isSelected = isSameDay(currentDay, selectedDate);
    return isSelected ? selectedStyle1 : null;
  };

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const calendarData = [
    {
      startTime: "3:00 pm",
      endTime: "5:00 pm",
      title: "( title )",
      clientName: "Client name",
      memberImage: image1,
      memberName: "Jane Cooper",
      memberRole: "Technical",
      meetingStatus: "Meeting started",
    },
  ];

  const calendarData1 = [
    {
      startTime: "9:00 pm",
      endTime: "11:00 pm",
      title: "( title )",
      clientName: "Client name",
      memberImage: image3,
      memberName: "Jane Cooper",
      memberRole: "Technical",
      meetingStatus: "Meeting starts in 3 hrs 20 min",
    },
  ];

  const calendarData2 = [
    {
      startTime: "4:00 pm",
      endTime: "6:00 pm",
      title: "( title )",
      clientName: "Client name",
      memberImage: image2,
      memberName: "Early Cooper",
      memberRole: "Technical",
      meetingStatus: "Meeting ended",
    },
  ];

  const redDays = [
    new Date(2024, 0, 7),
    new Date(2024, 0, 11),
    new Date(2024, 0, 9),
    new Date(2024, 0, 25),
    new Date(2024, 0, 19),
    // Add more dates as needed
  ];

  const isRedDay = (day) => {
    return redDays.some((redDay) => isSameDay(redDay, day));
  };

  const renderCalendarItems = (data) => {
    return data.map((item, index) => (
      <div className="calendermain" key={index}>
        <div className="subcalender">
          <div className="subcalender1">
            <p className="subcalender1p1">{item.startTime}</p>
            <p className="subcalender1p2">{item.endTime}</p>
          </div>
        </div>
        <div className="subcalender2">
          <h6 className="subcalender2t">{item.title}</h6>
          <p className="subcalender2cn">{item.clientName}</p>
          <div className="subcalender2img1">
            <img
              loading="lazy"
              src={item.memberImage}
              alt="Member"
              style={{ paddingRight: "10px" }}
            />
            <div className="subcalender2div">
              <p className="subcalender2na">{item.memberName}</p>
              <p className="subcalender2pr">{item.memberRole}</p>
            </div>
          </div>
          <div>
            <p
              className="subcalender2st"
              style={{
                color:
                  item.meetingStatus === "Meeting started"
                    ? "#1DCC00"
                    : item.meetingStatus === "Meeting ended"
                    ? "#FF0800"
                    : "#FFC700",
              }}
            >
              {item.meetingStatus}
            </p>
          </div>
        </div>
      </div>
    ));
  };

  const onDateClick = (day) => {
    setSelectedDate(day);

    const isClickedDateRed = isRedDay(day);

    if (isClickedDateRed) {
      handleClicked();

      const calenderMap = [
        { date: redDays[0], data: calendarData },
        { date: redDays[1], data: calendarData1 },
        { date: redDays[2], data: calendarData2 },
      ];

      const selectedMapping = calenderMap.find((mapping) =>
        isSameDay(day, mapping.date)
      );

      const dynamicData = selectedMapping ? selectedMapping.data : [];
      setSelectedRedDayData(renderCalendarItems(dynamicData));

      if (onRedDayClick) {
        onRedDayClick(day);
      }
    } else {
      handleClicked1();
    }

    if (getSelectedDay) {
      getSelectedDay(day);
    }
  };

  return (
    <div className="Calendarcomponent-main">
      <div className="header1">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f156499a2cad223800b453ff5712eda63b8b6b2c2676f1ecf9a7e04a4c0dba84?"
          className="header-image"
        />

      
      </div>
      <Calender
        onSelectDate={(date) => setSelectedDate(date)}
        labelFormat={labelFormat}
        isRedDay={isRedDay}
        onDateClick={onDateClick}
        redDays={redDays}
        getStyles={getStyles}
      />
      <div className="border1"></div>
      <div className="desktopmain">
        <div className="desktopcalendar  mt-[-40px] mr-auto">
        <Deskcalendar2  onDateClick={onDateClick}
           redDays={redDays}
           isRedDay={isRedDay}
           selectedDate={selectedDate}
           getStyles1={getStyles1}/>
        </div>
        <div className="desktopseconddiv">

      {clicked ? (
        selectedRedDayData 
        
      ) : (
        <div className="nomeeting">
          <p>No meeting scheduled</p>
          <img src={img1} alt="" />
        </div>
      )}
      </div>
      </div>
    </div>
  );
}

export default Calendarcomponent;
