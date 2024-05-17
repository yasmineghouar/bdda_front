// src/components/AddProductButton.js
import React from 'react';
import { Link } from 'react-router-dom';

export default function buttonAddProduct() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
      <Link to="/addProduct">
        <button
          style={{
            padding: '10px 20px',
            borderRadius: '5px',
            border: 'none',
            backgroundColor: '#392E2C',
            color: '#FAF2EA',
            fontFamily: 'montserrat',
            fontSize: '16px',
            cursor: 'pointer',
          }}
        >
          Add Product
        </button>
      </Link>
    </div>
  );
}
