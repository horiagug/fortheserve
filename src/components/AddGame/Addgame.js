import React, { Component } from "react";

class Addgame extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showPlayer1: false,
        };

        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
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

        if (!this.dropdownMenu.contains(event.target)){

        this.setState({
             showMenu: false 
        }, () => {
            document.removeEventListener('click', this.closeMenu);
        });
    }}

    render() {
        return(
            <div>
                <h2> Add Game </h2>
                <button onClick={this.showMenu}> Winner </button>
                
                {
                    this.state.showMenu ? (
                        <div ClassName = "menu" ref={(element) => { this.dropdownMenu = element;}} >
                            <button> Menu item 1 </button>
                            <button> Menu item 2 </button>
                            <button> Menu item 3 </button>  
                        </div>
                    ) : ( null )
                }
            </div>
        )
    }
}

export default Addgame;