import React,{useState, useEffect} from 'react'
import {Wrapper, Heading, SubHeading} from '../components/styled'

const Home =()=> {
        const [position,setPosition] = useState('absolute')
        useEffect(()=>{
                // setPosition("absolute");
                return ()=>{
                        setPosition("relative")
                }
        },[])
        return(
            <Wrapper>
                    <Heading 
                        x={window.innerWidth>614 ? 70*Math.random()-17:null} 
                        y={0} 
                        size={50+Math.random()*20}
                        color={'#'+Math.floor(Math.random()*255).toString(16)+Math.floor(Math.random()*255).toString(16)+Math.floor(Math.random()*255).toString(16)}>Welcome...</Heading>
                    <SubHeading
                        position={position} 
                        x={window.innerWidth>614 ?70-70*Math.random():null} 
                        y={10} 
                        size={30+Math.random()*20}
                        color={'#'+Math.floor(Math.random()*255).toString(16)+Math.floor(Math.random()*255).toString(16)+Math.floor(Math.random()*255).toString(16)}>...to my portfolio...</SubHeading>
                    <SubHeading
                         position={position} 
                        x={window.innerWidth>614 ? 70*Math.random()-17:null} 
                        y={30} 
                        size={20+Math.random()*10}
                        color={'#'+Math.floor(Math.random()*255).toString(16)+Math.floor(Math.random()*255).toString(16)+Math.floor(Math.random()*255).toString(16)}>...as you can see...</SubHeading>
                    <SubHeading
                        position={position} 
                        x={window.innerWidth>614 ?70-70*Math.random():null} 
                        y={45} 
                        size={30+Math.random()*10}
                        color={'#'+Math.floor(Math.random()*255).toString(16)+Math.floor(Math.random()*255).toString(16)+Math.floor(Math.random()*255).toString(16)}
                        >...whitespace...</SubHeading>
                    <SubHeading
                        position={position}
                        x={window.innerWidth>614 ? 70*Math.random()-17:null} 
                        y={55} 
                        size={25+Math.random()*10}
                        color={'#'+Math.floor(Math.random()*255).toString(16)+Math.floor(Math.random()*255).toString(16)+Math.floor(Math.random()*255).toString(16)}>...is my enemy...</SubHeading>
            </Wrapper>
        )
}
export default Home;