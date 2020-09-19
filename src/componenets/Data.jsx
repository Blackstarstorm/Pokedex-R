import React from 'react';

export default class Data extends React.Component {
  render() {
    return (
    <div id="data">
      <div className="sprite_layout">
        <h3 className="modal_titles">Normal</h3>
          {this.props.sprite ? <img src={this.props.sprite} alt="a pokémon sprite" /> : 
            <img className="no_data" src="https://res.cloudinary.com/dvysqqdqe/image/upload/v1600399811/220_iad9fa.png" alt="No data avalible"
            />
          }
    
        <h3 className="modal_titles">Shiny</h3>
          {this.props.shinySprite ? <img src={this.props.shinySprite} alt="a shiny pokémon sprite" /> :
        <img className="no_data" src="https://res.cloudinary.com/dvysqqdqe/image/upload/v1600399811/220_iad9fa.png" alt="No data avalible"
        />}
      </div>
        
        <h4 className="modal_titles">Abilities:</h4>
          
        {
          
          this.props.ability.map(ab => (
            <div
            key={ab.id}
              className="ability">
                <ul>{ab.ability.name}</ul>
                
              </div>
            ))
          }
          
      <h4 className="modal_titles">Stats:</h4>
        {
          this.props.stats.map(num => (
            <div className="status">
              <div className="stat_name">{num.stat.name}:
            <h5 className="base_stat">{num.base_stat}</h5>
              </div>
            </div>
        ))
      }
            </div>
          
          )
    }
  }