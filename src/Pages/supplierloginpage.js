import React from 'react'
import Header from '../Components/header'
import Menu from '../Components/menuPrncipale'
import Menu2 from '../Components/menuPrincipale2'
import SupplierLoginForm from '../Components/supplierLoginForm'


export default function LoginSupPage() {
  return (
   <div  className='bg-my_whitee h-auto bg-opacity-5' style={{backgroundColor:'#FAF2EA', height:"40%"}}>
   <Header/> 
   <Menu/>
   <Menu2/>
   <SupplierLoginForm/> 
    <Menu2/> 
   </div>
   
  )
}
