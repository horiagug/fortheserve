import React, { Component } from "react";
import api from "../../api";
import {H2} from "../styledcomponents/Headings"
import {Button} from "../styledcomponents/Button"
import {Form, Input} from "../styledcomponents/Form"

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
                <H2> Add Player </H2>
                <Form onSubmit = {this.onSubmit}>
                    <Input 
                    placeholder="Player name"
                    type="text"
                    value={this.state.playerName}
                    onChange={this.handleNameChange}>
                    </Input>
                    <Button primary disabled={!isEnabled} type="submit"> Submit </Button>
                </Form>
            </div>
        )
    }
}

export default Playermanagement;