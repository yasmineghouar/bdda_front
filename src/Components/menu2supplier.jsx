import React , {useState , useEffect} from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Images/Beauty Heaven.png';
import PanierIcon from '../Images/panier.png';

export default function MenuSupplier() {

    // const [isAuthenticated, setIsAuthenticated] = useState(false);
  
    // useEffect(() => {
    //   const userId = localStorage.getItem('userId');
    //   setIsAuthenticated(!!userId); 
    // }, []); 
    // const handleLogout = () => {
    //   localStorage.removeItem('userId');
    //   setIsAuthenticated(false);
    //   window.location.href = '/'; 
    // };

  return (
    <div className='flex justify-between items-center w-full px-4 py-2' style={{backgroundColor: '#FAF2EA'}}>
      {/* Search Bar Section */}
      <div className="flex items-center">
        <input type="text" placeholder="Rechercher" className="border border-gray-300 px-2 py-1 rounded-md mr-4" />
      </div>

      {/* Logo Section */}
      <div className="flex items-center justify-center">
        <Link to="/"><img src={Logo} alt='Logo' className='w-50 h-20' /></Link>
      </div>

      {/* Right Side Section */}
      {/* <div className="flex items-center">
    <div className="col-span-1 md:col-span-6 flex flex-col font-montserrat justify-center px-6 py-8 md:px-12 md:py-25" style={{ backgroundColor: "#FAF2EA" }}>
      {isAuthenticated ? (
        // Bouton de déconnexion si l'utilisateur est authentifié
        <button style={{
          backgroundColor: '#B39188',
          color: '#392E2C',
          fontFamily: 'montserrat',
          fontWeight: 'bold',
          width: "170%",
          height: "5vh",
        }}
          onClick={handleLogout}
        >
          Logout
        </button>
      ) : (
        // Bouton de login si l'utilisateur n'est pas authentifié
        <button style={{
          backgroundColor: '#B39188',
          color: '#392E2C',
          fontFamily: 'montserrat',
          fontWeight: 'bold',
          width: "200%",
          height: "5vh"
        }}
          onClick={() => { window.location.href = "/login" }}
        >
          Login
        </button>
        )}
    </div> */}
  <Link to="#" className="mr-4">
    <p className='text-base font-medium font-montserrat text-B39188' style={{ fontFamily: 'montserrat' }}>My Account</p>
  </Link>
  {/* <Link to={"/panier"} >
    <img src={PanierIcon} alt="Panier" className="w-8 h-auto" />
  </Link> */}
{/* </div> */}
</div>
  );
}
 