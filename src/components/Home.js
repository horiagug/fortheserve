import React, { Component } from "react";
import {Banner,P, CTA} from "./StyledComponents/Banner";
import { H1 } from "./StyledComponents/Headings";
import {Button} from "./StyledComponents/Button";

class Home extends Component {
    render() {
        return(
            <Banner>
                 <H1>For The Serve</H1>
                    <P> Yousician employee ping pong score keeping app.</P>
                    <CTA>
                        <Button primary href="/addgame"> Add A Game </Button>
                        <Button > View Leaderboard </Button>
                    </CTA>
            </Banner>
        )
    }
}

export default Home;