import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        // Envoi des données de connexion au backend
        // fetch('http://127.0.0.1:8000/login', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //         email: username,
        //         password: password,
        //     }),
        // })
            // .then(response => response.json())
            // .then(data => {
            //     // Vérification de la réponse
            //     if (data.token) {
            //         // Enregistrement du token dans le localStorage
            //         localStorage.setItem('token', data.token);
            //         localStorage.setItem('signup', true );
            //         // Redirection vers la page d'accueil ou autre page souhaitée
            //         window.location.href = '/';
            //     } else {
            //         // Affichage d'un message d'erreur si le token est absent
            //         console.error('Token is missing');
            //     }
            // })
            // .catch(error => {
            //     console.error('Error logging in:', error);
            // });
    };

    return (
        <div className="card border" style={{ border: '2px solid #392E2C', height: '60vh', width: '55%', marginLeft: '23%', marginTop: '4%', marginBottom: '5%', borderRadius: '5px'}}>
            <div className="card-body text-center bg-danger" style={{ width: '40%', height: '70%', marginTop: '5%', marginLeft: '25%', marginBottom : "5%" }}>
                <h5 className="card-title text-center" style={{ fontFamily: 'montserrat', fontWeight: 'bold', fontSize: '32px', color: '#392E2C', marginBottom: '18%', marginLeft: '20%' }}>Welcome Back !</h5>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
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
                            placeholder= "   Username / Email address"
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
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
                        onClick={() => {window.location.href = "/listeProducts"}}
                    >
                        Login now
                    </button>
                </form>
                <div className="text-center mt-3 mb-4" style={{ color: '#392E2C', fontFamily: 'montserrat', marginTop: "8%", marginLeft: "18%" }}>
                    <Link to="/signup" style={{ textDecoration: "none"}}>
                        Don't have an account? <span style={{ color: "#B39188", textDecoration: "underline" , fontWeight: "bold"}}>Sign Up</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}
