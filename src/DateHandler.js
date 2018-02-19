import React from 'react';

var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

function daysInMonth (month, year) {
  // Use 1 for January, 2 for February, etc.
  return new Date(year, month, 0).getDate();
}
export function WorkDay() {
  this.start = "00:00";
  this.finish = "00:00";
  this.breaks = "00";
  this.day = 0;
};

export function WorkMonth() {
  this.month = 1;
  this.name = monthNames[this.month-1];
  this.totDays = 31;
  this.days = [];
  this.empty = function() {return (this.days.length === 0)};
  this.lastDayFilled = function () {
    return this.days.length
  };
  this.getLastDay = function() {
    if (this.days.length === 0) {
      return 0;
    } else {
      return this.days[this.days.length-1].day;
    }
  }
};

export function WorkYear() {
  this.year = 2018;
  this.months = [];
  this.empty = function() {return (this.months.length === 0)};
  this.lastMonthFilled = function () {
    return this.months.length
  };
  this.getLastMonth = function() {
    if (this.months.length === 0) {
      return 0;
    } else {
      return this.months[this.months.length-1].month;
    }
  }
}


export class DateHandler {
  constructor() {
    this.activeY  = new WorkYear();
    this.activeM = new WorkMonth();
    this.activeD = new WorkDay();

    const date = new Date();
    this.activeY.year = date.getFullYear();
    this.activeM.month = date.getMonth() + 1;
    this.activeM.totDays = daysInMonth(this.activeY.year, this.activeM.month);
    this.activeM.name = monthNames[date.getMonth()];

  }

  selectMonth(i) {
    if (i >= this.activeY.months.length) {
      return false;
    } else {
      this.activeM = this.activeY.months[i];
      return true;
    }
  }

  addMonth() {
    // you can only add the active month to the active year if
    // the given month if filled
    // the year doesn't have this month yet, otherwise gets overwritten
    if (this.activeM.totDays === this.activeM.days.length)
    {
      // if month number is equal to the last month
      if (this.activeM.month === this.activeY.getLastMonth())
      {
        let lastIdx = this.activeY.months.length;
        let month = this.activeM;
        this.activeY.months[lastIdx] = month;
      } else {
        this.activeY.months.push(this.activeM);
      }
      return true;
    } else {
      return false;
    }
  }

  /*
  * add a work day to the active month and reset the active day
  */
  addWorkDay(workday) {
    // cannot add a work day if the day number is not in range
    // [ 1 - (total days of the month)]
    if (workday.day <= 0 || workday.day > this.activeM.totDays)
    {
      return false;
    }
    this.activeD.start = workday.start;
    this.activeD.finish = workday.finish;
    this.activeD.breaks = workday.breaks;
    this.activeD.day = workday.day;

    let lastDay = this.activeM.getLastDay();
    if (workday.day === lastDay)
    {
      this.activeY.months[lastDay-1] = workday;
    } else {
      this.activeM.days.push(this.activeD);
    }
    // reset the active day object
    this.activeD = new WorkDay();
    // console.log("[date handler] workday: ", workday);
    return true;
  }

  lastMonthFilled() {
    return this.activeY.months.length-1;
  }

}

// export default DateHandler;

export function PrintDay(props) {
  return (
    <div>
      <h3>day values: </h3>
      <p>start: {props.workday.start}, finish: {props.workday.finish}, breaks: {props.workday.breaks}, day of month: {props.workday.day}</p>
    </div>
  );
}
