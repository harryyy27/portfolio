import React from 'react';
import {Wrapper,Heading,Paragraph,Frame,ComponentWrapper,Anchor,Figure,Caption} from '../components/styled'

const Foundersandcoders=(props)=>{
    return(
        <Wrapper open={props.burgerOpen}>
            <Heading>
                Founders & Coders
            </Heading>
            <Paragraph>
                Founders & Coders offer individuals a chance to start anew by completing a crash course that fully prepares you for the challenges you may face in the tech industry! Founders & Coders gave me the opportunity to start again in a completely new field and scrape off the rust that had accumulated over the years. After completing the course, I'd acquired a litany of immediately applicable software development skills as well as some memorable experiences to take with me and I'll be forever thankful for it. I've been using, developing & adding to these skills since!
            </Paragraph>
            <br/>
            <Paragraph>
                Below you can find some of the projects towards which I contributed:
            </Paragraph>
            <ComponentWrapper flex={'flex'}>
            <Figure>
                <Frame src="https://secret-refuge-10251.herokuapp.com/" frameBorder="0"/>

                <Caption><i>Click <Anchor href="https://secret-refuge-10251.herokuapp.com/">
                    <strong>here</strong> 
                </Anchor> to see the Brickworks Tollington project.</i></Caption>
            </Figure>
            <Figure>
                <Frame src="https://vent-bot.herokuapp.com" frameBorder="0"/>
                <Caption><i>
                    Click 
                    <Anchor href="https://vent-bot.herokuapp.com">
                        <strong> here </strong>
                    </Anchor>
                    to speak to Ventbot.
                    </i>
                </Caption>  
            </Figure>
            </ComponentWrapper>
            {/* <br/> */}
                <Paragraph style={{"text-align":"center"}}>
                    More projects can be found on my <Anchor href="https://github.com/harryyy27"><strong>Github</strong></Anchor>
                </Paragraph>
            
            
        </Wrapper>
    )
}

export default Foundersandcoders;