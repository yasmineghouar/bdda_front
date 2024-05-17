import React, { createContext, useState , useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    // const [cart, setCart] = useState([]);
    const [cart, setCart] = useState(() => {
        // Load cart data from localStorage when the component mounts
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        // Save cart data to localStorage whenever it changes
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product) => {
        setCart(prevCart => [...prevCart, product]);
    };

    const clearCart = () => {
        setCart([]);
    };

    const removeFromCart = (productId) => {
        setCart(prevCart => prevCart.filter(item => item.id !== productId));
    }


    return (
        <CartContext.Provider value={{ cart, addToCart, clearCart , removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};
