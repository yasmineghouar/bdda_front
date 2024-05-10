import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Images/Beauty Heaven.png';
import PanierIcon from '../Images/panier.png';

export default function MenuPrincipal() {
  return (
    <div className='flex justify-between items-center w-full px-4 py-2' style={{backgroundColor: '#FAF2EA'}}>
      {/* Search Bar Section */}
      <div className="flex items-center">
        <input type="text" placeholder="Rechercher" className="border border-gray-300 px-2 py-1 rounded-md mr-4" />
      </div>

      {/* Logo Section */}
      <div className="flex items-center justify-center">
        <Link to="/"><img src={Logo} alt='Logo' className='w-50 h-20' /></Link>
      </div>

      {/* Right Side Section */}
      <div className="flex items-center">
        <Link to="#" className="mr-4">
          <p className='text-base font-medium font-montserrat text-B39188' style={{fontFamily: 'montserrat'}}>My Account</p>
        </Link>
        <Link to={"/panier"} >
        <img src={PanierIcon} alt="Panier" className="w-8 h-auto" />
        </Link>
      </div>
    </div>
  );
}
 