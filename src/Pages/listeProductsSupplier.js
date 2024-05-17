// listeProducts.js
import React from 'react';
import { useParams } from 'react-router-dom';
import Products from '../Components/products';
import Header from '../Components/header'
import Menu2 from '../Components/menuPrincipale2'
import Menu from '../Components/menuPrncipale'
import ButtonAddProduct from '../Components/buttonAddProduct'
import ProductsSupplier from '../Components/productsSupplier'
import MenuSupplier from '../Components/menu2supplier'

export default function ListeSupplierProducts() {
  return (
    <div className='bg-my_whitee h-screen bg-opacity-5' style={{backgroundColor:'#FAF2EA'}}>
        <Header/>
        <MenuSupplier/>
        <Menu2/>
        <br></br>
        <ButtonAddProduct/>
        <ProductsSupplier/>
        {/* <Products/> */}
        <Menu2/>
    </div>
  );
}