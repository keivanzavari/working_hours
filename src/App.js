import React, { Component } from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import logo from './logo.svg';
import './App.css';
import MemberHandler from './MemberHandler.js';
import DateHandler from './DateHandler.js';

var InteractEnum = {"ID":1, "CALENDAR":2, "WORKHOUR":3};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      memberId : '',
      index: 0,
      pageId: InteractEnum.ID,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  selectDate() {
   return (
     <DayPicker
       showOutsideDays
       modifiers={{
         foo: new Date(),
       }}
       todayButton="Go to Today"
       onDayClick={(day, modifiers) =>  this.setState({date: day})}
     />
   );

 } // selectDate


  renderMembers() {
    const index = 1
    // this.setState({
    //   value: 'squares',
    //   index: index,
    // });
    return (
      <MemberHandler index={this.state.index}/>
    );
  }

  handleChange(event) {
    this.setState({
      memberId: event.target.value,
    });
  }
  handleSubmit(event) {
    // alert('A name was submitted: ' + this.state.memberId);
    this.setState({
      pageId: InteractEnum.CALENDAR,
    });
    event.preventDefault();
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
    } else if (this.state.pageId === InteractEnum.CALENDAR) {
      /*inside if : <Button value={this.state.value} onChange={this.handleChange} onSubmit={this.handleSubmit} /> */

      return (
        <div>
          <a>Hello {this.state.memberId}</a>
          {this.selectDate()}
        </div>
      );
    }

  } // whatToRender

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="clearfix float-my-children">
          {/*<code>src/App.js</code>*/}
          {/*this.renderMembers()*/}
          {this.whatToRender()}
        </div>
      </div>
    );
  }
}

export default App;

//
