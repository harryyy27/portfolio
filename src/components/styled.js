import styled from 'styled-components'

const Wrapper = styled.main`
    position: relative
    
    
    @media(max-width: 614px){
        transform: ${({ open }) => open ? 'translateY(100px)' : 'translateY(40px)'};
        width:100vw;
    }
    
    @media(min-width:615px){
        top: 20vh;
        width: 70vw;
        margin: auto;
    }

    background: ${props=>localStorage.getItem("page")==='Home'||localStorage.getItem("page")===null?'white':props.color};
    margin: auto;
`
const Anchor = styled.a`
    text-decoration: none;
    font-size: 16px;
    color: red;
    &:hover {
        font-size: 18px;
    };
    &:visted {
        color: red;
    }
`
const ComponentWrapper = styled.div`
    margin: auto;
    display: flex;
    @media(max-width:${props=>props.flex==='flex'?'875px':'614px'}){
        flex-direction:column;
        align-items: center;
    }
    justify-content: ${props=>props.space==='justify'?'space-around':'none'};
    width: 100%;
`
const Nav = styled.nav`
    position: relative;
    top:0px;
    background: black;
    height: 20vh;
    @media(max-width: 614px){
        position: fixed;
        transform: ${({ open }) => open ? 'translateY(0)' : 'translateY(-100%)'};
        height: 100px;
        position: absolute;
        width:100vw;
    }
    
`
const BurgerButton= styled.button`
  @media(min-width: 615px){
      display: none;
  }
  position: absolute;
  top: 5%;
  right: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: white;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`
const NavList = styled.ul`
    display: flex;
    justify-content: space-evenly;
    margin:0px;
    padding: 0px;
    width:100vw;
    @media(max-width: 614px){
        flex-direction: column;
    }
    @media(min-width: 878px){
        width: 70vw;
        justify:content: space-around;
    }
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
`
const ListElement = styled.li`
@media(max-width: 614px){
    width: 100vw;
    text-align: center;
}
    list-style-type: none;
    font-family: Helvetica;
    padding: 0px 12px;
    font-size: 16px;
    color: white;
`
const Canvas = styled.canvas`

`
const Heading = styled.h1`
    width:50vw;
    margin: auto;
    
  
   
    
    @media(min-width: 0px){
        color: ${props=>props.color?props.color:'black'};
        position: ${props=>localStorage.getItem("page")!=='Home'?'static':'absolute'};
        font-size: ${props=>props.size?props.size+'px':'2em'};
        top: ${props=>props.y?props.y+'vh':null};
        left: ${props=>props.x?props.x+'vw': null};
        text-align:center;
        padding:10px 0px 10px 0px
    }
    

`
const HeaderElement = styled.header`
    width: 100vw;
    @media(max-width: 614px){
        height: 2.5rem;
    }
    padding:0px;
    margin: 0px
    z-index: 100;
    position: fixed;
    top: 0px
    background: black;
`
const Paragraph = styled.p`
    font-family: Helvetica;
    font-size: ${props=>props.size!==null}
    margin: auto;
    width: 80%;
    padding: 0px 0px 10px 0px;
`

const SubHeading = styled.h2`
   
        position: ${props=>props.position};
        top: ${props=>props.y}vh;
        left: ${props=>props.x}vw;
        font-size: ${props=>props.size}px;
        color: ${props=>props.color};
    
    @media(max-width:614){
        font-size: ${props=>props.size/2}px;

    }
`
const Frame = styled.iframe`

    width: 300px;
    padding: 5%;
    height: 300px;

`
const Image = styled.img`
    height: 200px;
    margin: auto;
`
const Caption = styled.figcaption`
    text-align: center;
`
const Figure = styled.figure`
    text-align: center;


`
const Container = styled.main`
    width: 100%;
`
const Me = styled.img`
    border-radius: 50%;
    @media(max-width: 614px){
        width: ${props=>props.size};
        height: ${props=>props.size};
        
    }
     
`
export {Me,Wrapper,Heading, Nav, NavList, ListElement,HeaderElement,SubHeading,Paragraph,Canvas,Frame,ComponentWrapper,Anchor,Image,Figure,Caption,Container,BurgerButton }