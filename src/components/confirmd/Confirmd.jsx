import React, { useState, useEffect } from "react";
import "./confirmd.css";
import Calender1 from "../calender1/Calender1";
import image1 from "../../assets/Images/member.png";
import image2 from "../../assets/Images/creater.png";
import image3 from "../../assets/Images/image3.png";
import image4 from "../../assets/Images/image4.png";
import { format, addMonths } from "date-fns";
import { isSameDay } from "date-fns";
import img1 from "../../assets/Images/nomeeting.png";
import Deskcalendar1 from '../Desktopcalendar1/Deskcalendar1'


function CountdownTimer({ timeInSeconds, onTimerExpired }) {
  const [time, setTime] = useState(timeInSeconds);
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    let countdownInterval;

    if (time > 0 && !isExpired) {
      countdownInterval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else {
      setIsExpired(true);
      onTimerExpired();
    }

    return () => {
      clearInterval(countdownInterval);
    };
  }, [time, isExpired, onTimerExpired]);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    return `${hours} hrs ${minutes} min`;
  };

  return (
    <div>
      {time > 0 && !isExpired
        ? `Meeting starts in ${formatTime(time)}`
        : "Time to leave"}
    </div>
  );
}

function Confirmd(props) {
  const { getSelectedDay } = props;
  const { onRedDayClick } = props;
  const { labelFormat } = props;
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [meetingEnded, setMeetingEnded] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [selectedRedDayData, setSelectedRedDayData] = useState(null);

  const handleClicked = () => {
    setClicked(true);
  };

  const handleClicked1 = () => {
    setClicked(false);
    setSelectedRedDayData(null); 
  };

  // const handleMarkAsEnded = () => {
  //   setMeetingEnded(true);
  //   // Add any additional logic you need when the "Mark as ended" button is clicked
  // };
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

  const events = [
    {
      id:1,
      time: "3:00 PM - 5:00 PM",
      name: "Marvin McKinney",
      location: "ALFALAH",
      link: "https://maps.app.goo.gl/BVK2q8JVqNWwhwd7A",
      title: "Title here",
      timetotravel: "Traveling time 1 hour. leave before 2:00 pm",
      timetoend: "Meeting ends in 2 hours",
      ended: "",
      countdownTime: 1 * 60 * 60,
      members: [
        { name: "Jane Cooper", role: "Technical", image: image1 },
        { name: "John Doe", role: "Designer", image: image2 },
        { name: "Alice Johnson", role: "Manager", image: image3 },
        { name: "Alice Johnson", role: "Manager", image: image4 },
      ],
    },
    {
      id:2,
      time: "9:00 PM - 11:00 aM",
      name: "suresh McKinney",
      location: "ALFALAH",
      link: "https://maps.app.goo.gl/BVK2q8JVqNWwhwd7A",
      title: "Title here",
      timetotravel: "Traveling time 2 hour. leave before 1:00 pm",
      timetoend: "Meeting ends in 2 hours",
      ended: "",
      countdownTime: 0 * 0 * 0,
      members: [
        { name: "Jane Cooper", role: "Technical", image: image1 },
        { name: "John Doe", role: "Designer", image: image2 },
        { name: "Alice Johnson", role: "Manager", image: image3 },
        { name: "Alice Johnson", role: "Manager", image: image4 },
      ],
    },
  ];
  const events2 = [
    {
      id:3,
      time: "3:00 PM - 5:00 PM",
      name: "Marvin McKinney",
      location: "ALFALAH",
      link: "https://maps.app.goo.gl/BVK2q8JVqNWwhwd7A",
      title: "Title here",
      timetotravel: "Traveling time 1 hour. leave before 2:00 pm",
      timetoend: "Meeting ends in 2 hours",
      ended: "",
      countdownTime: 1 * 60 * 60,
      members: [
        { name: "Manoj Cooper", role: "Technical", image: image2 },
        { name: "John Doe", role: "Designer", image: image1 },
        { name: "Alice Johnson", role: "Manager", image: image3 },
        { name: "Alice Johnson", role: "Manager", image: image4 },
      ],
    },
    {
      id:4,
      time: "9:00 PM - 11:00 aM",
      name: "suresh McKinney",
      location: "ALFALAH",
      link: "https://maps.app.goo.gl/BVK2q8JVqNWwhwd7A",
      title: "Title here",
      timetotravel: "Traveling time 2 hour. leave before 1:00 pm",
      timetoend: "Meeting ends in 2 hours",
      ended: "",
      countdownTime: 0 * 0 * 0,
      members: [
        { name: "Jane Cooper", role: "Technical", image: image1 },
        { name: "John Doe", role: "Designer", image: image2 },
        { name: "Alice Johnson", role: "Manager", image: image3 },
        { name: "Alice Johnson", role: "Manager", image: image4 },
      ],
    },
  ];
  const events3 = [
    {
      id:5,
      time: "3:00 PM - 5:00 PM",
      name: "Marvin McKinney",
      location: "ALFALAH",
      link: "https://maps.app.goo.gl/BVK2q8JVqNWwhwd7A",
      title: "Title here",
      timetotravel: "Traveling time 1 hour. leave before 2:00 pm",
      timetoend: "Meeting ends in 2 hours",
      ended: "",
      countdownTime: 1 * 60 * 60,
      members: [
        { name: "vinoj", role: "Technical", image: image3 },
        { name: "John Doe", role: "Designer", image: image2 },
        { name: "Alice Johnson", role: "Manager", image: image1 },
        { name: "Alice Johnson", role: "Manager", image: image4 },
      ],
    },
    {
      id:6,
      time: "9:00 PM - 11:00 aM",
      name: "suresh McKinney",
      location: "ALFALAH",
      link: "https://maps.app.goo.gl/BVK2q8JVqNWwhwd7A",
      title: "Title here",
      timetotravel: "Traveling time 2 hour. leave before 1:00 pm",
      timetoend: "Meeting ends in 2 hours",
      ended: "",
      countdownTime: 0 * 0 * 0,
      members: [
        { name: "Jane Cooper", role: "Technical", image: image1 },
        { name: "John Doe", role: "Designer", image: image2 },
        { name: "Alice Johnson", role: "Manager", image: image3 },
        { name: "Alice Johnson", role: "Manager", image: image4 },
      ],
    },
  ];
  const [eventEnded, setEventEnded] = useState(
    Array(events.length).fill(false)
  );

  const handleMarkAsEnded = (id) => {
    const updatedEventEnded = [...eventEnded];
    updatedEventEnded[id] = true;
    setEventEnded(updatedEventEnded);
  };
  useEffect(() => {
    const isCurrentDateRed = isRedDay(selectedDate);
    setClicked(isCurrentDateRed);

    if (getSelectedDay) {
      getSelectedDay(selectedDate);
    }

    if (isCurrentDateRed) {
      handleClicked();

      const calenderMap = [
        { date: greenDays[0], data: events },
        { date: greenDays[1], data: events2 },
        { date: greenDays[2], data: events3 },
      ];

      const selectedMapping = calenderMap.find((mapping) =>
        isSameDay(selectedDate, mapping.date)
      );

      const dynamicData = selectedMapping ? selectedMapping.data : [];
      setSelectedRedDayData(dynamicData);

      if (onRedDayClick) {
        onRedDayClick(selectedDate);
      }
    } else {
      handleClicked1();
    }
  }, [selectedDate]);
  const isRedDay = (day) => {
    return greenDays.some((redDay) => isSameDay(redDay, day));
  };
  const onDateClick = (day) => {
    setSelectedDate(day);

    const isClickedDateRed = isRedDay(day);

    if (isClickedDateRed) {
      handleClicked();

      const calenderMap = [
        { date: greenDays[0], data: events },
        { date: greenDays[1], data: events2 },
        { date: greenDays[2], data: events3 },
      ];

      const selectedMapping = calenderMap.find((mapping) =>
        isSameDay(day, mapping.date)
      );

      const dynamicData = selectedMapping ? selectedMapping.data : [];
      setSelectedRedDayData(dynamicData);

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
  const selectedStyle = {
    fontWeight: "bold",
    width: "40px",
    height: "40px",
    borderRadius: "8px",
    color: "white",
    background: "var(--btn, linear-gradient(90deg, #4A78A1 22.43%, #56B9CF 96.11%, #57BDD3 102.05%))",
    fontSize: "12px",
    fontWeight: "400",
  };
  const getStyles = (currentDay) => {
    return isSameDay(currentDay, selectedDate) ? selectedStyle : null;
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
  const getStyles1 = (currentDay) => {
    return isSameDay(currentDay, selectedDate) ? selectedStyle1 : null;
  };
  
  const greenDays = [
    new Date(2024, 0, 7),
    new Date(2024, 0, 9),
    new Date(2024, 0, 12),
    new Date(2023, 11, 19),
    new Date(2023, 11, 21),
  
  ];
  // const renderCalendarItems = (data) => {
  //   return
  // }
  return (
    <div className="confirmd-main">
      <div className="header1">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f156499a2cad223800b453ff5712eda63b8b6b2c2676f1ecf9a7e04a4c0dba84?"
          className="header-image"
        />

        <div className="header-info"></div>
      </div>
      <Calender1
        onDateClick={onDateClick}
        getStyles={getStyles}
        greenDays={greenDays}
      />
      <div className="border1"></div>
      <div className="desktopmain"> 
        <div className="desktopcalendar  mt-[-40px] mr-auto">
        <Deskcalendar1 
        onDateClick={onDateClick}
        greenDays={greenDays} 
        isRedDay={isRedDay}
        getStyles1={getStyles1}/>
          
        </div>
        <div className="desktopseconddiv">
     

      {clicked && selectedRedDayData ? (
        selectedRedDayData.map((item) => (
          <React.Fragment key={item.id}>
            <div className="event-details" key={item.id}>
              <div className="monthone">
                <p style={{ marginBottom: "0px" }}>
                  {format(selectedDate, "MMM ")}
                </p>
                <p>{format(selectedDate, "d")}</p>
              </div>
              <div className="event-info-start">
                <div className="event-info">
                  <p className="event-time">{item.time}</p>
                  <p className="event-name">{item.name}</p>
                  <p className="event-location">{item.location}</p>
                  <div className="event-link">
                    <a
                      href={item.link}
                      target="_blank"
                      style={{ color: "#000000" }}
                    >
                      {item.link}
                    </a>
                  </div>
                </div>
                <div className="event-title text-base">{item.title}</div>
                <div className="event-members">
                  <div className="member-info">
              
                    <img
                      loading="lazy"
                      src={item.members[0].image}
                      height="50px"
                      width="50px"
                    />
                    <div className="member-details">
                      <p className="member-name">
                        {item.members[0].name}
                        <p className="member-role text-xs">
                          {item.members[0].role} (Team Leader)
                        </p>
                      </p>
                    </div>
                  </div>
                  <div className="member-list">
                    <p>Members</p>
                    <div className="member-listimages">
                      {item.members.slice(1).map((member, memberIndex) => (
                        <img
                          key={memberIndex}
                          loading="lazy"
                          src={member.image}
                        />
                      ))}
                    </div>
                  </div>
                  {item.countdownTime > 0 && (
                    <p className="travel-time">{item.timetotravel}</p>
                  )}
                  {!eventEnded[item.id] && item.countdownTime <= 0 && (
                    <p className="travel-time">{item.timetoend}</p>
                  )}
                  {meetingEnded && <p className="travel-time">{item.ended}</p>}
                </div>
                <div>
                  <div className="action1-buttons">
                    {item.countdownTime > 0 && (
                      <button className="approved1-button">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="12"
                          viewBox="0 0 16 12"
                          fill="none"
                        >
                          <path
                            d="M5.54393 9.92722L14.3459 1.1253C14.4433 1.02787 14.559 0.97594 14.693 0.969523C14.8269 0.963107 14.9491 1.01503 15.0593 1.1253C15.1696 1.23555 15.2247 1.35446 15.2247 1.48202C15.2247 1.60959 15.1696 1.7285 15.0593 1.83875L6.1093 10.7887C5.94777 10.9503 5.75931 11.0311 5.54393 11.0311C5.32855 11.0311 5.14009 10.9503 4.97855 10.7887L0.928553 6.73875C0.831103 6.64132 0.780137 6.52562 0.775653 6.39165C0.77117 6.25767 0.824054 6.13555 0.934304 6.0253C1.04457 5.91503 1.16349 5.8599 1.29105 5.8599C1.41862 5.8599 1.53753 5.91503 1.64778 6.0253L5.54393 9.92722Z"
                            fill="white"
                          />
                        </svg>
                        <CountdownTimer
                          timeInSeconds={item.countdownTime} 
                          onTimerExpired={() =>
                            console.log(`Time to leave for ${item.name}`)
                          }
                        />
                      </button>
                    )}
                    {!eventEnded[item.id] && item.countdownTime <= 0 && (
                      <button
                        className="new-button"
                        onClick={() => handleMarkAsEnded(item.id)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="12"
                          viewBox="0 0 16 12"
                          fill="none"
                        >
                          <path
                            d="M5.54393 9.92722L14.3459 1.1253C14.4433 1.02787 14.559 0.97594 14.693 0.969523C14.8269 0.963107 14.9491 1.01503 15.0593 1.1253C15.1696 1.23555 15.2247 1.35446 15.2247 1.48202C15.2247 1.60959 15.1696 1.7285 15.0593 1.83875L6.1093 10.7887C5.94777 10.9503 5.75931 11.0311 5.54393 11.0311C5.32855 11.0311 5.14009 10.9503 4.97855 10.7887L0.928553 6.73875C0.831103 6.64132 0.780137 6.52562 0.775653 6.39165C0.77117 6.25767 0.824054 6.13555 0.934304 6.0253C1.04457 5.91503 1.16349 5.8599 1.29105 5.8599C1.41862 5.8599 1.53753 5.91503 1.64778 6.0253L5.54393 9.92722Z"
                            fill="white"
                          />
                        </svg>
                        Mark as ended
                      </button>
                    )}
                    {eventEnded[item.id] && (
                      <button className="new-button1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="12"
                          viewBox="0 0 16 12"
                          fill="none"
                          color="#FF0800"
                          style={{ color: "#4A7AA2" }}
                        >
                          <path
                            d="M5.54393 9.92722L14.3459 1.1253C14.4433 1.02787 14.559 0.97594 14.693 0.969523C14.8269 0.963107 14.9491 1.01503 15.0593 1.1253C15.1696 1.23555 15.2247 1.35446 15.2247 1.48202C15.2247 1.60959 15.1696 1.7285 15.0593 1.83875L6.1093 10.7887C5.94777 10.9503 5.75931 11.0311 5.54393 11.0311C5.32855 11.0311 5.14009 10.9503 4.97855 10.7887L0.928553 6.73875C0.831103 6.64132 0.780137 6.52562 0.775653 6.39165C0.77117 6.25767 0.824054 6.13555 0.934304 6.0253C1.04457 5.91503 1.16349 5.8599 1.29105 5.8599C1.41862 5.8599 1.53753 5.91503 1.64778 6.0253L5.54393 9.92722Z"
                            fill="#4A7AA2"
                          />
                        </svg>
                        Ended
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="border"></div>
          </React.Fragment>
        ))
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

export default Confirmd;
