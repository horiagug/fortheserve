import React, { Component } from "react";
import {Banner,P, CTA} from "./styledcomponents/Banner";
import { H1 } from "./styledcomponents/Headings";
import {Button} from "./styledcomponents/Button";

class Home extends Component {
    render() { 
        return(
            <Banner>
                 <H1>For The Serve</H1>
                    <P> Ping pong game score keeping app.</P>
                    <CTA>
                        <Button primary onClick={this.props.openModal}> Add A Game </Button>
                    </CTA>
            </Banner>
            
        )
    }
}

export default Home;