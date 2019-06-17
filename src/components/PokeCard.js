import React from 'react';

class PokeCard extends React.Component {
  render() {
    const { id, name, sprites, types } = this.props
    return (
      <div className="pokeitem">
        <img src={sprites} alt={name} className="pokeimage"/>
        <h2 className="pokename">{name}</h2>
        <ul className="poketypes">
          {/* {types.map((pokeType, index) => (
            <li className="poketype__item" key={index}>{pokeType.type.name}</li>
          ))} */}
        </ul>
      </div>
    )
  }
}

export default PokeCard;