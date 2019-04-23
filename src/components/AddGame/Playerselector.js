import React, { Component } from "react";

class PlayerSelector extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name : this.props.name ? this.props.name : "Select Player",
            player: "empty",
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
                <option 
                        key="empty"
                        value="empty" > "---|---" </option>
                {
                this.props.players.map((player) => 
                    <option 
                        key={player.id} 
                        value={player.id} > {player.name} </option>
                )}
                 </select>
                 </div>    
        )
    }
}

export default PlayerSelector