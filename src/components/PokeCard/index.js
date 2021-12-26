import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

class PokeCard extends React.Component {
  render() {
    const { item } = this.props

    return (
      <div className="poke__item-container">

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
            <Link to={`pokedetail/${item.id}`} className="text__detail">Ir a detalle</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default PokeCard;