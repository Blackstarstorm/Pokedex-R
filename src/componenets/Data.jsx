import React from 'react';

export default class Data extends React.Component {
  render() {
    return (
    <div>
      <div className="sprite_layout">
        <h3>Normal Look</h3>
          {img ? <img src={this.props.sprite} alt="a pokémon sprite" /> : <img src=`` alt="No data avalible"}
    
        <h3>Shiny Look</h3>
        <img src={this.props.shinySprite} alt="a shiny pokémon sprite" />
      </div>
        
        <h4>Abilities:</h4>
        {
          this.props.ability.map(ab => (
            <div className="ability">
              <ul>{ab.ability.name}</ul>
            </div>
        ))
        }
      <h4>Stats:</h4>
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