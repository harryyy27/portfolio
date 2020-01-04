import React, {useState, useEffect} from 'react'
import {HeaderElement, Nav,NavList,ListElement, BurgerButton, BurgerBuns} from '../components/styled'
import {NavLink} from 'react-router-dom'
const Header =(props)=>{
    
        return(
            <HeaderElement>
                <Nav open={props.burgerOpen}>
                    <NavList>
                        <ListElement>
                            <NavLink exact to='/'
                            onClick={(e)=>{
                                props.handleImport('home')
                                props.burgerHandle()
                            }}
                            activeStyle={{color:'red'}}
                            
                            style={{color: 'white', textDecoration: 'none'}}>Home</NavLink>
                        </ListElement>
                        <ListElement>
                            <NavLink onClick={(e)=>{
                                props.handleImport('me')
                                props.burgerHandle()
                            }}to='/me' activeStyle={{color:'red'}}
                            style={{color: 'white', textDecoration: 'none'}}>Me</NavLink>
                        </ListElement>
                        <ListElement>
                            <NavLink onClick={(e)=>{
                                props.handleImport('foundersandcoders')
                                props.burgerHandle()
                            }}to='/foundersandcoders' activeStyle={{color:'red'}}
                            style={{color: 'white', textDecoration: 'none'}}>Founders & Coders</NavLink>
                        </ListElement>
                        <ListElement>
                            <NavLink onClick={(e)=>{
                                props.handleImport('russellandbromley')
                                props.burgerHandle()
                            }}to='/russellandbromley' activeStyle={{color:'red'}}
                            style={{color: 'white', textDecoration: 'none'}}>Russell & Bromley</NavLink>
                        </ListElement>
                        <ListElement>
                            <NavLink onClick={(e)=>{
                                props.handleImport('deeplearning')
                                props.burgerHandle()
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
                <BurgerBuns>
                    <BurgerButton open={props.burgerOpen}onClick={props.burgerHandle}>
                            <div></div>
                            <div></div>
                            <div></div>
                    </BurgerButton>
                </BurgerBuns>
                
            </HeaderElement>
        )
    
}
export default Header