import React from 'react'
import Header from '../Components/header'
import Menu2 from '../Components/menuPrincipale2'
import Menu from '../Components/menuPrncipale'
import Welcome from '../Components/welcome'



export default function homePage() {
  return (
   <div className='bg-my_whitee h-screen bg-opacity-5' style={{backgroundColor:'#FAF2EA'}}>
   <Header/> 
   <Menu/>
   <Menu2/>
    <Welcome/>
    <Menu2/>
   </div>
   
  )
}
