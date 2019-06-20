import React, { Component } from 'react';
import HomeCards from '../HomeCards/HomeCards';

class CardContainer extends Component {
  render() {
    const { view } = this.props;
    return (
      <div className="CardContainer">
       { view === 'HOME' && <HomeCards/> }
      </div>
    );
  }
}

export default CardContainer;