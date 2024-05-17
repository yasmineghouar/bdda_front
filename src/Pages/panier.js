// panier.js
import React from 'react';
import { useParams } from 'react-router-dom';
import ProductDetail from '../Components/product';
import Header from '../Components/header'
import Menu2 from '../Components/menuPrincipale2'
import Menu from '../Components/menuPrncipale'
import PanierItems from '../Components/panierItems'
import { CartProvider } from '../contexts/CartContext'; // Adjust the file location as needed

export default function Panier() {
  return (
    <div  className='bg-my_whitee h-auto bg-opacity-5' style={{backgroundColor:'#FAF2EA', height:"40%"}}>
        <Header/>
        <Menu/>
        <Menu2/>
        {/* <CartProvider> */}
        <PanierItems/>
        {/* </CartProvider> */}
      {/* <Menu2/> */}
    </div>
  );
}
