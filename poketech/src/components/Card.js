import React from 'react';
import "./styles/Card.css";

class Card extends React.Component{
    state ={viewAbilities: false}
    render(){
        return(
            <div className="container-card">

                <div className="container-img-name">
                    <div className="img-card">
                        <img className="img-poke" src={this.props.pokemon.url} alt="Bul" />
                    </div>
                    <div className="container-align">
                        <div className="name-card">
                            <p>{this.props.pokemon.nombre}</p>
                        </div>
                    </div>
                    
                </div>

                <div className="description-card">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque excepturi cum repudiandae dolorum vel,qui quaerat nemo totam voluptatibus neque.</p>
                </div>

                <div className="container-button">
                    <a className="habilities" onClick={e => {this.setState({viewAbilities: !this.state.viewAbilities})}}> {this.state.viewAbilities ? "Ocultar habilidades":"Ver habilidades"} </a>
                </div>

                <div className="container-abilities">
                    { this.state.viewAbilities &&
                    <ul> 
                        {this.props.pokemon.habilidades.map(ability => <li>{ability.ability.name}</li>)}
                    </ul>
                    }
                </div>
            </div>
        )
    }
}
export default Card;