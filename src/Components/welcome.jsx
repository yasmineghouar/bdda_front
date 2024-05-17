import React from 'react';
import beauty from '../Images/beautyy.jpg';

export default function WelcomeSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-12 bg-beige rounded-lg  mt-10"> 
      <img
        className="w-full md:col-span-6 ml-5 object-cover min-h-full" 
        src={beauty}
        alt="Welcome to our Beauty Store"
      />
      <div className="col-span-1 md:col-span-6 flex flex-col font-montserrat justify-center px-6 py-8 md:px-12 md:py-25" style={{backgroundColor:"#FAF2EA"}}>
        <h2 className="text-3xl md:text-4xl text-brown font-bold font-montserrat leading-tight mb-4">Welcome to Beauty Heaven!</h2>
        <p className="text-lg md:text-xl leading-relaxed text-brown font-montserrat mb-6">
          Explore our wide range of high-quality cosmetics and find the perfect products to enhance your natural beauty.
        </p>
       
        
        <button className="px-6 py-3 bg-brown font-bold rounded-md border border-brown hover:bg-opacity-75 focus:outline-none" style={{backgroundColor:"#B39188"}}
          onClick={() => {window.location.href = "/listeProducts"}}
          >
          Shop Now
        </button>
      </div>
    </section>
  );
}
