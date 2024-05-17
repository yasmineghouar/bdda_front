import React, { useState , useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import integrationURL from '../config';
import useAuth from '../hooks/useAuth';

export default function PanierItems() {
    useAuth();

    const [showModal, setShowModal] = useState(false);
    const [address, setAddress] = useState('');
    const { cart, addToCart, clearCart , removeFromCart} = useContext(CartContext);

    // Fonction pour valider l'achat et afficher la fenêtre contextuelle
    const handleCheckout = () => {
        setShowModal(true);
    };

    // Fonction pour fermer la fenêtre contextuelle
    const closeModal = () => {
        setShowModal(false);
        
    };

    const handleAddressChange = (event) => {
        setAddress(event.target.value);
    };

    const validatePurchase = async (event) => {
        event.preventDefault();

        const customer_id = localStorage.getItem('userId'); 
        console.log("customer_id : " , customer_id)
        const delivery_address = address; 
        console.log("delivery_address : " , delivery_address)
        const orderRows = cart.map(item => ({
            product_id: item.id,
            quantity: item.quantityy
          }));
        const purchaseDetails = {
          order_rows: orderRows
        };

        // console.log("purchaseDetails (JSON):", JSON.stringify(purchaseDetails));

          console.log("purshase" ,purchaseDetails)
          const response = await fetch(`${integrationURL}/ords/ecom/order/place`, {
            method: 'POST',
            headers: {
              customer_id: customer_id, 
              delivery_address : delivery_address 
            },
            body: JSON.stringify(purchaseDetails)
           
          });
          if (response.ok) {
            const data = await response.json(); 
            console.log("data", data); 
          if (data.success_code === 1) {
            clearCart();
            setShowModal(false);
            alert('Purchase successful!');
          } else {
            alert('Failed to complete purchase!');
            console.log(data.output_message)
            setShowModal(false);
          }
          }else{
            alert('Error : cant complete purchase!');
          }
      };

    if (cart.length === 0) {
        return <div>Your cart is empty</div>;
    }

    return (
        <div className='container'  style={{ minHeight: '80vh' }}>
            {showModal && (
                <div className="modal" style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'rgba(255, 255, 255, 0.9)', border: '1px solid #392E2C', borderRadius: '8px', padding: '20px', zIndex: '1000', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', width: "34%", height : "30vh" }}>
                    <div className="modal-content" style={{ textAlign: 'center' }}>
                        <span className="close" onClick={closeModal} style={{ position: 'absolute', top: '10px', right: '10px', cursor: 'pointer', fontSize: '24px', color: '#392E2C' }}>&times;</span>
                        <h2>Enter Your Address</h2>
                        <input type="text" placeholder="Address" style={{ marginBottom: '10px', padding: '5px', borderRadius: '4px', border: '1px solid #392E2C' , marginTop : "7%", width:"65%"}}   onChange={handleAddressChange} />
                        <br />
                        <button onClick={validatePurchase} style={{ backgroundColor: '#B39188', color: 'white', padding: '8px 12px', borderRadius: '4px', border: 'none', cursor: 'pointer', marginLeft : "0%" }}>Validate the Purchase</button>
                        <button onClick={closeModal} style={{ backgroundColor: '#B39188', color: 'white', padding: '8px 12px', borderRadius: '4px', border: 'none', cursor: 'pointer' , marginLeft : "9%" , marginTop : "2%"}}>Cancel</button>
                    </div>
                </div>
            )}
            <div style={{ width: '50%' }}>
                <h2 style={{ fontWeight: 'bold', fontSize: '30px', color: '#392E2C', fontFamily: "montserrat", marginLeft: "-67%", marginTop: "7%", marginBottom: "7%" }}>Cart</h2>
            </div>
            <div className="cart-container" style={{ textAlign: 'center' }}>
                <table className='cart-table' style={{ width: '100%', borderCollapse: 'collapse', margin: '0 auto', border: '1px solid #392E2C', marginLeft : "6%" }}>
                    <thead>
                        <tr>
                            <th style={{ padding: '8px', borderRight: '1px solid #392E2C', backgroundColor: '#B39188' }}>Product</th>
                            <th style={{ padding: '8px', borderRight: '1px solid #392E2C', backgroundColor: '#B39188' }}>Quantity</th>
                            <th style={{ padding: '8px', borderRight: '1px solid #392E2C', backgroundColor: '#B39188' }}>Price</th>
                            <th style={{ padding: '8px', backgroundColor: '#B39188', width:"17%" }}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
            {cart.map(item => (
                <tr key={item.id}>
                    <td style={{ padding: '8px', borderRight: '1px solid #392E2C', borderBottom: '1px solid #392E2C' }}>{item.title}</td>
                    
                    <td style={{ padding: '8px', borderRight: '1px solid #392E2C', borderBottom: '1px solid #392E2C' }}>{item.quantityy}</td>
                    <td style={{ padding: '8px', borderRight: '1px solid #392E2C', borderBottom: '1px solid #392E2C' }}>{item.price}</td>
                    <td style={{ padding: '8px', borderBottom: '1px solid #392E2C' }}>
                        <Link to={`/Product/${item.id}`}>
                            <button className='details-btn' style={{ backgroundColor: '#B39188', color: 'white', padding: '5px 10px', borderRadius: '4px', border: 'none', cursor: 'pointer' , marginRight : "5%" }}>Details</button>
                        </Link>
                        <button onClick={() => removeFromCart(item.id)} className='remove-btn' style={{ backgroundColor: '#FFAE9D', color: 'white', padding: '5px 10px', borderRadius: '4px', border: 'none', cursor: 'pointer', marginRight: '5px' }}>Delete</button>
                    </td>
                </tr>
            ))}
        </tbody>

    </table>
    </div>
    <button className='checkout-btn' onClick={handleCheckout} style={{ backgroundColor: '#B39188', color: 'white', padding: '8px 12px', borderRadius: '4px', border: 'none', cursor: 'pointer', marginTop: '20px' , width : "7%", height: "5vh" , marginLeft : "10%", marginTop : "3%", marginBottom : "3%"}}>Buy</button>
    <Link to="/listeProducts" className='back-btn' style={{ color: '#392E2C', textDecoration: 'none', marginLeft: '10px', padding: '8px', border: '1px solid #B39188', borderRadius: '4px', backgroundColor: '#FAF2EA', cursor: 'pointer' , width : "10%" , height : "5vh", marginLeft : "5%" }}>Back to Products</Link>
</div>
);
}
