import React from 'react'
import Animate from '../components/animate.js'
import {Wrapper,Heading} from '../components/styled'
class Canvas extends React.Component{
    render() {
        return(
            <Wrapper>
                <Heading>I also like to play with Canvas...</Heading>
                <Animate />
            </Wrapper>
        )
    }
}

export default Canvas;