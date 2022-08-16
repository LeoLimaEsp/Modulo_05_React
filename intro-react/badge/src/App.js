import React from 'react';
import Navbar from './componentes/Navbar';
import Badge from './componentes/badge';
import BadgeForm from './componentes/badgeForm';
import CharacterItem from './componentes/CharacterItem';
import axios from 'axios'
import "../src/styles/CharacterItem.css";

const props = {
  firstName: 'Octavio',
  lastName: 'Lopez',
  jobTitle: 'Frontend',
  username: 'octavio123'
}

class App extends React.Component {
  state = {
    characters: [],
    form: { 
      firstName: "",
      lastName: ""
    }
  }
  componentDidMount() {
    console.log("componentDidMount")
    this.fetchApi()
  }

  componentDidUpdate() {
    console.log("componentDidUpdate")
  }
  componentWillUnmount() {
    console.log("componentWillUnmount")
  }

  fetchApi = () => {
    axios.get("https://swapi.dev/api/people").then(res => {
      const characters = res.data.results;

      console.log(res);

      this.setState({
        ...this.state,
        characters
      })

    })
  }
  handleChange = e => {
 
    //Modificamos el estado
    this.setState({
      form: { 
        ...this.state,
        [e.target.name]: e.target.value
      }
    })
  }
  
  render(){
    console.log(this.state)
    return (
      <>
        <Navbar/>
        <Badge data={props} state={this.state}/>
        <BadgeForm handleChange={this.handleChange}/>
        <div className="container">
          {
          this.state.characters.map(character => (<CharacterItem character={character} key={character.id}/>))
          }
        </div>
      </>
    );
  }
}

export default App;