import { BrowserRouter, Routes, Route} from "react-router-dom";
import React, { useEffect, useState } from "react";
import CartProvider from "../src/Pages/Cart/context/cart";
import "../src/App.css";


import Home from "./Pages/Home";
import Initial from "./Pages/Initial";
import NotFound	from "./Pages/404";
import Details from "./Pages/Details";
import NavBar from "./Pages/NavBar";
import Footer from "./Pages/Footer";
import Cart from "./Pages/Cart";
import Fav from "./Pages/Favoritos";
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
        <Route path="/details" element={<Details/>} />
        <Route path="/admin" element={<Admin/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/fav" element={<Fav/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  </CartProvider>   

  );
}

