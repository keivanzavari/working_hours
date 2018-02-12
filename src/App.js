import React, { Component } from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import logo from './logo.svg';
import './App.css';
import MemberHandler from './MemberHandler.js';



function Button(props) {
    // receive onClick and value from props
    // onClick use the function and in button square place the value
    return (
      <div>
        <h3>Please enter your 4 digit ID number</h3>
        <input type="text" name="lastname" value={props.value}/>
        <br /><br />
        <button className="button" onClick={props.onClick}>
          Enter
        </button>
        <br /><br />
      </div>
      // alert('you clicked on '+ this.props.value.toString())
      //
    );
  // }
}
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      memberName : '',
      index: 0,
      pageId: true,
    };
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
  }

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

  handleClick() {
    this.setState({
      index: 0,
      pageId: !this.state.pageId,
    });
  }
  whatToRender() {
    if (this.state.pageId) {
      return (
        <div>
          <Button value={this.state.memberName} onClick={() => this.handleClick()}/>
        </div>
      );
    }
    return (
      <div>
      {this.selectDate()}
      </div>
    );
  }
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
