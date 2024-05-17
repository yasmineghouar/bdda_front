import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import integrationURL from '../config';

export default function RegisterForm() {
const [fullName, setFullName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [SignupError, setSignupError] = useState(false);


const handleSubmit = async (event) => {
event.preventDefault();
const response = await fetch("https://988a-105-235-133-172.ngrok-free.app/ords/ecom/customer/signup", {
method: "POST",
headers: {
email: email,
full_name : fullName,
password: password,
},
});
if (response.ok) {
const data = await response.json();
console.log(data);
if (data.success_code == 1) {
console.log('Signup successful');
window.location.href = '/login';
} else {
console.log('Signup failed');
setSignupError(true);
}
} else {
console.error('Signup failed:', response.statusText); // Afficher le message d'erreur de la réponse
}
setFullName('');
setEmail('');
setPassword('');
};

return (
<div className="card border" style={{ border: '2px solid #001F3F', height: '65vh', width: "55%", marginLeft: "23%", marginTop: "5%", marginBottom: "5%" }}>
<div className="card-body text-center bg-danger" style={{ width: '40%', height: '70%', marginTop: '5%', marginLeft: '25%' }}>
<h5 className="card-title text-center" style={{ fontFamily: 'montserrat', fontWeight: 'bold', fontSize: '32px', color: '#392E2C', marginBottom: '18%', marginLeft: '-3%' ,width : "130%"}}>Welcome to Beauty Heaven !</h5>
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
placeholder=" Full name"
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
placeholder=" Email address"
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
placeholder=" Password"
/>
{SignupError && ( // Afficher le message d'erreur uniquement si loginError est vrai
<p style={{ color: 'red', marginLeft: '-20%', fontFamily: 'montserrat' }}>Email address already used.</p>
)}
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
onClick={handleSubmit}
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