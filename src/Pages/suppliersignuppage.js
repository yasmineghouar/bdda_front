import React from 'react'
import Header from '../Components/header'
import Menu from '../Components/menuPrncipale'
import Menu2 from '../Components/menuPrincipale2'
import SupplierRegisterForm from '../Components/supplierRegisterForm'


export default function SupplierSignupPage() {
  return (
    <div  className='bg-my_whitee h-screen bg-opacity-5' style={{backgroundColor:'#FAF2EA', height:"40%"}}>
    <Header/> 
   <Menu/>
   <Menu2/>
   <SupplierRegisterForm/> 
   <Menu2/>
   </div>
   
  )
}
