/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import styles from "./DatePicker.module.css";
import {
  addDays,
  addMonths,
  differenceInMonths,
  format,
  isSameDay,
  lastDayOfMonth,
  startOfMonth,
} from "date-fns";

const DateView = ({
  startDate,
  lastDate,
  selectDate,
  getSelectedDay,
  
  primaryColor,
  labelFormat,
  marked,
  onDateClick,
  redDays,getStyles
}) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const firstSection = { marginLeft: "40px" };

  const labelColor = { color: primaryColor };
  const markedStyle = { color: "#8c3737", padding: "2px", fontSize: 12 };

 

  const getId = (currentDay) => {
    return isSameDay(currentDay, selectedDate) ? "selected" : "";
  };

  const getMarked = (currentDay) => {
    let markedRes = marked.find((i) => isSameDay(i.date, currentDay));
    if (markedRes) {
      if (!markedRes?.marked) {
        return;
      }

      return (
        <div
          style={{ ...(markedRes?.style ?? markedStyle) }}
          className={styles.markedLabel}
        >
          {markedRes.text}
        </div>
      );
    }

    return "";
  };

  const renderDays = () => {
  
    const greenDays = [
    
    ];
    const dayFormat = "E";
    const dateFormat = "d";

    const months = [];
    let days = [];

    for (let i = 0; i <= differenceInMonths(lastDate, startDate); i++) {
      let start, end;
      const month = startOfMonth(addMonths(startDate, i));

      start = i === 0 ? Number(format(startDate, dateFormat)) - 1 : 0;
      end =
        i === differenceInMonths(lastDate, startDate)
          ? Number(format(lastDate, "d"))
          : Number(format(lastDayOfMonth(month), "d"));

      for (let j = start; j < end; j++) {
        let currentDay = addDays(month, j);
        const isMarkedDay =
          marked && marked.some((item) => isSameDay(item.date, currentDay));
        const isRedDay = redDays.some((redDay) => isSameDay(redDay, currentDay));

        const formattedDay = format(currentDay, dayFormat).substring(0, 1);

        days.push(
          <div
            id={`${getId(currentDay)}`}
            className={`${isMarkedDay ? styles.dateDayItemMarked : styles.dateDayItem} ${
              isRedDay ? "" : ""
            }`}
            style={getStyles(currentDay)}
            key={currentDay}
            onClick={() => onDateClick(currentDay)}
          >
            <div className={styles.dayLabel}></div>
            {isRedDay && <div className="redone"></div>}
            {formattedDay} 
            <div className={styles.dateLabel}>
              {format(currentDay, dateFormat)}
            </div>
            {isMarkedDay && (
              <div className={`${styles.redDot} ${styles.redDotRightCorner}`}></div>
            )}
          </div>
        );
      }

      months.push(
        <div className={styles.monthContainer} key={month}>
          <span className={styles.monthYearLabel} style={labelColor}>
            {format(month, labelFormat || "MMMM ")}
          </span>
          <div
            className={styles.daysContainer}
            style={i === 0 ? firstSection : null}
          >
            {days}
          </div>
        </div>
      );
      days = [];
    }

    return (
      <div id={"container"} className={styles.dateListScrollable}>
        {months}
      </div>
    );
  };

  // const onDateClick = (day) => {
  //   setSelectedDate(day);
  //   if (getSelectedDay) {
  //     getSelectedDay(day);
  //   }
  // };

  useEffect(() => {
    if (getSelectedDay) {
      if (selectDate) {
        getSelectedDay(selectDate);
      } else {
        getSelectedDay(startDate);
      }
    }
  }, []);

  useEffect(() => {
    if (selectDate) {
      if (!isSameDay(selectedDate, selectDate)) {
        setSelectedDate(selectDate);
        setTimeout(() => {
          let view = document.getElementById("selected");
          if (view) {
            view.scrollIntoView({
              behavior: "smooth",
              inline: "center",
              block: "nearest",
            });
          }
        }, 20);
      }
    }
  }, [selectDate]);

  return <React.Fragment>{renderDays()}</React.Fragment>;
};

export { DateView };
