import React from 'react';

export default class ResizeWindow extends React.Component {
  state = { windowWidth: window.innerWidth };

  handleResize = () => {
    this.setState({ window: window.innerWidth });
  };

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  };

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  };

  render() {
    return(
      <div>
        <p>{this.state.windowWidth}</p>
      </div>
    )
  }
}
