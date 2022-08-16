import React from 'react';
import "../styles/CharacterItem.css";

class CharacterItem extends React.Component {
  render () {
    return (
      
      <div className="CharacterCard"  style={{
        // backgroundImage: `url(${this.props.character.image})`
      }} 
      >
        <div className="CharacterCard__name-container">
        <img src="https://www.gravatar.com/avatar?d=identicon" className="Badge__avatar" alt="Avatar" />
          <h2> Name: {this.props.character.name}</h2>
        </div>
      </div>
    )
  }
}

export default CharacterItem;