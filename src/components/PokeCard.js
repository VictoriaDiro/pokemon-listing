import React from 'react';

class PokeCard extends React.Component {
  render() {
    const { image, name, types, number } = this.props
    return (
      <div className="poke__item">

        <div className="poke__image-container">
          <img src={image} alt={name} className="poke__image"/>
          <p className="poke__number">{number}</p>
        </div>

        <div className="poke__info-container">
          <h2 className="poke__name">{name}</h2>
          <ul className="poke__types">
            {types.map((type, index) => (
              <li className="poketype__item" key={index}>{type.type.name}</li>
            ))}
          </ul>
        </div>
        
      </div>
    )
  }
}

export default PokeCard;