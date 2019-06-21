import React from 'react';
import PokeCard from './PokeCard';

class PokeList extends React.Component {
  render() {
    const { pokeList, pokeNameFilter } = this.props

    return (
      <div className="pokelist__container">
        <ul className="pokelist__list">
          {pokeList
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