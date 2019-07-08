import React, { Component } from 'react';
import CodingCards from '../CodingCards/CodingCards';
import ContactCards from '../ContactCards/ContactCards';
import HomeCards from '../HomeCards/HomeCards';

class CardContainer extends Component {
  render() {
    const { view } = this.props;
    return (
      <div className="CardContainer">
       { view === 'HOME' && <HomeCards/> }
       { view === 'CODING' && <CodingCards/> }
       { view === 'CONTACT' && <ContactCards/> }
      </div>
    );
  }
}

export default CardContainer;