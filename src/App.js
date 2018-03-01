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
      // memberId2 : '',
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
        <div>
          Start: <input type="time" id="myTime" defaultValue="09:00" onChange={this.handleTime}/><br/>
          Break: <input type="text" id="myTime" defaultValue="30" onChange={this.handleTime}/><br/>
          Finish: <input type="time" id="myTime" defaultValue="17:00" onChange={this.handleTime}/>
        </div>
      );
    }
  }

  renderMembers() {
    // const index = 1
    // this.setState({
    //   value: 'squares',
    //   index: index,
    // });
    // return (
    //   <MemberHandler index={this.state.index}/>
    // );
  }

  handleChange(event) {
    this.setState({
      memberId: event.target.value,
    });
    // console.log("name: ", event.target.name);
    // console.log("value: ", this.tate.memberId);
  }
  handleSubmit(event) {
    // alert('A name was submitted: ' + this.state.memberId);
    this.setState({
      pageId: InteractEnum.CALENDAR,
    });
    event.preventDefault();

    let tmp = new MemberHandler();
    if (tmp.isMember(this.state.memberId)) {
      console.log("found member: ", tmp.name);
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
              Name:
              <input type="text" value={this.state.memberId} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Enter" />
          </form>
        </div>
      );
    } else {
    //if (this.state.pageId === InteractEnum.CALENDAR) {
      /*inside if : <Button value={this.state.value} onChange={this.handleChange} onSubmit={this.handleSubmit} /> */

      return (
        <div>
          <h3>Hello {this.state.memberId}</h3>
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
