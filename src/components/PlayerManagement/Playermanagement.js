import React, { Component } from "react";
import api from "../../api";

class Playermanagement extends Component {
    constructor(props){
        super(props);
        this.state={
            playerName : "",
            added : false,
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.handleNameChange = this.handleNameChange.bind(this)
    }

    onSubmit(event){
        event.preventDefault();
        api.addPlayer(this.state.playerName)
        .then ( json => {
            if (json.hasOwnProperty('_id')){
              this.setState({
                added:true,
                playerName : ""
              })
              window.location.reload()
            }
          })
    }

    handleNameChange = event => {
        this.setState({playerName: event.target.value})
    }

    canBeSubmitted() {
        return this.state.playerName.length > 0
    }

    render() {
        const isEnabled = this.canBeSubmitted()
        return(
            <div>
                <h2> Add Player </h2>
                <form onSubmit = {this.onSubmit}>
                    <input 
                    placeholder="Player name"
                    type="text"
                    value={this.state.playerName}
                    onChange={this.handleNameChange}>
                    </input>
                    <button disabled={!isEnabled} type="submit"> Submit </button>
                </form>
            </div>
        )
    }
}

export default Playermanagement;