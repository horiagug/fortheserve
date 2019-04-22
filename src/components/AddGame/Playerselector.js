import React, { Component } from "react";

class PlayerSelector extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name : this.props.name ? this.props.name : "Select Player",
            player: null,
        };

        this.handleSelect = this.handleSelect.bind(this)    
    }

    handleSelect(event){
        this.setState({player: event.target.value});
        this.props.onPlayerSelected(event.target.value)
    }
    
    render() {
        return(
            <div>
                <label>{this.state.name}: </label>
                <select  name={this.state.name} onChange = {this.handleSelect} value= {this.state.player}>
                {
                this.props.players.map((player) => 
                    <option 
                        key={player.id} 
                        value={player.id} > {player.name} </option>
                )
                }
                 </select>
                 </div>    
            //     {
            //         this.state.showMenu ? (
            //             <div className = "menu" ref={(element) => { this.dropdownWinner = element;}} >
            //                 {this.props.players.map((player) => 
            //                     <button key={player.id} onClick={this.handleSelect.bind(this, player.id, player.name)} > {player.name} </button>
            //                 )}
            //             </div>
            //         ) : ( null )
            //     }
            // </div>
        )
    }
}

export default PlayerSelector