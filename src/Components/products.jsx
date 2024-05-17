import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import integrationURL from '../config';

const fetchProductImages = async (product) => {
try {
// const response = await fetch(`${integrationURL}/product/${product.photo_url}`,{
// method: 'GET',
// headers: {
// // "ngrok-skip-browser-warning": "69420",
// }});
// const imageUrl = `${integrationURL}/product/${product.photo_url}`;
const imageUrll = `https://988a-105-235-133-172.ngrok-free.app/product/body_lotion.jpg`
console.log(imageUrll)
const response = await fetch(imageUrll, {
method: 'GET',
headers: {
// "ngrok-skip-browser-warning": "69420",
// 'Accept': 'image/*',
// // 'Content-Type': 'image/jpeg',
// // 'Cache-Control': 'no-cache',
// "Access-Control-Allow-Origin": "*"
// 'Content-Type': 'image/jpg'
}
// ... other headers if needed (e.g., for CORS)
// "ngrok-skip-browser-warning": "69420",

// 'Access-Control-Allow-Origin': '*'
});
if (response.ok) {
console.log("response.ok")
console.log("response : " , response.url)
const testtt = response.url
console.log("test" , testtt)
const imageBlob = await response.blob();
console.log("imageBlob" , imageBlob)
const imageUrl = URL.createObjectURL(imageBlob);
console.log(" image url " , imageUrl)
// return "https://8ce5-105-235-131-158.ngrok-free.app/product/body_lotion.jpg"
return imageUrl
} else {
console.log("response.non ok")
throw new Error('Failed to fetch image');
}
} catch (error) {
console.error('Error fetching product image:', error);
return null;
}
};

const fetchProducts = async () => {
try {
    const response = await fetch("https://988a-105-235-133-172.ngrok-free.app/ords/ecom/product/all", {

method: 'GET',
headers: {
"ngrok-skip-browser-warning": "69420",
// Add any additional headers here if needed
},
});
if (response.ok) {
const data = await response.json();
// const productsWithImages = await Promise.all(data.items.map(async (product) => {
const productsWithImages = await Promise.all(data.items.map(async (product) => {
const imageUrl = await fetchProductImages(product);
console.log(product.id)
const test = { ...product, imageUrl }
console.log("test.imageUr" , test.imageUrl)
return { ...product, imageUrl };
}));
return productsWithImages;
} else {
throw new Error('Failed to fetch products');
}
} catch (error) {
console.error('Error fetching products:', error);
return [];
}
};

export default function Products() {
const [productList, setProductList] = useState([]);

useEffect(() => {
const fetchData = async () => {
try {
const products = await fetchProducts();
setProductList(products);
} catch (error) {
console.error('Error fetching products:', error);
}
};
fetchData();
}, []);

// useEffect(() => {
// const fetchData = async () => {
// const products = await fetchProducts();
// setProductList(products);
// };

// const interval = setInterval(() => {
// fetchData();
// }, 5000); // Fetch products every 5 seconds

// return () => clearInterval(interval); // Clean up the interval on component unmount
// }, []);

return (
  
<div className='flex flex-wrap justify-start items-start w-full px-4 py-2' style={{ backgroundColor: '#FAF2EA' }}>
<div style={{ width: '50%' }}>

<h2 style={{ fontWeight: 'bold', fontSize: '30px', color: '#392E2C', fontFamily: "montserrat", marginLeft: "-67%", marginTop: "7%", marginBottom: "-5%" }}>Product List</h2>
</div>
<div style={{ width: '50%', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
<select style={{ padding: '10px', borderRadius: '5px', border: '1px solid #392E2C', backgroundColor: '#B39188', color: '#392E2C', fontFamily: 'montserrat', marginTop: "7%", marginRight: "8.5%", width: "25%", height: "4vh" }}>
<option value="all">All</option>
<option value="hair">Hair Products</option>
<option value="skincare">Skin Care Products</option>
</select>
</div>
<div className="flex flex-wrap justify-start items-start w-full px-4 py-2" style={{ marginTop: '4%' }}>
{productList.map(product => (
<div key={product.id} className="product-item" style={{ width: 'calc(25% - 20px)', marginBottom: '20px', marginLeft: '10px', marginRight: '10px' }}>
<Link to={`/Product/${product.id}`}>
<img src={product.imageUrl} alt={product.title} style={{ width: '90%', borderRadius: '5px', border: '1px solid #392E2C', padding: '10px' }}/>
</Link>
<div style={{ textAlign: 'center', marginTop: '10px', marginBottom: '4%', color: '#392E2C', fontFamily: "montserrat" }}>
{/* <h3>{product.title}</h3> */}
<Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: '#392E2C' }}>{/* Link to product detail page */}
<h3>{product.title}</h3> {/* Clickable product title */}
</Link>
<p>{product.price} $</p>
</div>
</div>
))}
</div>
</div>
);
}