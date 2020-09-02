import React from 'react';
import './App.css';
import Title from './componenets/Title';
import Hero from './componenets/Hero';
import Types from './componenets/Types';
import Pokelist from './componenets/Pokelist';
import { getType } from './services/api-helper';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      types: "",
      pokemon: []
    }
  }

  componentDidMount = async () => {
    let pokemon = await getType(this.state.types);
    this.setState({
      types: pokemon
    })
  }

  handleChange = (event) => {
    let value = event.target.value;
    this.setState({
      types: value
    })
  }

  // handleClick = async (event) => {
  //   let pokeTypes = event.target.value;
  //   this.setState({
  //     
  //   })
  //   }

  handleSubmit = async (event) => {
    event.preventDefault();
    const pokemon = await getType(this.state.types);
    this.setState({
       pokemon: pokemon
    })
  }

  

  render() {
    return (
      <div className="App">
        <header>  
          <Title />

          <Hero />
        </header>

        <nav>
          <Types
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </nav>

        <section>
          
          <Pokelist
            pokemon={this.state.pokemon}
          />
        </section>

        <footer>

        </footer>

      </div>
    );
  }
}

export default App;
