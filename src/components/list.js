import React, {Component} from 'react';
import './JobListElement.css';
import PropTypes from 'prop-types'

export default class List extends Component {
	render() {
		const { items, itemElement: Item } = this.props;

    return (
      <div className='job-list'>
        {items.map(item =>
          <Item 
            {...item}
            key={item.id}
          />
        )}
      </div>
    );
  }
}
List.propTypers = {
  items: PropTypes.array.isRequired,
  itemElement: PropTypes.func.isRequired,
};