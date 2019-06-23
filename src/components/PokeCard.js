import React from 'react';

class PokeCard extends React.Component {
  render() {
    const { item } = this.props

    console.log(this.props
      )
    return (
      <div className="poke__item">

        <div className="poke__image-container">
          <img src={item.sprites.front_default} alt={item.name} className="poke__image"/>
          <p className="poke__number">{item.number}</p>
        </div>

        <div className="poke__info-container">
          <h2 className="poke__name">{item.name}</h2>
          <ul className="poke__types">
            {item.types.map((type, index) => (
              <li className="poketype__item" key={index}>{type.type.name}</li> 
            ))}
          </ul>
        </div>
        
      </div>
    )
  }
}

export default PokeCard;