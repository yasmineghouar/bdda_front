import React from 'react'
import Header from '../Components/header'
import Menu from '../Components/menuPrncipale'
import Menu2 from '../Components/menuPrincipale2'
import RegisterForm from '../Components/registerForm'


export default function RegisterPage() {
  return (
    <div  className='bg-my_whitee h-screen bg-opacity-5' style={{backgroundColor:'#FAF2EA', height:"40%"}}>
    <Header/> 
   <Menu/>
   <Menu2/>
   <RegisterForm/> 
   {/* <Menu2/> */}
   </div>
   
  )
}
