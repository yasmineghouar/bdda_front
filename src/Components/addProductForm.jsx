import React, { useState } from 'react';

export default function AddProductForm() {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    categorie: '',
    supplier: '',
    date: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // send data to BACKEEEEEEEEEEEEEEEEND 
    console.log('Product submitted:', product);
    // Clear the form after submission
    setProduct({
      name: '',
      description: '',
      price: '',
      categorie: '',
      supplier: '',
      date: ''
    });
  };
  return (
    <div>
      <h2 className="text-3xl font-semi-bold mb-4 text-center text-gray-800 mt-10">Add Product</h2>
      <div className="container border border-gray-300 mx-auto px-4 py-8 bg-white rounded-lg shadow-2xl max-w-2xl mt-10 flex">
        <div className="w-1/2 pr-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-base font-montserrat text-brown mb-2">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={product.name}
                onChange={handleChange}
                className="rounded-md border border-gray-300 bg-my_whitee px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="description" className="text-base font-montserrat text-black mb-2">Description:</label>
              <input
                type="text"
                id="description"
                name="description"
                value={product.description}
                onChange={handleChange}
                className="rounded-md border border-gray-300 bg-my_whitee px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="categorie" className="text-base font-montserrat text-black mb-2">Category:</label>
              <input
                type="text"
                id="categorie"
                name="categorie"
                value={product.categorie}
                onChange={handleChange}
                className="rounded-md border border-gray-300 bg-my_whitee px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="supplier" className="text-base font-montserrat text-black mb-2">Supplier:</label>
              <input
                type="text"
                id="supplier"
                name="supplier"
                value={product.supplier}
                onChange={handleChange}
                className="rounded-md border border-gray-300 bg-my_whitee px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
          </form>
        </div>
        <div className="w-1/2 pl-4">
          <div className="flex flex-col">
            <label htmlFor="date" className="text-base font-montserrat text-black mb-2">Created at:</label>
            <input
              type="date"
              id="date"
              name="date"
              value={product.date}
              onChange={handleChange}
              className="rounded-md border border-gray-300  bg-my_whitee px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="price" className="text-base font-montserrat text-black mt-6">Price (DZ):</label>
            <input
              type="text"
              id="price"
              name="price"
              value={product.price}
              onChange={handleChange}
              className="rounded-md border border-gray-300 bg-my_whitee px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          {/* Other input fields */}
          <button type="submit" className="px-6 py-3 bg-brown font-bold rounded-md border border-brown hover:bg-opacity-75 focus:outline-none mt-10" style={{ backgroundColor: "#B39188" }}>
            Add Product
          </button>
        </div>
      </div>
    </div>
  );
}