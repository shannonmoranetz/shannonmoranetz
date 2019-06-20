import React, { Component } from 'react';
import HomeCards from '../HomeCards/HomeCards';

class CardContainer extends Component {
  render() {
    return (
      <div className="CardContainer">
       { this.props.view === 'HOME' && <HomeCards/> }
      </div>
    );
  }
}

export default CardContainer;