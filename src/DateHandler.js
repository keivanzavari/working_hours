var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

function daysInMonth (month, year) {
  // Use 1 for January, 2 for February, etc.
  return new Date(year, month, 0).getDate();
}
function WorkDay() {
  this.start = "00:00";
  this.finish = "00:00";
  this.breaks = "00";
  this.init = false;
};

function WorkMonth() {
  this.month = 1;
  this.name = monthNames[this.month-1];
  this.totDays = 31;
  this.days = [];
  this.empty = function() {return (this.days.length === 0)};
};

function WorkYear() {
  this.year = 2018;
  this.months = [];
  this.empty = function() {return (this.months.length === 0)};
}


class DateHandler {
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
    if (this.activeM.totDays === this.activeM.days.length-1)
    {
      this.activeY.months.push(this.activeM);
      return true;
    } else {
      return false;
    }
  }

  addWorkDay(start,finish,breaks) {
    this.activeD.start = start;
    this.activeD.finish = finish;
    this.activeD.breaks = breaks;
  }

  lastMonthFilled() {
    return this.activeY.months.length-1;
  }

  lastDayFilled () {
  }
}

export default DateHandler;