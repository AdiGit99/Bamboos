import React, { useState, useEffect } from "react";

import Calendar, {
  CalendarDayHeader,
} from "../../../components/providers/CalendarView/Calendar";
import "./schedule.css";
import dayjs from "dayjs";

export default function Schedule() {
  const [day, setDay] = useState(dayjs().date());
  const [yearAndMonth, setYearAndMonth] = useState([
    dayjs().year(),
    dayjs().month() + 1,
  ]);
  let label = dayjs()
    .month(yearAndMonth[1] - 1)
    .format("MMMM");

  let dayOfWeek = dayjs().day(dayjs().day()).format("dddd");
  useEffect(() => {
    label = dayjs()
      .month(yearAndMonth[1] - 1)
      .format("MMMM");
  });

  return (
    <div className="calendar">
      <div className="event-container">
        <div className="event-wrapper">
          <span className="today">Today</span>
          <div className="date-container">
            <span className="day">{day}</span>
            <div className="date-subcontainer">
              <span className="week">{dayOfWeek}</span>
              <span className="month">
                {label}, {yearAndMonth[0]}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="calendar-container">
        <Calendar
          yearAndMonth={yearAndMonth}
          onYearAndMonthChange={setYearAndMonth}
          monthName={label}
          renderDay={(calendarDayObject) => (
            <div>
              <CalendarDayHeader calendarDayObject={calendarDayObject} />
            </div>
          )}
        />
      </div>
    </div>
  );
}
