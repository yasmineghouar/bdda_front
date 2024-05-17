import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import integrationURL from '../config';

export default function LoginForm() {
    const [category_id, setCategorie_id] = useState('');
    const [description, setdescription] = useState('');
    const [image, setImage] = useState(null);
    const [price, setprice] = useState('');
    const [quantity, setquantity] = useState('');
    const [categories, setCategories] = useState([]); // État pour stocker les catégories
    
    const [title, settitle] = useState('');
  
    const handleImageChange = (e) => {
      const file = e.target.files[0];
      setImage(file);
    };

     // Fonction pour récupérer les catégories 
    const fetchCategories = async () => {
      console.log("fetch categories");
      try {
          const response = await fetch("https://988a-105-235-133-172.ngrok-free.app/ords/ecom/product/category/all", {
          //const response = await fetch(`${integrationURL}/product/category/all`, { 
              method: 'GET',
              headers: {
                  "ngrok-skip-browser-warning": "69420",
              },
          });
          if (response.ok) {
              const data = await response.json();
              console.log(data);
              setCategories(data.items);
          } else {
              console.error('Failed to fetch categories:', response.statusText);
          }
      } catch (error) {
          console.error('Error fetching categories:', error);
      }
  };

  // Utiliser useEffect pour appeler fetchCategories lors du montage du composant
  useEffect(() => {
      fetchCategories();
  }, []);

  
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(category_id);
        console.log(description);
       // console.log(image);
        console.log(price);
        console.log(quantity);
        const supplierId = localStorage.getItem('supplierId'); // Récupérer le supplierId depuis le Local Storage
        console.log(supplierId);
        console.log(title);
        try {
        
          const response = await fetch("https://988a-105-235-133-172.ngrok-free.app/ords/ecom/product/add", {
        method: "POST",
        body: image,
        headers: {
         
        category_id: category_id,
        description: description,
      
        price: price,
        quantity: quantity,
        
        supplier_id: supplierId,
        title: title,
        },
        });
        if (response.ok) {
          const data = await response.json(); // Extract JSON data from the response
          console.log('Response body:', data);
          
          // Check if the success_code is 1
          if (data.success_code === "1") {
            // Display success message
            console.log('Product added successfully:', data.output_message);
            // Handle success, maybe redirect or display a success notification
          } else {
            // If success_code is not 1, something went wrong
            console.error('Adding product failed:', data.output_message);
            // Handle failure, maybe display an error message to the user
          }
        } else {
          console.error('Adding product failed:', response.statusText);
        }
        setCategorie_id('');
        setdescription('');
       
        setprice('');
        setquantity('');
        
        settitle('');
        

        
        } catch (error) {
        console.error('Error adding in:', error);
        }
        }; 




return (
  <div>
    <h2 className="text-3xl font-semi-bold mb-4 text-center text-gray-800 mt-10">Add Product</h2>
    <div className="container border border-gray-300 mx-auto px-4 py-8 bg-white rounded-lg shadow-2xl max-w-2xl mt-10 flex">
      <div className="w-full flex">
        <div className="w-1/2 pr-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-base font-montserrat text-brown mb-2">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={title}
                onChange={e => settitle(e.target.value)}
                className="rounded-md border border-gray-300 bg-my_whitee px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="description" className="text-base font-montserrat text-black mb-2">Description:</label>
              <input
                type="text"
                id="description"
                name="description"
                value={description}
                onChange={e => setdescription(e.target.value)}
                className="rounded-md border border-gray-300 bg-my_whitee px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-col">
      <label htmlFor="categorie" className="text-base font-montserrat text-black mb-2">Category:</label>
    <select
        id="categorie"
        name="categorie"
        value={category_id}
        onChange={e => setCategorie_id(e.target.value)}
        className="rounded-md border border-gray-300 bg-my_whitee px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
    >
        <option value="">-- Select Category --</option>
        {categories.length === 0 ? (
            <option value="" disabled>Loading categories...</option>
            ) : (
            categories.map(category => (
                <option key={category.id} value={category.id}>{category.name}</option>
            ))
        )}
    </select>
</div>

            <div className="flex flex-col">
              <label htmlFor="quantity" className="text-base font-montserrat text-black mb-2">Quantity:</label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                value={quantity}
                onChange={e => setquantity(e.target.value)}
                className="w-20 text-center rounded-md border border-b border-gray-300 bg-my_whitee py-1 focus:outline-none ml-20"
              />
            </div>
          </form>
        </div>
        <div className="w-1/2 pl-4">
          <div className="flex flex-col">
            <label htmlFor="price" className="text-base font-montserrat text-black mt-6">Price (DZ):</label>
            <input
              type="text"
              id="price"
              name="price"
              value={price}
              onChange={e => setprice(e.target.value)}
              className="rounded-md border border-gray-300 bg-my_whitee px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          {/* Champ de formulaire pour l'image */}
          <div className="flex flex-col">
            <label htmlFor="image" className="text-base font-montserrat text-black mb-2">Image:</label>
            <input
              type="file"
              id="image"
              name="image"
            //  value={image}
             // accept="image/*" // Accepter uniquement les fichiers image
             onChange={handleImageChange} 
              className="rounded-md border border-gray-300 bg-my_whitee px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <button type="submit" className="px-6 py-3 bg-brown font-bold rounded-md border border-brown hover:bg-opacity-75 focus:outline-none mt-10" style={{ backgroundColor: "#B39188" }} onClick={handleSubmit}>
            Add Product
          </button>
        </div>
      </div>
    </div>
  </div>
);
}