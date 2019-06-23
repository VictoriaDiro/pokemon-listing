import React from 'react';
import PokeCard from './PokeCard';

class PokeList extends React.Component {
  render() {
    const { pokeData, pokeNameFilter } = this.props
    return (
      <div className="pokelist__container">
        <ul className="pokelist__list">
          {pokeData
            .filter(item => item.name.toLowerCase().includes(pokeNameFilter.toLowerCase()),
            )
            .map((item, index) => {
              return (
                <li className="poke__item" key={index}>
              <PokeCard
                item = {item}
              />
            </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default PokeList;