import React, { useEffect, useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { getAllProducts } from "../../../Service/Api";


export default function Carousel() {

  const [products, setProducts] = useState([]);
  const handleDragStart = (e) => e.preventDefault();

  useEffect(() => {
    getAllProducts().then(data => setProducts(data.content));
  }, []);

/* const items = [
  <div>
    <img className='image_box' src="https://www.sony.pt/image/57f06d3e66ee7ef1a085e16c5e45bc40?fmt=png-alpha&wid=440" onDragStart={handleDragStart} />
    <div className="d-grid gap-2">
      <Button className='button' variant="outline-dark">Comprar</Button>
    </div>
  </div>,
  <div>
    <img className='image_box' src="https://cdn.shopify.com/s/files/1/0404/1101/products/MG20W3_Hero_1020x.png?v=1637781398" onDragStart={handleDragStart} />
    <div className="d-grid gap-2">
      <Button className='button' variant="outline-dark">Comprar</Button>
    </div>
  </div>,
  <div>
    <img className='image_box' src="https://cdn.shopify.com/s/files/1/0057/8938/4802/products/ae22e3a6-9590-401a-94f6-d8ecf42b4932.png?v=1625046351" onDragStart={handleDragStart} />
    <div className="d-grid gap-2">
      <Button className='button' variant="outline-dark">Comprar</Button>
    </div>
  </div>,
]; */

  return (

    
    <div className='container box_geral'>
    {products.slice(0, 1).map((product) => (
    <AliceCarousel 
    responsive={{
        0: {
          items: 1
        }
      }}
      mouseDragEnabled
      autoPlay
      autoPlayInterval={2000}
      disableButtonsControls={true}
      disableDotsControls={false}
      mouseTracking 
      infinite>

      <div className='Box_carro' key={product.id}>
        <img className='image_box' src={product.image} onDragStart={handleDragStart} />
        <div className="d-grid gap-2">
          <Button className='button' variant="outline-dark"><p className='Text_button'>Comprar por R$ {product.price}</p></Button>
        </div>
      </div>
      <div className='Box_carro' key={product.id}>
        <img className='image_box' src={product.image} onDragStart={handleDragStart} />
        <div className="d-grid gap-2">
          <Button className='button' variant="outline-dark"><p className='Text_button'>Comprar por R$ {product.price}</p></Button>
        </div>
      </div>
      
        
      </AliceCarousel>
      ))}
      </div>

  );
};