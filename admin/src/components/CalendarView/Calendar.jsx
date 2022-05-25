import PropTypes from "prop-types";
import classNames from "classnames";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import {
  daysOfWeek,
  createDaysForCurrentMonth,
  createDaysForNextMonth,
  createDaysForPreviousMonth,
  isWeekendDay,
  getMonthDropdownOptions,
  getYearDropdownOptions,
} from "./helpers";

import "./calendar.scss";

Calendar.propTypes = {
  className: PropTypes.string,
  yearAndMonth: PropTypes.arrayOf(PropTypes.number).isRequired, // e.g. [2021, 6] for June 2021
  onYearAndMonthChange: PropTypes.func.isRequired,
  renderDay: PropTypes.func,
};
export default function Calendar({
  className = "",
  yearAndMonth,
  onYearAndMonthChange,
  monthName,
  renderDay = () => null,
}) {
  const [year, month] = yearAndMonth;

  let currentMonthDays = createDaysForCurrentMonth(year, month);
  let previousMonthDays = createDaysForPreviousMonth(
    year,
    month,
    currentMonthDays
  );
  let nextMonthDays = createDaysForNextMonth(year, month, currentMonthDays);
  let calendarGridDayObjects = [
    ...previousMonthDays,
    ...currentMonthDays,
    ...nextMonthDays,
  ];

  const handleMonthNavBackButtonClick = () => {
    let nextYear = year;
    let nextMonth = month - 1;
    if (nextMonth === 0) {
      nextMonth = 12;
      nextYear = year - 1;
    }

    onYearAndMonthChange([nextYear, nextMonth]);
  };

  const handleMonthNavForwardButtonClick = () => {
    let nextYear = year;
    let nextMonth = month + 1;
    if (nextMonth === 13) {
      nextMonth = 1;
      nextYear = year + 1;
    }
    onYearAndMonthChange([nextYear, nextMonth]);
  };

  const handleMonthSelect = (evt) => {
    let nextYear = year;
    let nextMonth = parseInt(evt.target.value, 10);
    onYearAndMonthChange([nextYear, nextMonth]);
  };

  const handleYearSelect = (evt) => {
    let nextMonth = month;
    let nextYear = parseInt(evt.target.value, 10);
    onYearAndMonthChange([nextYear, nextMonth]);
  };

  return (
    <div className="calendar-root">
      <div className="navigation-header">
        <div className="calendar-navigation-wrapper">
          <div className="month-nav-arrow-buttons">
            <ChevronLeftIcon
              className="button"
              onClick={handleMonthNavBackButtonClick}
            />
          </div>
          <div
            className="month-select"
            // value={month}
            // onChange={handleMonthSelect}
          >
            <span className="entry one">{monthName}</span>
            <span className="entry two"> , </span>
            <span className="entry three">{yearAndMonth[0]}</span>
            {/* {getMonthDropdownOptions().map(({ label, value }) => (
              <option value={value} key={value}>
                {label}
              </option>
            ))} */}
          </div>
          <div className="month-nav-arrow-buttons">
            <ChevronRightIcon
              className="button"
              onClick={handleMonthNavForwardButtonClick}
            />
          </div>
          {/* <select
          className="year-select"
          value={year}
          onChange={handleYearSelect}
        >
          {getYearDropdownOptions(year).map(({ label, value }) => (
            <option value={value} key={value}>
              {label}
            </option>
          ))}
        </select> */}
        </div>
      </div>
      <div className="calendar-wrapper">
        <div className="days-of-week">
          {daysOfWeek.map((day, index) => (
            <div
              key={day}
              className={classNames("day-of-week-header-cell", {
                "weekend-day": [6, 0].includes(index),
              })}
            >
              {day}
            </div>
          ))}
        </div>
        <div className="days-grid">
          {calendarGridDayObjects.map((day) => (
            <div
              key={day.dateString}
              className={classNames("day-grid-item-container", {
                "weekend-day": isWeekendDay(day.dateString),
                "current-month": day.isCurrentMonth,
              })}
            >
              <div className="day-content-wrapper">{renderDay(day)}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

CalendarDayHeader.propTypes = {
  calendarDayObject: PropTypes.object.isRequired,
};
export function CalendarDayHeader({ calendarDayObject }) {
  return (
    <div className="day-grid-item-header">{calendarDayObject.dayOfMonth}</div>
  );
}
