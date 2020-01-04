import React,{useState, useEffect} from 'react'
import {Wrapper, Heading, SubHeading,Title,SubTitle} from '../components/styled'

const Home =(props)=> {
        const sizeArr = [Math.ceil(50+Math.random()*20),Math.ceil(30+Math.random()*20),Math.ceil(20+Math.random()*10),Math.ceil(30+Math.random()*10),Math.ceil(25+Math.random()*10)]
        
        const [position,setPosition] = useState('absolute')
        const [size,handleSize]= useState(window.innerWidth<700?sizeArr.map(el=>el/2):sizeArr)
       
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
            <Wrapper blackwrap={true} open={props.burgerOpen}>
                <Title>HELLO</Title>
                <Title>I</Title>
                <Title>AM </Title>
                <Title>HARRY</Title>
            </Wrapper>
        )
}
export default Home;