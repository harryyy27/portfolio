import React,{useState, useEffect} from 'react'
import {Wrapper, Heading, SubHeading} from '../components/styled'

const Home =()=> {
        const sizeArr = [Math.ceil(50+Math.random()*20),Math.ceil(30+Math.random()*20),Math.ceil(20+Math.random()*10),Math.ceil(30+Math.random()*10),Math.ceil(25+Math.random()*10)]
        
        const [position,setPosition] = useState('absolute')
        if(window.innerWidth<700){
            var [size,handleSize]= useState(sizeArr.map(el=>el/2))
        }
        else {
            var [size,handleSize]=useState(sizeArr)
        }
        useEffect(()=>{
                // setPosition("absolute");
                return ()=>{
                        setPosition("relative")
                }
        },[])
        useEffect(()=>{
            const handleResize = ()=>{
                if(window.innerWidth<700){
                    handleSize(()=>{
                        const arr =sizeArr.map(el=>el/2)
                        console.log('1',arr)
                        return arr
                    })
                }
                else{
                    handleSize(()=>{
                        const arr =sizeArr.map(el=>el)
                        console.log('2',arr)
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
                        size={size[0].toString()}
                        color={'#'+Math.floor(Math.random()*255).toString(16)+Math.floor(Math.random()*255).toString(16)+Math.floor(Math.random()*255).toString(16)}>Welcome...</Heading>
                    <SubHeading
                        position={position} 
                        x={70-30*Math.random()} 
                        y={10} 
                        size={size[1].toString()}
                        color={'#'+Math.floor(Math.random()*255).toString(16)+Math.floor(Math.random()*255).toString(16)+Math.floor(Math.random()*255).toString(16)}>...to my portfolio...</SubHeading>
                    <SubHeading
                         position={position} 
                        x={30*Math.random()} 
                        y={30} 
                        size={size[2].toString()}
                        color={'#'+Math.floor(Math.random()*255).toString(16)+Math.floor(Math.random()*255).toString(16)+Math.floor(Math.random()*255).toString(16)}>...as you can see...</SubHeading>
                    <SubHeading
                        position={position} 
                        x={70-30*Math.random()} 
                        y={45} 
                        size={size[3].toString()}
                        color={'#'+Math.floor(Math.random()*255).toString(16)+Math.floor(Math.random()*255).toString(16)+Math.floor(Math.random()*255).toString(16)}
                        >...whitespace...</SubHeading>
                    <SubHeading
                        position={position}
                        x={30*Math.random()} 
                        y={55} 
                        size={size[4].toString()}
                        color={'#'+Math.floor(Math.random()*255).toString(16)+Math.floor(Math.random()*255).toString(16)+Math.floor(Math.random()*255).toString(16)}>...is my enemy...</SubHeading>
            </Wrapper>
        )
}
export default Home;