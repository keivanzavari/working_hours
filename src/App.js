import React, { Component } from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import logo from './logo.svg';
import './App.css';
import MemberHandler from './MemberHandler.js';
// import DateHandler from './DateHandler.js';

var InteractEnum = {"ID":1, "CALENDAR":2, "WORKHOUR":3};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      memberId : '',
      memberName : undefined,
      index: 0,
      pageId: InteractEnum.ID,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.handleTime = this.handleTime.bind(this);

  }
  handleDayClick(day) {
    this.setState({ date: day });

    day.getFullYear();
    day.getMonth();
    day.getDate();
    console.log("you entered: ", day.toLocaleString());

    this.setState({ pageId: InteractEnum.WORKHOUR });
  }
  selectDate() {
   return (
     <DayPicker
       showOutsideDays
       modifiers={{
         foo: new Date(),
       }}
       todayButton="Go to Today"
       onDayClick={this.handleDayClick}
     />
   );

  } // selectDate

  selectTime() {
    if (this.state.pageId === InteractEnum.WORKHOUR) {
      return (
        <div class="parent">
            <div class="row">
              <div class="col1">
                Date
              </div>
              <div class="col2">
                Start:
              </div>
              <div class="col3">
                <input className="input-bar" type="time" id="timeStart" defaultValue="09:00" onChange={this.handleTime}/>
              </div>
              <div class="col4">
              </div>
              <div class="col5">
                <button className="button" type="submit" name="save_work_hour">Save</button>
              </div>
            </div>

            <div class="row">
              <div class="col1">
                <button className="button-purple" type="button" name="member_absent">Absent</button>
              </div>
              <div class="col2">
                Break
              </div>
              <div class="col3">
                <input className="input-bar" type="text" id="timeBreak" defaultValue="30" onChange={this.handleTime}/>
              </div>
              <div class="col4">
                minutes
              </div>
              <div class="col5">
              </div>
          </div>

          <div class="row">
            <div class="col1">
            </div>
            <div class="col2">
              Finish
            </div>
            <div class="col3">
              <input className="input-bar" type="time" id="timeFinish" defaultValue="17:00" onChange={this.handleTime}/>
            </div>
            <div class="col4">
            </div>
            <div class="col5">
            </div>
          </div>

        </div>
      );
    }
  }


  handleChange(event) {
    this.setState({
      memberId: event.target.value,
    });
    // console.log("name: ", event.target.name);
    // console.log("value: ", this.tate.memberId);
  }
  handleSubmit(event) {
    console.log("received id: ", this.state.memberId);
    // event.preventDefault();

    let member = new MemberHandler();
    if (member.isMember(this.state.memberId)) {
      this.setState({
        memberName: member.Name,
      });
      console.log("found member: ", this.state.memberName);

      this.setState({
        pageId: InteractEnum.CALENDAR,
      });
    } else {
      alert('Submitted ID '+this.state.memberId+' does not match our database.');
    }

  }

  handleTime(event) {
    this.setState({
      pageId: InteractEnum.WORKHOUR,
    });
    console.log("name: ", event.target.name);
    console.log("value: ", event.target.value);
  }
  whatToRender() {
    if (this.state.pageId === InteractEnum.ID) {
      return (
        <div>
          <h3>Please enter your 4 digit ID number</h3>
          <form onSubmit={this.handleSubmit}>
            <label>
              <b>ID: </b>
              <input type="text" className="input-bar" value={this.state.memberId} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Enter" className="button" />
          </form>
        </div>
      );
    } else {
    //if (this.state.pageId === InteractEnum.CALENDAR) {
      /*inside if : <Button value={this.state.value} onChange={this.handleChange} onSubmit={this.handleSubmit} /> */

      return (
        <div>
          <h3>Hello {this.state.memberName}</h3>
          <div className="float-left">
            {this.selectDate()}
          </div>
          <div className="float-right">
            {this.selectTime()}
          </div>
        </div>
      );

    }

  } // whatToRender

  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        {/*
          <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
          </header>
          */}
          {/*<code>src/App.js</code>*/}
          {/*this.renderMembers()*/}
          {this.whatToRender()}
      </div>
    );
  }
}

export default App;

//
