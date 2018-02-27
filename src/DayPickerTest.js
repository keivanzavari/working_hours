import React from 'react';
import DayPicker from 'react-day-picker';

import 'react-day-picker/lib/style.css';

const customStyle = `.DayPicker-Day--highlighted {
  background-color: orange;
  color: white;
}
.DayPicker-Day--exact {
  background-color: orange;
  color: white;
}`;


// highlighted:
// from: new Date(2018, 1, 1),
// to: new Date(2018, 1, 12),
const highlighted = {
  highlighted: {
    from: new Date(2018, 1, 15),
    to: new Date(2018, 1, 19),
  },
  exact: [new Date(2018, 1, 1), new Date(2018, 1, 2)],
};

export default class DayPickerTest extends React.Component {
  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.state = {
      selectedDay: undefined,
    };
  }
  handleDayClick(day) {
    this.setState({ selectedDay: day });
  }
  render() {

    return (
      <div>
        <style>{customStyle}</style>
        <DayPicker
          modifiers={ highlighted }
          onDayClick={this.handleDayClick}
          selectedDays={this.state.selectedDay}
        />
        {this.state.selectedDay ? (
          <p>You clicked {this.state.selectedDay.toLocaleDateString()}</p>
        ) : (
          <p>Please select a day.</p>
        )}
      </div>
    );
  }
}
