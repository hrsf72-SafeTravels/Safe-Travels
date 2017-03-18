import React from 'react';
import { SingleDatePicker } from 'react-dates';

class AirbnbCalendarWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: true,
      date: null,
    };

    this.onDateChange = this.onDateChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
  }

  onDateChange(date) {
    console.log('date selected is ', date);
    this.props.setSelectedDate(date);
    this.setState({ date });
  }

  onFocusChange({ focused }) {
    this.setState({ focused });
  }

  render() {
    const { focused, date } = this.state;

    return (
      <SingleDatePicker
        id="date_input"
        date={date}
        focused={focused}
        onDateChange={this.onDateChange}
        onFocusChange={this.onFocusChange}
      />
    );
  }
}

export default AirbnbCalendarWrapper;
