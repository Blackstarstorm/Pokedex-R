import React from 'react';
import './App.css';
import Title from './componenets/Title';
import Hero from './componenets/Hero';
import Types from './componenets/Types';
import Pokelist from './componenets/Pokelist';
import ModalNPM from "react-modal";
import { getType, getSprite } from './services/api-helper';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      types: "",
      pokemon: [],
      sprite:"",
      showModal: false
    };

    this.modalHandleClick = this.modalHandleClick.bind(this);
    
    this.modalHandleClickClose = this.modalHandleClickClose.bind(this);
  }
  
//pokemon list by type rendering
  componentDidMount = async () => {
    let pokemon = await getType(this.state.types);
    this.setState({
      types: pokemon
    })
  }

  // componentDidMount = async (event) => {
  //   let name = event.target.id;
  //   let sprite = await getSprite(name);
  //   this.setState({
  //     data: sprite
  //   })
  // }
/// Pokemon types
  handleChange = (event) => {
    let value = event.target.value;
    this.setState({
      types: value
    })
  }

//Open modal, showing sprites
  modalHandleClick = async (event) => {
    let name = event.target.id;
    let sprite = await getSprite(name);
    this.setState({
      sprite,
      showModal: true
    });
  }

  //Close modal
  modalHandleClickClose = () => {
    this.setState({
      showModal: false
    });
  }

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
            openModal={this.modalHandleClick}
            
          />

          <ModalNPM
            isOpen={this.state.showModal}
            contentLabel= "onRequestClose"
            className="Modal"
            
          >
            
            <button onClick={this.modalHandleClickClose}>Close</button>

          </ModalNPM>
        </section>

        <footer>

        </footer>

      </div>
    );
  }
}

export default App;
