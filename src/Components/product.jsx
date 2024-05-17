import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import integrationURL from '../config';
import useAuth from '../hooks/useAuth';

const fetchProductImage = async (photoUrl) => {
    try {
        const imageUrl = `${integrationURL}/product/${photoUrl}`;
        const response = await fetch(imageUrl, {
            method: 'GET',
            headers: {
            },
        });
        if (response.ok) {
            const imageBlob = await response.blob();
            return URL.createObjectURL(imageBlob);
        } else {
            throw new Error('Failed to fetch image');
        }
    } catch (error) {
        console.error('Error fetching product image:', error);
        return null;
    }
};

const fetchSupplierName = async (supplierId) => {
    try {
        const response = await fetch(`${integrationURL}/ords/ecom/supplier/${supplierId}`, {
            method: 'GET',
            headers: {
                "ngrok-skip-browser-warning": "69420",
            },
        });
        if (!response.ok) {
            throw new Error('Failed to fetch supplier details');
        }
        const data = await response.json();
        return data.items[0].full_name; 
    } catch (error) {
        console.error('Error fetching supplier details:', error);
        return null;
    }
};

const fetchCategorieName = async (categortieId) => {
    try {
        const response = await fetch(`${integrationURL}/ords/ecom/product/category/details/${categortieId}`, {
            method: 'GET',
            headers: {
                "ngrok-skip-browser-warning": "69420",
            },
        });
        if (!response.ok) {
            throw new Error('Failed to fetch categorie details');
        }
        const data = await response.json();
        return data.items[0].name;
    } catch (error) {
        console.error('Error fetching categorie details:', error);
        return null;
    }
};

export default function ProductDetail() {
    useAuth();
    const { idProduct } = useParams();
    const [product, setProduct] = useState(null);
    const [quantityy, setQuantity] = useState(1);
    const [supplierName, setSupplierName] = useState('');
    const { cart, addToCart, clearCart , removeFromCart} = useContext(CartContext);
    const [categorieName, setcategorieName] = useState('');

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', options);
    };

    const handleChangeQuantity = (value) => {
        const newValue = Math.min(Math.max(1, value), product.quantity);
        setQuantity(newValue);
    };
    
    const incrementQuantity = () => {
        handleChangeQuantity(quantityy + 1);
    };
    
    const decrementQuantity = () => {
        handleChangeQuantity(quantityy - 1);
    };

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`${integrationURL}/ords/ecom/product/${idProduct}`, {
                    method: 'GET',
                    headers: {
                        "ngrok-skip-browser-warning": "69420",
                    },
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch product detail');
                }
                const data = await response.json();
                const productData = data.items[0];
                const imageUrl = await fetchProductImage(productData.photo_url);
                const supplierName = await fetchSupplierName(productData.supplier_id);
                const categorieName = await fetchCategorieName(productData.category_id)
                setProduct({ ...productData, imageUrl });
                setSupplierName(supplierName);
                setcategorieName(categorieName);
                console.log("quantity" , productData.quantity)
            } catch (error) {
                console.error('Error fetching product detail:', error);
            }
        };

        fetchProduct();
    }, [idProduct]);

    useEffect(() => {
        console.log('Updated cart:', cart);
    }, [cart]);

    const handleAddToCart = () => {
        if (product) {
            const isProductInCart = cart.some(item => item.id === product.id);
            if (!isProductInCart) {
                addToCart({ ...product, quantityy });
                console.log('Adding product:', product);
                window.location.href = "/panier";
            }
        }
    };

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <section className="product-detail bg-FAF2EA px-4 py-8 rounded-lg shadow-md md:flex md:flex-col md:items-center md:gap-8" style={{ backgroundColor: '#FAF2EA' }}>
            <h2 className="text-3xl font-montserrat text-B39188 font-bold mt-10 mb-4" style={{ fontFamily: 'montserrat' }}>
                {product.title}
            </h2>
            <div className="product-image relative w-full md:w-1/2">
                <img
                    src={product.imageUrl}
                    alt={product.title}
                    className="h-auto max-h-[600px] w-full rounded-lg object-cover shadow-lg bg-gradient-to-r from-CCAEA4 to-transparent mr-10"
                />
            </div>
            <div className="product-info flex flex-col gap-4 md:w-1/2">
                <p className="text-base leading-relaxed text-gray-700 font-montserrat" style={{ fontFamily: 'montserrat' }}>
                    {product.description}
                </p>
                <div className="flex justify-between items-center">
                    <p className="text-xl font-bold text-brown font-montserrat mb-2" style={{ fontFamily: 'montserrat', color: '#A52A2A' }}>Catégorie:</p>
                    <p className="text-xl font-semi-bold text-gray-700 font-montserrat mb-2" style={{ fontFamily: 'montserrat' }}>{categorieName}</p>
                </div>
                <div className="flex justify-between items-center">
                    <p className="text-xl font-bold text-B39188 font-montserrat mb-2" style={{ fontFamily: 'montserrat', color: '#A52A2A' }}>Supplier:</p>
                    <p className="text-xl font-semi-bold text-gray-700 font-montserrat mb-2" style={{ fontFamily: 'montserrat' }}>{supplierName}</p>
                </div>
                <div className="flex justify-between items-center">
                    <p className="text-xl font-bold text-B39188 font-montserrat mb-2" style={{ fontFamily: 'montserrat', color: '#A52A2A' }}>Date:</p>
                    <p className="text-xl font-semi-bold text-gray-700 font-montserrat mb-2" style={{ fontFamily: 'montserrat' }}>{formatDate(product.created_at)}</p>
                </div>
                <div className="flex justify-between items-center">
                    <p className="text-xl font-bold text-B39188 font-montserrat mb-2" style={{ fontFamily: 'montserrat', color: '#A52A2A' }}>Prix:</p>
                    <p className="text-xl font-bold text-gray-800 font-montserrat mb-2" style={{ fontFamily: 'montserrat' }}>{product.price} $</p>
                </div>
                {product.quantity !== 0 &&
                <div className="flex justify-between items-center">
                    <p className="text-xl font-bold text-B39188 font-montserrat mb-2" style={{ fontFamily: 'montserrat', color: '#A52A2A' }}>Quantity:</p>
                    <div className="flex items-center">
                        <button onClick={decrementQuantity}>-</button>
                        <input id="quantity" type="number" value={quantityy} onChange={(e) => setQuantity(parseInt(e.target.value))} style={{ width: '80px', textAlign: 'center', border: '1px solid #B39188', borderRadius: '4px', margin: '0 5px' }}  />
                        <button onClick={incrementQuantity}>+</button>
                    </div>
                </div>}
                {product.quantity === 0 && <p style={{ color: 'red' }}>Out of stock.</p>}
                <button onClick={handleAddToCart} className="px-6 py-3 bg-brown font-bold rounded-md border border-brown hover:bg-opacity-75 focus:outline-none" style={{ backgroundColor: product.quantity === 0 ? "#CCCCCC" : "#B39188 ", width: "100%" , cursor: product.quantity === 0 ? "not-allowed" : "pointer",}} disabled={product.quantity === 0} >
                    Add to Cart
                </button>
            </div>
        </section>
    );
}
