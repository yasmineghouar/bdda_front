import React from 'react';
import { Link } from 'react-router-dom';
import shampoo from '../Images/shampoo.png';
import shampoo2 from '../Images/shampoo2.png';
import cremesolaire from '../Images/cremesolairee.png';
import cremehydratante from '../Images/cremehydratante.png';

export default function Products() {
    const productList = [
        { id: 1, name: 'Shampoo the Skin Story', price: '500 DA', image: shampoo },
        { id: 2, name: 'Baby Shampoo', price: '400 DA', image: shampoo2 },
        { id: 3, name: 'Sunscreen Cream', price: '3000 DA', image: cremesolaire },
        { id: 4, name: 'Moisturizing Cream', price: '1200 DA', image: cremehydratante },
        { id: 5, name: 'Shampoo the Skin Story', price: '500 DA', image: shampoo },
        { id: 6, name: 'Baby Shampoo', price: '400 DA', image: shampoo2 },
        { id: 7, name: 'Baby Shampoo', price: '400 DA', image: shampoo2 },
        { id: 8, name: 'Moisturizing Cream', price: '1200 DA', image: cremehydratante },
        { id: 9, name: 'Sunscreen Cream', price: '3000 DA', image: cremesolaire },
        { id: 10, name: 'Moisturizing Cream', price: '1200 DA', image: cremehydratante },
        { id: 11, name: 'Sunscreen Cream', price: '3000 DA', image: cremesolaire },
        { id: 12, name: 'Shampoo the Skin Story', price: '500 DA', image: shampoo },
        { id: 13, name: 'Baby Shampoo', price: '400 DA', image: shampoo2 },
        { id: 14, name: 'Sunscreen Cream', price: '3000 DA', image: cremesolaire },
    ];    

    return (
        <div className='flex flex-wrap justify-start items-start w-full px-4 py-2' style={{ backgroundColor: '#FAF2EA' }}>
            <div style={{ width: '50%' }}>
                <h2 style={{ fontWeight: 'bold', fontSize: '30px', color: '#392E2C' , fontFamily : "montserrat" , marginLeft : "-67%", marginTop : "7%", marginBottom : "-5%"}}>Product List</h2>
            </div>
                <div style={{ width: '50%', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                {/* <select value={category} onChange={(e) => setCategory(e.target.value)} style={{ marginBottom: '20px' }}> */}
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
                            <img src={product.image} alt={product.name} style={{ width: '90%', borderRadius: '5px', border: '1px solid #392E2C', padding: '10px' }} />
                        </Link>                        
                    <div style={{ textAlign: 'center', marginTop: '10px', marginBottom: '4%', color: '#392E2C' , fontFamily : "montserrat" }}>
                            <h3>{product.name}</h3>
                            <p>{product.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
