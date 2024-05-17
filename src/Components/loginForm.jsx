import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(email);
        console.log(password);
        try {
        const response = await fetch("https://988a-105-235-133-172.ngrok-free.app/ords/ecom/customer/login", {
        method: "GET",
        headers: {
        "ngrok-skip-browser-warning": "69420",
        email: email,
        password: password,
        },
        });
        if (response.ok) {
        const data = await response.json();
        console.log(data);
        if (data.items.length > 0) {
        console.log('Login successful');
        const userId = data.items[0].id; 
        window.location.href = '/'; // Rediriger l'utilisateur vers la page d'accueil
        } else {
        console.log('Login failed:');
        }
        } else {
        console.error('Login failed:', response.statusText); // Afficher le message d'erreur de la réponse
        }
        setEmail('');
        setPassword('');
        
        } catch (error) {
        console.error('Error logging in:', error);
        }
        }; 
// ---------------------- Old ---------------------------- //
    // const handleSubmit = async (event) => {
    //     event.preventDefault();

    //     try {
    //         // Sending login data to the backend
    //         const response = await axios.get('http://55dd-154-121-110-77.ngrok-free.app/ords/ecom/customer/login', {
    //             email: email,
    //             password: password,
    //         });

    //         const data = response.data;

    //         // Checking the response
    //         if (data.items.length !== 0) {
    //             // Storing the token in localStorage
    //             localStorage.setItem('userId', data.items.id);
    //             localStorage.setItem('signup', true);
    //             // Redirecting to the homepage or other desired page
    //             window.location.href = '/';
    //         } else {
    //             // Displaying an error message if the token is absent
    //             console.error('Incorrect email or password');
    //         }
    //     } catch (error) {
    //         console.error('Error logging in:', error);
    //     }
    // };

// ------------------------------------------------------ //

    return (
        <div className="card border" style={{ border: '2px solid #392E2C', height: '60vh', width: '55%', marginLeft: '23%', marginTop: '4%', marginBottom: '5%', borderRadius: '5px'}}>
            <div className="card-body text-center bg-danger" style={{ width: '40%', height: '70%', marginTop: '5%', marginLeft: '25%', marginBottom : "5%" }}>
                <h5 className="card-title text-center" style={{ fontFamily: 'montserrat', fontWeight: 'bold', fontSize: '32px', color: '#392E2C', marginBottom: '18%', marginLeft: '20%' }}>Welcome Back !</h5>
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
                            placeholder= "   Email address"
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





