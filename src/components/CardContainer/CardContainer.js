import React, { Component } from 'react';

import HomeCards from '../HomeCards/HomeCards';

class CardContainer extends Component {
  constructor() {
    super();
    this.state = {
      me: 'hi'
    }
  }

  render() {
    return (
      <div className="CardContainer">
        <HomeCards/>
      </div>
    );
  }
}

export default CardContainer;