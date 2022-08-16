import React from 'react';
import CharacterItem from './componentes/CharacterItem';

class Imagenes extends React.Component {
    render() {
      // console.log(this.props)
  
      return (
        <div className="container">
          <div className="App">
            <ul className="row">
              <li className="col-6 col-md-3">
                {
                  this.state.characters.map(character => (<CharacterItem character={character} key={character.id}/>)
                    )
                }
                
              </li>
            </ul>
          </div>
        </div>
        
      )
            }
        }


export default Imagenes;