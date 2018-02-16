import React, { Component } from 'react';
import {DateHandler, WorkDay, WorkMonth, WorkYear, PrintDay } from './DateHandler';


class TestApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dateH: new DateHandler(),
      index: 0,
    };
  }

  testMonth() {
    var d = new WorkDay();
    var m = new WorkMonth();
    var dateH = this.state.dateH;
    const date = new Date();

    d.breaks = "30";
    d.start = "8:00";
    d.finish = "17:00";
    for (let i = 0; i <= dateH.activeM.totDays; i++) {
      d.breaks = i.toString();
      d.day = i;
      dateH.addWorkDay(d);
    }
    console.log("[date handler] days of active month: ", dateH.activeM.days);
    let i = dateH.addMonth();
    console.log("[date handler] addMonth result: ", i);
    return (
      <PrintDay workday={d} />
    );
  }
  testDay() {
    const d = new WorkDay();
    const dateH = this.state.dateH;
    const date = new Date();

    d.breaks = "30";
    d.start = "8:00";
    d.finish = "17:00";
    d.day = date.getDate();

    dateH.addWorkDay(d);
    d.day = 15;
    d.finish = "16:30";
    dateH.addWorkDay(d);
    return (
      <PrintDay workday={d} />
    );
  }
  render() {
    return (
      <div>
        {this.testMonth() }
      </div>
    );
  }
}

export default TestApp;
