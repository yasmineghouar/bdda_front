// DetailPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import ProductDetail from '../Components/product';
import Header from '../Components/header'
import Menu2 from '../Components/menuPrincipale2'
import Menu from '../Components/menuPrncipale'
import { CartProvider } from '../contexts/CartContext'; // Adjust the file location as needed

export default function DetailPage() {
  return (
    <div className='bg-my_whitee h-screen bg-opacity-10'>
         <Header/>
        <Menu/>
        <Menu2/>
        {/* <CartProvider> */}
        <ProductDetail />
        {/* </CartProvider> */}

      {/* <Menu2/> */}
    </div>
  );
}
