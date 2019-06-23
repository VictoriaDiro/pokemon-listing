import React from 'react';

class PokeDetail extends React.Component {
  render() {
    const { item, match } = this.props

    return (
      <div className="poke__item">

        <div className="poke__image-container">
          <img src={item.sprites.front_default} alt={item.name} className="poke__image"/>
          <p className="poke__number">ID / {item.id}</p>
        </div>

        <div className="poke__info-container">
          <h2 className="poke__name">{item.name}</h2>
          <div className="poke__types-container">
            <ul className="poke__types">
              {item.types.map((type, index) => (
                <li className="poketype__item" key={index}>{type.type.name}</li> 
              ))}
            </ul>
            <h3 className="poke__height">{item.name}</h3>
            <h3 className="poke__weight">{item.name}</h3>
            <h3 className="poke__habilities">{item.name}</h3>
            <h3 className="poke__images">{item.name}</h3>
            <h3 className="poke__evolution">{item.name}</h3>
          </div>
          {this.props.match.params.id}
        </div>
        
      </div>
    )
  }
}

export default PokeDetail;