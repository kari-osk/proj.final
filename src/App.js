import { BrowserRouter, Routes, Route} from "react-router-dom";
import CartProvider from "../src/Pages/Cart/context/cart";
import "../src/App.css";


import Home from "./Pages/Home";
import NotFound	from "./Pages/404";
import Details from "./Pages/Details";
import NavBar from "./Pages/NavBar";
import Footer from "./Pages/Footer";
import Cart from "./Pages/Cart";
import Products from "./Pages/Products";
import SobreNos from "./Pages/Sobrenos";
import Admin from "./Pages/Administracao";


export default function App(){
  return(
  <CartProvider> 
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/sobrenos" element={<SobreNos/>} />
        <Route path="/details/:id" element={<Details/>} />
        <Route path="/admin" element={<Admin/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/products/:category" element={<Products/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  </CartProvider>   
  );
}

