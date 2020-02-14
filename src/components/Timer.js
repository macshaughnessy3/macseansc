import React from 'react';

export default class Timer extends React.Component {
  state = { date: new Date() };

  componentDidMount() {
    this.interval = setInterval(() =>
      this.setState({date: new Date()}), 1000
    );
  };

  componentWillUnmount() {
    clearInterval(this.interval);
  };

  render() {
    return(
      <div>
        <p>{this.state.date.toLocaleTimeString()}</p>
      </div>
    )
  }
}