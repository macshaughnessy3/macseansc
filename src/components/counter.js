import React from 'react';
import './counter.css'
import Button from 'react-bootstrap/Button';

export default class Counter extends React.Component {
	state = {
		counter: 0,
	};

	increment = () => {
		this.setState({
			counter: this.state.counter + 1,
		});
	};

	decrement = () => {
		this.setState({
			counter: this.state.counter - 1,
		});
	};

	render() {
		const { counter } = this.state;
		const { name } = this.props;
		
		return(
      <div className='counter-box'>
				<Button
					onClick={this.decrement}
				>
					-1
				</Button>
				<span className={counter<0 ? 'counter-box--danger' : ''}>
        	{name} {counter}
				</span>
				<Button
					onClick={this.increment}
				>
					+1
				</Button>
      </div>
      )
  }
}