import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function RegisterForm() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [adresse, setAdresse] = useState('');
    const [numero, setNumero] = useState('');
    const [password, setPassword] = useState('');
    const [verfipassword, setVerfipassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        // const userData = {
        //     username,
        //     email,
        //     password,
        //     role: 'user',
        //     phoneNumber: numero
        // };

        // try {
        //     const response = await fetch('http://127.0.0.1:8000/signup', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json'
        //         },
        //         body: JSON.stringify(userData)
        //     });

        //     const data = await response.json();
        //     setMessage(data.message);
        //     if (data.message === "User Created") {
        //         // Effectuer une connexion implicite avec les identifiants saisis lors de l'inscription
        //         const loginData = {
        //             email,
        //             password
        //         };
    
        //         const loginResponse = await fetch('http://127.0.0.1:8000/login', {
        //             method: 'POST',
        //             headers: {
        //                 'Content-Type': 'application/json'
        //             },
        //             body: JSON.stringify(loginData)
        //         });
    
        //         const loginTokenData = await loginResponse.json();
    
        //         // Sauvegarder le token dans le localStorage
        //         localStorage.setItem('token', loginTokenData.token);
    
        //         // Rediriger l'utilisateur vers la page d'accueil
        //         window.location.href = "/";
    
        //         // Sauvegarder l'état de l'inscription
        //         localStorage.setItem('signup', true);
        //     }
        // } catch (error) {
        //     console.error('Error:', error);
        //     setMessage('Error: Unable to create user');
        // }
    };

    return (
        <div className="card border" style={{ border: '2px solid #001F3F', height: '65vh', width: "55%", marginLeft: "23%", marginTop: "5%", marginBottom: "5%" }}>
            <div className="card-body text-center bg-danger" style={{ width: '40%', height: '70%', marginTop: '5%', marginLeft: '25%' }}>
                <h5 className="card-title text-center" style={{ fontFamily: 'montserrat', fontWeight: 'bold', fontSize: '32px', color: '#392E2C', marginBottom: '18%', marginLeft: '-3%' ,width : "130%"}}>Welcome to Beauty Heaven !</h5>
                <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input
                            type="text"
                            className="form-control"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            style={{
                                border: '1.5px solid #001F3F',
                                width: '140%',
                                height: '6vh',
                                marginLeft: '-10%',
                                marginBottom: "5%",
                                borderRadius: '5px',
                                fontFamily: 'montserrat'
                            }}
                            placeholder="   Username"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
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
                            placeholder="   Email address"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
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
                            placeholder="   Password"
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
                            height: '6vh',
                        }}
                        onClick={() => {window.location.href = "/listeProducts"}}
                    >
                        Sign up
                    </button>
                </form>
                <div className="text-center mt-3 mb-4" style={{ color: '#392E2C', fontFamily: 'montserrat', marginTop: "8%", marginLeft: "18%" }}>
                    <Link to="/login" style={{ textDecoration: "none"}}>
                        Already have an account? <span style={{ color: "#B39188", textDecoration: "underline" , fontWeight: "bold"}}>Login</span>
                    </Link>
            </div>
            </div>
        </div>
    );
}
