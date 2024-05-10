import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import pproduct from '../Images/sec_product.jpg';
import { Lia500Px } from 'react-icons/lia';
import { Link } from 'react-router-dom';

export default function ProductDetail() {
  const { productId } = useParams();

  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
      setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decrementQuantity = () => {
      if (quantity > 1) {
          setQuantity(prevQuantity => prevQuantity - 1);
      }
  };

  // Simulate product data for the example
  const product = {
    id: productId,
    name: 'Facial Cleansing Gel',
    description: 'Here is an example of product description.',
    price: 1000,
    imageUrl: pproduct,
    categorie: 'SkinCare',
    supplier: 'yasmine_ghouar',
    date: '01/11/2024',
  };

  // Uncomment for API integration 
  /* const [product, setProduct] = useState();
  const { productId } = useParams(); // Utilize useParams to get id from URL

  useEffect(() => {
    console.log(productId);
    fetch(`http://localhost:8000/product/${productId}`) // Replace with your API URL
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => setProduct(data))
      .catch((error) => console.error('Error fetching product detail:', error));
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  } */
  return (
    <section className="product-detail bg-FAF2EA px-4 py-8 rounded-lg shadow-md md:flex md:flex-col md:items-center md:gap-8" style={{backgroundColor:'#FAF2EA'}}>
        <h2 className="text-3xl font-montserrat text-B39188 font-bold mt-10 mb-4" style={{fontFamily:'montserrat'}}> {/* Nom du produit */}
            {product.name}
        </h2>
        <div className="product-image relative w-full md:w-1/2">  {/* image du produit */}
            <img
                src={pproduct}
                alt={product.name}
                className="h-auto max-h-[600px] w-full rounded-lg object-cover shadow-lg bg-gradient-to-r from-CCAEA4 to-transparent mr-10"  
            />
        </div>
        <div className="product-info flex flex-col gap-4 md:w-1/2">
            <p className="text-base leading-relaxed text-gray-700 font-montserrat" style={{fontFamily:'montserrat'}}> {/* descrp du produit */}
                {product.description}
            </p>
            
            <div className="flex justify-between items-center">
                <p className="text-xl font-bold text-brown font-montserrat mb-2" style={{fontFamily:'montserrat', color:'#A52A2A'   }}>Catégorie:</p> {/* titre de la catégorie */}
                <p className="text-xl font-semi-bold text-gray-700 font-montserrat mb-2" style={{fontFamily:'montserrat'}}>{product.categorie}</p> {/* valeur de la catégorie */}
            </div>
            <div className="flex justify-between items-center">
                <p className="text-xl font-bold text-B39188 font-montserrat mb-2" style={{fontFamily:'montserrat',color:'#A52A2A' }}>Supplier:</p> {/* titre du fournisseur */}
                <p className="text-xl font-semi-bold text-gray-700 font-montserrat mb-2" style={{fontFamily:'montserrat'}}>{product.supplier}</p> {/* valeur du fournisseur */}
            </div>
            <div className="flex justify-between items-center">
                <p className="text-xl font-bold text-B39188 font-montserrat mb-2" style={{fontFamily:'montserrat' ,color:'#A52A2A' }}>Date:</p> {/* titre de la date */}
                <p className="text-xl font-semi-bold text-gray-700 font-montserrat mb-2" style={{fontFamily:'montserrat'}}>{product.date}</p> {/* valeur de la date */}
            </div>
            <div className="flex justify-between items-center">
                <p className="text-xl font-bold text-B39188 font-montserrat mb-2" style={{fontFamily:'montserrat' ,color:'#A52A2A' }}>Prix:</p> {/* titre du prix */}
                <p className="text-xl font-bold text-gray-800 font-montserrat mb-2" style={{fontFamily:'montserrat'}}>{product.price} DZ</p> {/* valeur du prix */}
            </div>
            <div className="flex justify-between items-center">
                <p className="text-xl font-bold text-B39188 font-montserrat mb-2" style={{ fontFamily: 'montserrat', color: '#A52A2A' }}>Quantity:</p>
                <div className="flex items-center">
                    <button onClick={decrementQuantity}>-</button>
                    <input id="quantity" type="number" value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value))} style={{ width: '80px', textAlign: 'center', border: '1px solid #B39188', borderRadius: '4px', margin: '0 5px' }} />
                    <button onClick={incrementQuantity}>+</button>
                </div>
            </div>
            <Link to={"/panier"} style={{ display: 'flex', alignItems: 'center' }}>
                <button className="px-6 py-3 bg-brown font-bold rounded-md border border-brown hover:bg-opacity-75 focus:outline-none" style={{ backgroundColor: "#B39188", width: "100%" }}>
                    Add to Cart
                </button>
            </Link>
            </div>
    </section>
);
};