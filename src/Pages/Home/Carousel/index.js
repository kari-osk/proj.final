import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

const handleDragStart = (e) => e.preventDefault();

const items = [
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
];

export default function Carousel() {
  return (
    <div className='container'>
    <AliceCarousel responsive={{
        0: {
          items: 1
        },
        1024: {
          items: 3
        }
      }}
      mouseDragEnabled
      autoPlay
      autoPlayInterval={2000}
      disableButtonsControls
      controlsStrategy="alternate"
      mouseTracking 
      infinite 
      items={items} />
      </div>

      

  );
}