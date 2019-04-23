import React, { Component } from "react";
import {Banner,P, CTA} from "./StyledComponents/Banner";
import { H1 } from "./StyledComponents/Headings";
import {Button} from "./StyledComponents/Button";

class Home extends Component {
    constructor(props){
        super(props)
        this.scrollTo = this.scrollTo.bind(this)
    }

    scrollTo(element){
        var element = document.querySelector("."+ element)
        element.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }

    render() {
        return(
            <Banner>
                 <H1>For The Serve</H1>
                    <P> Yousician employee ping pong score keeping app.</P>
                    <CTA>
                        <Button primary onClick={() => { this.scrollTo("AddGame") }}> Add A Game </Button>
                        <Button onClick={() => { this.scrollTo("Leaderboard") }}> View Leaderboard </Button>
                    </CTA>
            </Banner>
        )
    }
}

export default Home;