import React from 'react';
import PokeCard from './PokeCard';

class PokeList extends React.Component {
  render() {
    return (
      <div className="pokelist__container">
        <ul className="pokelist__list">
          <PokeCard></PokeCard>
        </ul>
      </div>
    )
  }
}

export default PokeList;