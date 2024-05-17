import React from 'react';
import { Link } from 'react-router-dom';

export default function menuPrincipal2() {
  return (
    <div className='flex justify-start items-center w-full bg-FAF2EA px-4 py-2' style={{backgroundColor: '#FAF2EA'}}>
      <Link to="/" className="mr-4 text-base font-medium font-montserrat ml-10" style={{fontFamily: 'montserrat', color:'#955149'}}>Home</Link>
      <Link to="/listeProducts" className="mr-4 text-base font-medium font-montserrat ml-10" style={{fontFamily: 'montserrat', color:'#955149'}}>All Categories</Link>
      <Link to="#" className="mr-4 text-base font-medium  text-B39188 ml-10" style={{fontFamily: 'montserrat', color:'#955149'}}>Contact</Link>
   
      <Link to="#" className="mr-4 text-base font-medium font-montserrat text-B39188 ml-10" style={{fontFamily: 'montserrat', color:'#955149'}}>About us</Link>
      <Link to="/supplier/login" className="mr-4 text-base font-medium font-montserrat text-B39188 ml-10" style={{fontFamily: 'montserrat', color:'#955149'}}>Supplier Area</Link>
    </div>
  );
}