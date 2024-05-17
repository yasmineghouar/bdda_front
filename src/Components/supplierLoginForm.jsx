import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function SupplierLoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(email);
        console.log(password);
        try {
            const response = await fetch(`https://988a-105-235-133-172.ngrok-free.app/ords/ecom/supplier/login?email=${email}&password=${password}`, {
                method: "GET",
                headers: {
                    "ngrok-skip-browser-warning": "69420",
                },
            });
            if (response.ok) {
                const data = await response.json();
                console.log(data);
                if (data.items.length > 0) {
                    console.log('Login successful');
                    const supplierId = data.items[0].id;
                    console.log("supp id : ");
                    console.log(supplierId);
                    localStorage.setItem('supplierId', supplierId); // Stocker le supplierId dans le Local Storage
                   window.location.href = '/supplier/products'; // Redirect the user to the homepage
                } else {
                    console.log('Login failed: Incorrect email or password');
                }
            } else {
                console.error('Login failed:', response.statusText);
            }
            setEmail('');
            setPassword('');
        } catch (error) {
            console.error('Error logging in:', error);
        }
    };

    return (
        <div className="card border" style={{ border: '2px solid #392E2C', height: '60vh', width: '55%', marginLeft: '23%', marginTop: '4%', marginBottom: '5%', borderRadius: '5px'}}>
            <div className="card-body text-center bg-danger" style={{ width: '40%', height: '70%', marginTop: '5%', marginLeft: '25%', marginBottom : "5%" }}>
                <h5 className="card-title text-center" style={{ fontFamily: 'montserrat', fontWeight: 'bold', fontSize: '32px', color: '#392E2C', marginBottom: '18%', marginLeft: '20%' }}>LogIn as a supplier!</h5>
                <form>
                    <div className="form-group">
                        <input
                            type="text" required
                            className="form-control"
                            style={{
                                border: '1.5px solid #392E2C',
                                width: '140%',
                                height: '6vh',
                                marginLeft: '-10%',
                                marginBottom: '5%',
                                borderRadius: '5px',
                                fontFamily: "montserrat"
                            }}
                            placeholder="   Email address"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password" required
                            className="form-control"
                            style={{
                                border: '1.5px solid #392E2C',
                                width: '140%',
                                height: '6vh',
                                marginBottom: '5%',
                                marginLeft: '-10%',
                                borderRadius: '5px',
                                fontFamily: "montserrat"
                            }}
                            placeholder="   Password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary btn-block"
                        style={{
                            borderRadius: '5px',
                            backgroundColor: '#B39188',
                            color: '#392E2C',
                            fontFamily: 'montserrat',
                            fontWeight: 'bold',
                            marginTop: '8%',
                            marginLeft: '-10%',
                            width: '140%',
                            height: '6vh'
                        }}
                        onClick={handleSubmit}
                    >
                        Login 
                    </button>
                </form>
                <div className="text-center mt-3 mb-4" style={{ color: '#392E2C', fontFamily: 'montserrat', marginTop: "10%", marginLeft: "18%" }}>
                    <Link to="/supplier/signup" style={{ textDecoration: "none"}}>
                        Don't have a supplier account? <span style={{ color: "#B39188", textDecoration: "underline" , fontWeight: "bold"}}>Sign Up</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}
