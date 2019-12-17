import React from 'react'
import {HeaderElement, Nav,NavList,ListElement} from '../components/styled'
import {NavLink} from 'react-router-dom'
const Header =(props)=>{
        return(
            <HeaderElement>
                <Nav>
                    <NavList>
                        <ListElement>
                            <NavLink exact to='/'
                            onClick={(e)=>{
                                props.handleImport('home')
                            }}
                            activeStyle={{color:'red'}}
                            
                            style={{color: 'white', textDecoration: 'none'}}>Home</NavLink>
                        </ListElement>
                        <ListElement>
                            <NavLink onClick={(e)=>{
                                props.handleImport('me')
                            }}to='/me' activeStyle={{color:'red'}}
                            style={{color: 'white', textDecoration: 'none'}}>Me</NavLink>
                        </ListElement>
                        <ListElement>
                            <NavLink onClick={(e)=>{
                                props.handleImport('foundersandcoders')
                            }}to='/foundersandcoders' activeStyle={{color:'red'}}
                            style={{color: 'white', textDecoration: 'none'}}>Founders & Coders</NavLink>
                        </ListElement>
                        <ListElement>
                            <NavLink onClick={(e)=>{
                                props.handleImport('russellandbromley')
                            }}to='/russellandbromley' activeStyle={{color:'red'}}
                            style={{color: 'white', textDecoration: 'none'}}>Russell & Bromley</NavLink>
                        </ListElement>
                        <ListElement>
                            <NavLink onClick={(e)=>{
                                props.handleImport('deeplearning')
                            }}to='/deeplearning' activeStyle={{color:'red'}}
                            style={{color: 'white', textDecoration: 'none'}}>Deep Learning</NavLink>
                        </ListElement>
                        {/* <ListElement>
                            <NavLink onClick={(e)=>{
                                props.handleImport('canvas')
                            }}to='/canvas' activeStyle={{color:'red'}}
                            style={{color: 'white', textDecoration: 'none'}}>Also</NavLink>
                        </ListElement> */}
                        {/* <ListElement>
                            <NavLink onClick={(e)=>{
                                props.handleImport('contact')
                            }}to='/contact' activeStyle={{color:'red'}}
                            style={{color: 'white', textDecoration: 'none'}}>Contact</NavLink>
                        </ListElement> */}
                    </NavList>
                </Nav>
            </HeaderElement>
        )
    
}
export default Header