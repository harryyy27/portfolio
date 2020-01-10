import React,{useState,useEffect} from 'react'
import {Wrapper, Paragraph,Heading} from '../components/styled'
const Me=(props)=>{
    // const [size,setSize]=useState('16')
    // useEffect(()=>{
    //     return ()=>{
    //         setSize('12')
    //     }
    // },[])
    return(
        <Wrapper open={props.burgerOpen}>
            <Heading>Me</Heading>
            <Paragraph >
                Hi, my name's Harry. I'm currently a full stack developer working at Russell and Bromley and have recently developed a hobby in machine learning. 
            </Paragraph>
            <br/>
            <Paragraph >
                When I'm not pushing keys, I can often be found somewhere within a 5 mile radius of my house indulging in one of the many hobbies I've accumulated over the years including but not limited to, nomadic reading, Krav Maga & chess.
            </Paragraph>
            <br/>
        </Wrapper>
    )
}

export default Me;