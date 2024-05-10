import './App.css';
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import HomePage from './Pages/homePage'
import DetailProduct from './Pages/productDetail'
import NewProduct from './Pages/addProduct'
import RegisterPage from './Pages/registerPage'
import LoginPage from './Pages/loginPage'
import ListeProducts from './Pages/listeProducts'
import Panier from './Pages/panier'


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path="/Product/:idProduct" element={<DetailProduct />} />
          <Route path="/addProduct" element={<NewProduct />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<RegisterPage />} />
          <Route path="/listeProducts" element={<ListeProducts />} />
          <Route path="/panier" element={<Panier />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
