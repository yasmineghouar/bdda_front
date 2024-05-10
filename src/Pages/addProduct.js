import React from 'react'
import Header from '../Components/header'
import Menu2 from '../Components/menuPrincipale2'
import Menu from '../Components/menuPrncipale'
import AddNewProduct from '../Components/addProductForm'



export default function addProduct() {
  return (
   <div className='bg-my_whitee h-auto bg-opacity-5' style={{backgroundColor:'#FAF2EA'}}>
   <Header/> 
   <Menu/>
   <Menu2/>
  <AddNewProduct/>
    {/* <Menu2/> */}
   </div>
   
  )
}
