import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import integrationURL from '../config';

export default function SupplierRegisterForm() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [businessLicence, setBusinessLicence] = useState('');
    const [signupError, setSignupError] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch(`${integrationURL}/ords/ecom/supplier/signup`, {
        
            method: "POST",
            headers: {
                'business_licence': businessLicence,
                'email': email,
                'full_name': fullName,
                'password': password,
            },
        });
        if (response.ok) {
            const data = await response.json();
            console.log(data.success_code);
            if (data.success_code === '1') {
                console.log('Signup successful');
                window.location.href = '/supplier/login';
            } else {
                console.log('Signup failed');
                setSignupError(true);
            
            }
        } else {
            console.error('Signup failed:', response.statusText);
            setSignupError(true);
        }
        setFullName('');
        setEmail('');
        setPassword('');
        setBusinessLicence('');
    };

    return (
        <div className="card border" style={{ border: '2px solid #001F3F', height: '75vh', width: "55%", marginLeft: "23%", marginTop: "5%", marginBottom: "5%" }}>
            <div className="card-body text-center bg-danger" style={{ width: '40%', height: '80%', marginTop: '5%', marginLeft: '25%' }}>
                <h5 className="card-title text-center" style={{ fontFamily: 'montserrat', fontWeight: 'bold', fontSize: '32px', color: '#392E2C', marginBottom: '18%', marginLeft: '-3%' ,width : "130%"}}>Sign up as a Supplier!</h5>
                <form>
                    <div className="form-group">
                        <input
                            type="text" required
                            className="form-control"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            style={{
                                border: '1.5px solid #001F3F',
                                width: '140%',
                                height: '6vh',
                                marginLeft: '-10%',
                                marginBottom: "5%",
                                borderRadius: '5px',
                                fontFamily: 'montserrat'
                            }}
                            placeholder="Full name"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text" required
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={{
                                border: '1.5px solid #392E2C',
                                width: '140%',
                                height: '6vh',
                                marginLeft: '-10%',
                                marginBottom: "5%",
                                borderRadius: '5px',
                                fontFamily: 'montserrat'
                            }}
                            placeholder="Email address"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password" required
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={{
                                border: '1.5px solid #392E2C',
                                width: '140%',
                                height: '6vh',
                                marginBottom: "5%",
                                marginLeft: '-10%',
                                borderRadius: '5px',
                                fontFamily: 'montserrat'
                            }}
                            placeholder="Password"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text" required
                            className="form-control"
                            value={businessLicence}
                            onChange={(e) => setBusinessLicence(e.target.value)}
                            style={{
                                border: '1.5px solid #392E2C',
                                width: '140%',
                                height: '6vh',
                                marginBottom: "5%",
                                marginLeft: '-10%',
                                borderRadius: '5px',
                                fontFamily: 'montserrat'
                            }}
                            placeholder="Business Licence"
                        />
                    </div>
                    {signupError && (
                        <p style={{ color: 'red', marginLeft: '-20%', fontFamily: 'montserrat' }}>Email address already used.</p>
                    )}
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
                            height: '6vh',
                        }}
                        onClick={handleSubmit}
                    >
                        Sign up
                    </button>
                </form>
                <div className="text-center mt-3 mb-4" style={{ color: '#392E2C', fontFamily: 'montserrat', marginTop: "8%", marginLeft: "18%" }}>
                    <Link to="/supplier/login" style={{ textDecoration: "none" }}>
                        Already have a supplier account? <span style={{ color: "#B39188", textDecoration: "underline", fontWeight: "bold" }}>Login</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};