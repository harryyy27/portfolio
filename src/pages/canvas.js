import React from 'react'
import Animate from '../components/animate.js'
import {Wrapper,Heading} from '../components/styled'
const Canvas=(props)=>{
        return(
            <Wrapper open={props.burgerOpen}>
                <Heading>I also like to play with Canvas...</Heading>
                <Animate />
            </Wrapper>
        )
    
}

export default Canvas;