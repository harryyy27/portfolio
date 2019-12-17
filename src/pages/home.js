import React,{useState, useEffect} from 'react'
import {Wrapper, Heading, SubHeading} from '../components/styled'

const Home =()=> {
        const sizeArr = [50+Math.random()*20,30+Math.random()*20,20+Math.random()*10,30+Math.random()*10,25+Math.random()*10]

        const [position,setPosition] = useState('absolute')
        const [size,handleSize]= useState([])
        useEffect(()=>{
                // setPosition("absolute");
                return ()=>{
                        setPosition("relative")
                }
        },[])
        useEffect(()=>{
            const handleResize = ()=>{
                if(window.matchMedia("(max-width:614px)")){
                    handleSize(()=>{
                        const arr =sizeArr.map(el=>el/2)
                        return arr
                    })
                }
                else{
                    handleSize(()=>{
                        const arr =sizeArr.map(el=>el)
                        return arr
                    })
                }
            
            }
            window.addEventListener("resize",handleResize)
            return ()=>{
                window.removeEventListener("resize",handleResize)
            }
        })
        return(
            <Wrapper>
                    <Heading 
                        x={30*Math.random()} 
                        y={0} 
                        size={size[0]}
                        color={'#'+Math.floor(Math.random()*255).toString(16)+Math.floor(Math.random()*255).toString(16)+Math.floor(Math.random()*255).toString(16)}>Welcome...</Heading>
                    <SubHeading
                        position={position} 
                        x={70-30*Math.random()} 
                        y={10} 
                        size={size[1]}
                        color={'#'+Math.floor(Math.random()*255).toString(16)+Math.floor(Math.random()*255).toString(16)+Math.floor(Math.random()*255).toString(16)}>...to my portfolio...</SubHeading>
                    <SubHeading
                         position={position} 
                        x={30*Math.random()} 
                        y={30} 
                        size={size[2]}
                        color={'#'+Math.floor(Math.random()*255).toString(16)+Math.floor(Math.random()*255).toString(16)+Math.floor(Math.random()*255).toString(16)}>...as you can see...</SubHeading>
                    <SubHeading
                        position={position} 
                        x={70-30*Math.random()} 
                        y={45} 
                        size={size[3]}
                        color={'#'+Math.floor(Math.random()*255).toString(16)+Math.floor(Math.random()*255).toString(16)+Math.floor(Math.random()*255).toString(16)}
                        >...whitespace...</SubHeading>
                    <SubHeading
                        position={position}
                        x={30*Math.random()} 
                        y={55} 
                        size={size[4]}
                        color={'#'+Math.floor(Math.random()*255).toString(16)+Math.floor(Math.random()*255).toString(16)+Math.floor(Math.random()*255).toString(16)}>...is my enemy...</SubHeading>
            </Wrapper>
        )
}
export default Home;