import React, {Component, useState, useEffect}from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './components/header'
import Home from './pages/home'
import { createBrowserHistory as createHistory } from 'history'
const history: History = createHistory()


export default function App() {
  function useLocalState() {
    let local = localStorage.getItem('page')
   console.log(local)
    const [loc,setState]=useState(local)
  function setLoc(newItem,comp){

    console.log(comp, newItem)
    localStorage.setItem('page', comp);
    if(comp!=='Home'){
      setState(newItem)
    }
  }
    return [loc,setLoc]
  }
  const [page, handleComponent]=useLocalState()
  const [burgerOpen, burgerChange] = useState(false)
  const burgerHandle=()=>{
      burgerChange(!burgerOpen)
  }
  useEffect(()=>{
    window.addEventListener("load",()=>{
      let page = localStorage.getItem('page')
      if(page!==null&&page!=='Home'){
        const split = page.split('')
        split[0]=split[0].toLowerCase()
        handleImport(split.join(''))
      }  
    })
    return window.removeEventListener("load",()=>{
      let page = localStorage.getItem('page')
      if(page!==null){
        const split = page.split('')
        split[0]=split[0].toLowerCase()
        handleImport(split.join(''))
      }
    })
  },[])
  
  async function handleImport (component){
    
    const arr = component.split('')
    arr[0]=arr[0].toUpperCase()
    const compStr = arr.join('')
    if(component==='home'){
      handleComponent(null,compStr)
    }
    else{
      const Import = await import(`./pages/${component}`)
      
      console.log('page',page)
      
      const obj= {...page};
        console.log('PAGE', obj)
      obj[compStr]=Import.default
      handleComponent(obj,compStr)
    }
      
  
  }
    if(page!==undefined&&page!==null){
      var {Deeplearning,Russellandbromley,Foundersandcoders,Canvas,Me,Contact} = page;
    }
    return (
        <Router history={history}>
          <Header handleImport={handleImport}page={page} burgerOpen={burgerOpen} burgerHandle={burgerHandle}/>
          <Route path='/' exact strict render={()=><Home burgerOpen={burgerOpen}/>}/>

          <Route path='/me' exact strict render={()=>
            Me !==undefined&&Me !== null?
            <Me burgerOpen={burgerOpen}/>: null}/>
            
          <Route path='/foundersandcoders' exact strict render={()=>
            Foundersandcoders !==undefined&&Foundersandcoders!==null?
            <Foundersandcoders burgerOpen={burgerOpen}/>:null}/>

          <Route path='/russellandbromley' exact strict render={()=>
            Russellandbromley !==undefined&& Russellandbromley !==null?
            <Russellandbromley burgerOpen={burgerOpen}/>:null}/>

          <Route path='/deeplearning' exact strict render={()=>
            Deeplearning !==undefined&&Deeplearning !== null?
            <Deeplearning burgerOpen={burgerOpen}/>: null}/>

          {/* <Route path='/canvas' exact strict render={()=>
            Canvas !== undefined && Canvas!==null?
            <Canvas />:null}/>

          <Route path='/contact' exact strict render={()=>
            Contact !== undefined && Contact!==null?
            <Contact />:null}/> */}

        </Router>
    );
  
  
}
