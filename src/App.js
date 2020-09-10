import React from 'react';
import './App.css';
import Title from './componenets/Title';
import Hero from './componenets/Hero';
import Types from './componenets/Types';
import Pokelist from './componenets/Pokelist';
import ModalNPM from './componenets/Modal';
import Modal from 'react-modal';
import { getType, getSprite } from './services/api-helper';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      types: "",
      pokemon: [],
      showModal: false
    }
  }

  componentDidMount = async () => {
    let pokemon = await getType(this.state.types);
    this.setState({
      types: pokemon
    })
  }

  // componentDidMount = async () => {
  //   let sprite = await getSprite(this.state.pokemon);
  //   this.setState({
  //     pokemon: sprite
  //   })
  // }

  handleChange = (event) => {
    let value = event.target.value;
    this.setState({
      types: value
    })
  }

  // modalHandleClick = () => {
  //   this.setState({
  //     showModal: true
  //   })
  //   }

  // modalHandleClickClose = () => {
  //   this.setState({
  //     showModal: false
  //   })
  // }

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
            modalHandleClick={this.modalHandleClick}
          />
          <ModalNPM>
            <Modal
            closeModal={this.modalHandleClickClose}
            />
          </ModalNPM>
        </section>

        <footer>

        </footer>

      </div>
    );
  }
}

export default App;
