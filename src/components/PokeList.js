import React from 'react';
import PokeCard from './PokeCard';

class PokeList extends React.Component {
  render() {
    const { pokeData, value } = this.props
    return (
      <div className="pokelist__container">
        <ul className="pokelist__list">
          {pokeData
            .filter(item => item.pokemon.name.includes(value))
            .map((item, index) =>
            <li className="poke__item" key={index}>
              <PokeCard
                item = {item}
              />
            </li>)
          }
        </ul>
      </div>
    )
  }
}

export default PokeList;