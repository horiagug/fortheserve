import React, { Component } from "react";

class PlayerSelector extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selected : null,
            name : this.props.name ? this.props.name : "Select Player"
        };

        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
        this.handleSelect = this.handleSelect.bind(this)    
    }

    showMenu(event) {
        event.preventDefault();

        this.setState({
            showMenu: true
        }, () => {
            document.addEventListener('click', this.closeMenu);
        })
    }

    closeMenu(event) {

        if (!this.dropdownWinner.contains(event.target)){

        this.setState({
             showMenu: false,
        }, () => {
            document.removeEventListener('click', this.closeMenu);
        })
        }
    }

    handleSelect(player_id, player_name){
        this.setState({
            selected : player_id,
            name : player_name,
            showMenu : false,
        } , () => {
            document.removeEventListener('click', this.closeMenu);
        })
    }
    
    render() {
        return(
            <div>
                <button onClick={this.showMenu}> {this.state.name} </button>    
                {
                    this.state.showMenu ? (
                        <div className = "menu" ref={(element) => { this.dropdownWinner = element;}} >
                            {this.props.players.map((player) => 
                                <button key={player.id} onClick={this.handleSelect.bind(this, player.id, player.name)} > {player.name} </button>
                            )}
                        </div>
                    ) : ( null )
                }
            </div>
        )
    }
}

export default PlayerSelector