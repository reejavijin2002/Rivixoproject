
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isEqual,
  isSameDay,
  isSameMonth,
  isToday,
  parse,
  parseISO,
  startOfToday,
} from "date-fns";
import { Fragment, useState } from "react";

import { FaAnchor } from "react-icons/fa";
import { SlArrowRight } from "react-icons/sl";
import { SlArrowLeft } from "react-icons/sl";
import './desktop2.css'



function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example({
  onDateClick,
  redDays,
  selectedDate,
  isRedDay,
  getStyles1,
}) {
  console.log(isRedDay, "mwone");
  console.log("redDays value:", redDays);

  console.log(onDateClick, "hello");
  let today = startOfToday();
  let [selectedDay, setSelectedDay] = useState(today);
  let [currentMonth, setCurrentMonth] = useState(format(today, "MMM-yyyy"));
  let firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date());

  let days = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth),
  });

  function previousMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  }

  function nextMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  }
  let day = [];
  const dayFormat = "E";




 
 

  return (
    <div className="pt-16">
      <div className="max-w-md px-4 mx-auto sm:px-7 md:max-w-4xl md:px-6">
        <div>
          <div className="md:pr-14">
            <div className="flex items-center mb-auto">
           
              <h2 className="flex   text-gray-900 font-bold text-xl">
              <button
                type="button"
                onClick={previousMonth}
                className=" flex flex-none pr-5 items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Previous month</span>
                <SlArrowLeft />
              </button>
                {format(firstDayCurrentMonth, "MMMM ")}
                <button
                onClick={nextMonth}
                type="button"
                className="  flex flex-none pl-5 items-center justify-center  text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Next month</span>
                <SlArrowRight />
              </button>
              </h2>
             
            
            </div>
            <div className="grid grid-cols-7 mt-10  text-xs leading-6 text-center text-gray-500">
              <div>S</div>
              <div>M</div>
              <div>T</div>
              <div>W</div>
              <div>T</div>
              <div>F</div>
              <div>S</div>
            </div>
            <div className="grid grid-cols-7 mt-2 text-sm">
              {days.map((day, dayIdx) => (
                <div
                  key={day.toString()}
                  className={classNames(
                    dayIdx === 0 && colStartClasses[getDay(day)],
                    "py-1.5"
                  )}
                >
                  <button
                    style={getStyles1(day)}
                    type="button"
                    onClick={() => onDateClick(day)}
                    className={classNames(
                      isEqual(day, selectedDay) && "text-red-500",
                      !isEqual(day, selectedDay) &&
                        isToday(day) &&
                        "text-red-500",
                      !isEqual(day, selectedDay) &&
                        !isToday(day) &&
                        isSameMonth(day, firstDayCurrentMonth) &&
                        "text-gray-900",
                      !isEqual(day, selectedDay) &&
                        !isToday(day) &&
                        !isSameMonth(day, firstDayCurrentMonth) &&
                        "text-gray-400",
                      isEqual(day, selectedDay) && isToday(day) && "bg-white",
                      isEqual(day, selectedDay) &&
                        !isToday(day) &&
                        "bg-gray-900",
                      !isEqual(day, selectedDay) &&
                        "",
                      (isEqual(day, selectedDay) || isToday(day)) &&
                        "font-semibold",
                      "mx-auto flex h-11 w-9 items-center justify-center rounded-md"
                    )}
                  >
                    {redDays.some((redDay) => isSameDay(redDay, day)) ? (
                      <div className="redone mb-5 mr-0 pl-30px " style={{}}></div>
                    ) : (
                      ""
                    )}
                    <div className="flex flex-col"> 
                    <div className="calenderletters"  style={{
                          color: isEqual(day, selectedDate)
                            ? "#ffffff"
                            : "#B8B8B8",
                        }}>
                    { format(day, dayFormat).substring(0, 1)}
                    </div>
                    

                    <time
                      dateTime={format(day, "yyyy-MM-dd")}
                      className="ml-auto mr-auto calendarnumber"
                    >
                      {format(day, "d")}
                    </time>
                    </div>
                  </button>
                 
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



let colStartClasses = [
  "",
  "col-start-2",
  "col-start-3",
  "col-start-4",
  "col-start-5",
  "col-start-6",
  "col-start-7",
];
