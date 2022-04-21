import "./style.css";
import { BiCheckShield } from "react-icons/bi";
import { RiTruckFill } from "react-icons/ri";
import { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { CartContext } from "../Cart/context/cart";
import { Card, Button } from "react-bootstrap";

export default function Details() {

  const params = useParams();

  const[quantidade, setQuantidade] =useState(1);
  const [producto, setProduct] = useState({});
  const {addProducToCart, addProducToCartWithQuantity} = useContext(CartContext);

  useEffect(() => {
    getProductsByid();
  }, []);

  async function getProductsByid(){
    const response = await fetch(`http://3.16.56.233:8080/products/${params.id}`);
    const data = await response.json();
    setProduct(data)
  }

  function handleAddQuantidade(){
    if(quantidade > 1){
      setQuantidade(quantidade - 1);
    }	
  }

  return (
    <section id="products" className="container">

      
      <div className="container-up container-fluid">
        <div className="container-img container-fluid">
          <img src={producto.image} className="img-fluid" alt="foto produto" />
        </div>

        <div className="container-product container-fluid">
          <h3>{producto.title}</h3>
          <h3><strong>Valor: R$ {producto.price}</strong></h3>
          <h5>Parcele em 12x sem juros </h5>
          <h6>
            <RiTruckFill size={20} color="black" /> Envio para todo o país
          </h6>
       
          <h4>Quantidade</h4>

          <div className="quantity-button">
            <button className="button" onClick={()=>handleAddQuantidade()}> - </button>
            <span className="quantities">{quantidade}</span>
            <button className="button" onClick={()=>setQuantidade(quantidade+1)}> + </button>
          </div>

          <div className="container-fluid text-center">

          <Link to="/cart"><Button onClick={() => addProducToCartWithQuantity(producto.id, quantidade)} className="button-add" variant="outline-dark" size="lg">Adicionar ao carrinho</Button></Link>
 
          </div>
          <h6>
            <BiCheckShield size={20} color="black" /> 90 dias de garantia
          </h6>
        </div>
      
      </div> 

      <div className="container-info-title">
        <h2>Descrição</h2>
        <hr/>
      </div>

      <div className="container-info">
        <p>{producto.description}</p>
      </div>
    </section>
  );
}
