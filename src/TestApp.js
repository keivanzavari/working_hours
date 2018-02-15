import React, { Component } from 'react';
import {DateHandler, WorkDay, WorkMonth, WorkYear} from './DateHandler';

class TestApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dateObj: new DateHandler(),
      index: 0,
    };
  }

  testDay() {
    const d = new WorkDay();
    const date = this.state.dateObj;
    d.start = "8:00";
    d.finish = "17:00";
    return (
      <div>
        <h3>day values: </h3> <br />
        <p>start: {d.start}, finish: {d.finish}, breaks: {d.breaks}</p>
      </div>
    );
  }
  render() {
    return (
      <div>
        {this.testDay()}
      </div>
    );
  }
}

export default TestApp;
