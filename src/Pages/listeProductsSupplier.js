// listeProducts.js
import React from 'react';
import { useParams } from 'react-router-dom';
import Products from '../Components/products';
import Header from '../Components/header'
import Menu2 from '../Components/menuPrincipale2'
import Menu from '../Components/menuPrncipale'
import ButtonAddProduct from '../Components/buttonAddProduct'

export default function ListeSupplierProducts() {
  return (
    <div className='bg-my_whitee h-screen bg-opacity-5' style={{backgroundColor:'#FAF2EA'}}>
        <Header/>
        <Menu/>
        <Menu2/>
        <br></br>
        <ButtonAddProduct/>
        <Products/>
        <Menu2/>
    </div>
  );
}
