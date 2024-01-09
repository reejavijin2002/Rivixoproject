import React, { useState, useRef, useEffect } from "react";
import "./pending.css";
import ColumnGroup from "antd/es/table/ColumnGroup";
import image1 from "../../assets/Images/member.png";
import image2 from "../../assets/Images/creater.png";
import image3 from "../../assets/Images/image3.png";
import image4 from "../../assets/Images/image4.png";

import Calender2 from "../calender2/Calender2";
import { format, addMonths } from "date-fns";
import { isSameDay } from "date-fns";
import Popup from "reactjs-popup";
import Overlay from "react-bootstrap/Overlay";
import img1 from "../../assets/Images/nomeeting.png";
import Item from "antd/es/list/Item";
import Calendar from "react-calendar";
import Deskcalendar from '../Desktopcalendar/Deskcalendar'

function MyComponent(props) {
  const { getSelectedDay } = props;
  const { onRedDayClick } = props;
  

  const { labelFormat } = props;
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [approvalStatus, setApprovalStatus] = useState({});
  const [showRejectPopup, setShowRejectPopup] = useState(false);
  const [isPopupActive, setIsPopupActive] = useState(false);
  const [clickedIndex, setClickedIndex] = useState(null);
  const [show, setShow] = useState(false);
  const [rejectReason, setRejectReason] = useState("");
  const [rejected, setRejected] = useState(false);
  const [isSaveClicked, setIsSaveClicked] = useState(false);
  const [isCancelClicked, setIsCancelClicked] = useState(false);
  const [isSaveButtonClicked, setIsSaveButtonClicked] = useState(false);
  const [currentMenu, setCurrentMenu] = useState("main");

  const [showRejectAcceptButtons, setShowRejectAcceptButtons] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [selectedRedDayData, setSelectedRedDayData] = useState(null);
  console.log(selectedDate,"sulaiman");

  const handleClicked = () => {
    setClicked(true);
  };

  const handleClicked1 = () => {
    setClicked(false);
    setSelectedRedDayData(null);
  };

  const events = [
    {
      id: 1,
      time: "3:00 PM - 5:00 PM",
      name: "Marvin McKinney",
      location: "ALFALAH",
      link: "https://maps.app.goo.gl/BVK2q8JVqNWwhwd7A",
      title: "Title here",
      members: [
        { name: "Jane Cooper", role: "Technical", image: image1 },
        { name: "John Doe", role: "Designer", image: image2 },
        { name: "Alice Johnson", role: "Manager", image: image3 },
        { name: "Alice Johnson", role: "Manager", image: image4 },
      ],
    },
    {
      id: 2,
      time: "3:00 PM - 5:00 PM",
      name: "Marvin McKinney",
      location: "ALFALAH",
      link: "https://maps.app.goo.gl/BVK2q8JVqNWwhwd7A",
      title: "Title here",
      members: [
        { name: "Jane Cooper", role: "Technical", image: image4 },
        { name: "John Doe", role: "Designer", image: image2 },
        { name: "Alice Johnson", role: "Manager", image: image3 },
        { name: "Alice Johnson", role: "Manager", image: image1 },
      ],
    },
  ];
  const Pendingdata2 = [
    {
      id: 3,
      time: "9:00 PM - 11:00 aM",
      name: "vimal McKinney",
      location: "ALFALAH",
      link: "https://maps.app.goo.gl/BVK2q8JVqNWwhwd7A",
      title: "Title here",
      members: [
        { name: "Malik Cooper", role: "Technical", image: image3 },
        { name: "John Doe", role: "Designer", image: image2 },
        { name: "Alice Johnson", role: "Manager", image: image1 },
        { name: "Alice Johnson", role: "Manager", image: image4 },
      ],
    },
    {
      id: 4,
      time: "9:00 PM - 11:00 aM",
      name: "vimal McKinney",
      location: "ALFALAH",
      link: "https://maps.app.goo.gl/BVK2q8JVqNWwhwd7A",
      title: "Title here",
      members: [
        { name: "Malik Cooper", role: "Technical", image: image2 },
        { name: "John Doe", role: "Designer", image: image1 },
        { name: "Alice Johnson", role: "Manager", image: image3 },
        { name: "Alice Johnson", role: "Manager", image: image4 },
      ],
    },
  ];
  const Pendingdata3 = [
    {
      id: 5,
      time: "9:00 PM - 11:00 aM",
      name: "jibran McKinney",
      location: "ALFALAH",
      link: "https://maps.app.goo.gl/BVK2q8JVqNWwhwd7A",
      title: "Title here",
      members: [
        { name: "Jibran Cooper", role: "Technical", image: image2 },
        { name: "John Doe", role: "Designer", image: image1 },
        { name: "Alice Johnson", role: "Manager", image: image3 },
        { name: "Alice Johnson", role: "Manager", image: image4 },
      ],
    },
    {
      id: 6,
      time: "9:00 PM - 11:00 aM",
      name: "jibran McKinney",
      location: "ALFALAH",
      link: "https://maps.app.goo.gl/BVK2q8JVqNWwhwd7A",
      title: "Title here",
      members: [
        { name: "Jibran Cooper", role: "Technical", image: image3 },
        { name: "John Doe", role: "Designer", image: image1 },
        { name: "Alice Johnson", role: "Manager", image: image2 },
        { name: "Alice Johnson", role: "Manager", image: image4 },
      ],
    },
  ];
  useEffect(() => {
    const isCurrentDateRed = isRedDay(selectedDate);
    setClicked(isCurrentDateRed);
    if (getSelectedDay) {
      getSelectedDay(selectedDate);
    }
    if (isCurrentDateRed) {
      handleClicked();
      const calenderMap = [
        { date: redDays[0], data: events },
        { date: redDays[1], data: Pendingdata2 },
        { date: redDays[2], data: Pendingdata3 },
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

  const rejectHandler = () => {
    setRejected(true);
  };
  const [showRejectPopups, setShowRejectPopups] = useState(
    Array(events.length).fill(false)
  );
  const [isRejected, setIsRejected] = useState(
    Array(events.length).fill(false)
  );
  const handleApprove = (id) => {
    console.log(`Reject button clicked for id:${id}`);
    console.log("approve");
    setApprovalStatus((prevStatus) => ({
      ...prevStatus,
      [id]: "approved",
    }));
  };

  const handleReject = (id) => {
    setShowRejectPopups((prevPopups) => {
      const newPopups = [...prevPopups];
      newPopups[id] = true;
      return newPopups;
    });

    setIsRejected((prevRejections) => {
      const newRejections = [...prevRejections];
      newRejections[id] = true;
      return newRejections;
    });

    setClickedIndex(id);

    setApprovalStatus((prevStatus) => ({
      ...prevStatus,
      [id]: "rejected",
    }));

    setShowRejectAcceptButtons(true);
  };

  const handleCancel = (id) => {
    setIsCancelClicked(true);

    setApprovalStatus((prevStatus) => ({
      ...prevStatus,
      [id]: undefined,
    }));

    setShowRejectPopups((prevPopups) => {
      const newPopups = [...prevPopups];
      newPopups[id] = false;
      return newPopups;
    });
    setCurrentMenu("default");
  };

  const handleSave = (id) => {
    setIsSaveClicked(true);

    setShowRejectPopups((prevPopups) => {
      const newPopups = [...prevPopups];
      newPopups[id] = false;
      return newPopups;
    });

    if (approvalStatus[id] === "rejected") {
      setIsRejected((prevRejections) => {
        const newRejections = [...prevRejections];
        newRejections[id] = true;
        return newRejections;
      });

      setIsSaveButtonClicked(true);
    }
  };

  const redDays = [
    new Date(2024, 0, 7),
    new Date(2024, 0, 10),
    new Date(2024, 0, 13),
    new Date(2023, 11, 15),
    new Date(2023, 11, 17),
  ];
  const selectedStyle = {
    fontWeight: "bold",
    width: "35px",
    height: "35px",
    borderRadius: "8px",
    color: "white",
    background:
      "var(--btn, linear-gradient(90deg, #4A78A1 22.43%, #56B9CF 96.11%, #57BDD3 102.05%))",
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

  const isRedDay = (day) => {
    return redDays.some((redDay) => isSameDay(redDay, day));
  };
   const onDateClick = (day) => {
    setSelectedDate(day);

    const isClickedDateRed = isRedDay(day);
       
    if (isClickedDateRed) {
      handleClicked();
      const calenderMap = [
        { date: redDays[0], data: events },
        { date: redDays[1], data: Pendingdata2 },
        { date: redDays[2], data: Pendingdata3 },
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
  const renderCalendarItems = (data, arrayIndex) => {
    return;
  };
  

  return (
    <div className="pending-component">
      <div className="header1">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f156499a2cad223800b453ff5712eda63b8b6b2c2676f1ecf9a7e04a4c0dba84?"
          className="header-image"
        />

        <div className="header-info bg"></div>
      </div>
      <Calender2
        onSelectDate={(date) => setSelectedDate(date)}
        labelFormat={labelFormat}
        onDateClick={onDateClick}
        redDays={redDays}
        getStyles={getStyles}
        
      />

      <div className="border1"></div>
      <div className="desktopmain">
        <div className="desktopcalendar mt-[-40px] mr-auto">
          <Deskcalendar  onDateClick={onDateClick}
           redDays={redDays}
           isRedDay={isRedDay}
           selectedDate={selectedDate}
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
                </div>
                <div>
                  <div className="action-buttons">
                    {!approvalStatus[item.id] && (
                      <>
                        <>
                          <button
                            className="reject-button"
                            onClick={() => handleReject(item.id)}
                          >
                            Reject
                          </button>
                          <button
                            className="approve-button"
                            onClick={() => handleApprove(item.id)}
                          >
                            Approve
                          </button>
                        </>
                      </>
                    )}
                    {approvalStatus[item.id] === "approved" && (
                      <button className="approved-button">
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
                        Approved
                      </button>
                    )}

                    {isSaveButtonClicked &&
                      approvalStatus[item.id] === "rejected" && (
                        <button className="rejected-button">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                          >
                            <path
                              d="M6.99995 7.70765L1.7538 12.9538C1.66022 13.0474 1.54547 13.0974 1.40957 13.1038C1.27367 13.1102 1.15252 13.0602 1.0461 12.9538C0.939683 12.8474 0.886475 12.7294 0.886475 12.5999C0.886475 12.4705 0.939683 12.3525 1.0461 12.2461L6.29225 6.99995L1.0461 1.7538C0.952516 1.66022 0.902516 1.54547 0.896099 1.40957C0.889683 1.27367 0.939683 1.15252 1.0461 1.0461C1.15252 0.939683 1.27047 0.886475 1.39995 0.886475C1.52943 0.886475 1.64738 0.939683 1.7538 1.0461L6.99995 6.29225L12.2461 1.0461C12.3397 0.952517 12.4544 0.902517 12.5903 0.8961C12.7262 0.889683 12.8474 0.939683 12.9538 1.0461C13.0602 1.15252 13.1134 1.27047 13.1134 1.39995C13.1134 1.52943 13.0602 1.64738 12.9538 1.7538L7.70765 6.99995L12.9538 12.2461C13.0474 12.3397 13.0974 12.4544 13.1038 12.5903C13.1102 12.7262 13.0602 12.8474 12.9538 12.9538C12.8474 13.0602 12.7294 13.1134 12.5999 13.1134C12.4705 13.1134 12.3525 13.0602 12.2461 12.9538L6.99995 7.70765Z"
                              fill="white"
                            />
                          </svg>
                          Rejected
                        </button>
                      )}
                  </div>

                  <div className="overlay">
                    {showRejectPopups[item.id] && (
                      <div className={`popup ${isPopupActive ? "active" : ""}`}>
                        <p>Reason</p>
                        <input
                          type="text"
                          placeholder="Enter the reason here"
                          value={rejectReason}
                          onChange={(e) => setRejectReason(e.target.value)}
                        />
                        <div className="btn1">
                          <button
                            className="btn1cancel"
                            onClick={() => handleCancel(item.id)}
                          >
                            Cancel
                          </button>

                          <button
                            className="btn1save"
                            onClick={() => handleSave(item.id)}
                          >
                            Save
                          </button>
                        </div>
                      </div>
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

export default MyComponent;
