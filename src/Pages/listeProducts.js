// listeProducts.js
import React from 'react';
import { useParams } from 'react-router-dom';
import Products from '../Components/products';
import Header from '../Components/header'
import Menu2 from '../Components/menuPrincipale2'
import Menu from '../Components/menuPrncipale'

export default function ListeProducts() {
  return (
    <div className='bg-my_whitee h-screen bg-opacity-10'>
        <Header/>
        <Menu/>
        <Menu2/>
        <Products />
        <Menu2/>
    </div>
  );
}
