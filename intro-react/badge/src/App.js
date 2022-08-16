import React from 'react';
import Navbar from './componentes/Navbar';
import Badge from './componentes/badge';
import BadgeForm from './componentes/badgeForm';


const props = {
  firstName: 'Octavio',
  lastName: 'Lopez',
  jobTitle: 'Frontend',
  username: 'octavio123'
}

class App extends React.Component {
  state = {
    form: { 
      firstName: "",
      lastName: ""
    }
  }

  handleChange = e => {
 
    //Modificamos el estado
    this.setState({
      form: { 
        ...this.state.form,
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
      </>
    );
  }
  
}
export default App;
