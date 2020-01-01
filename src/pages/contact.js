import React,{useState,useEffect} from 'react';
import {SubHeading, Heading,Wrapper,Anchor} from '../components/styled'

const Contact = (props) =>{
    const [position,setPosition] = useState('absolute')
        useEffect(()=>{
                // setPosition("absolute");
                return ()=>{
                        setPosition("relative")
                }
        },[])
    return (
        <Wrapper open={props.burgerOpen}>
            <Heading></Heading>
            <SubHeading
                        position={position} 
                        x={window.innerWidth>614 ?70-70*Math.random():null} 
                        y={10} 
                        size={30+Math.random()*20}
                        color={'#'+Math.floor(Math.random()*255).toString(16)+Math.floor(Math.random()*255).toString(16)+Math.floor(Math.random()*255).toString(16)}><Anchor href="https://www.kaggle.com/harryyy27">Kaggle</Anchor></SubHeading>
                    <SubHeading
                         position={position} 
                        x={window.innerWidth>614 ? 70*Math.random()-17:null} 
                        y={30} 
                        size={20+Math.random()*10}
                        color={'#'+Math.floor(Math.random()*255).toString(16)+Math.floor(Math.random()*255).toString(16)+Math.floor(Math.random()*255).toString(16)}><Anchor href="https://github.com/harryyy27">Github</Anchor></SubHeading>
                    <SubHeading
                        position={position} 
                        x={window.innerWidth>614 ?70-70*Math.random():null} 
                        y={45} 
                        size={30+Math.random()*10}
                        color={'#'+Math.floor(Math.random()*255).toString(16)+Math.floor(Math.random()*255).toString(16)+Math.floor(Math.random()*255).toString(16)}
                        >Curriculum Vitae</SubHeading>
                    <SubHeading
                        position={position}
                        x={window.innerWidth>614 ? 70*Math.random()-17:null} 
                        y={55} 
                        size={25+Math.random()*10}
                        color={'#'+Math.floor(Math.random()*255).toString(16)+Math.floor(Math.random()*255).toString(16)+Math.floor(Math.random()*255).toString(16)}><Anchor href="/">My amazing new webpage</Anchor></SubHeading>
        </Wrapper>
    )
}