import Carousel from "./Carousel";
import { Card, CardGroup } from "react-bootstrap";
import "./style.css";

export default function Home(){
    return(
<div>

        <div>
        <Carousel/>
        </div>

        <div className="Novos_Title container">
            <br/><br/><br/>
            <p>Novos produtos</p>
        </div>

        <CardGroup className="container">
  <Card>
    <Card.Img variant="top" src="https://img.terabyteshop.com.br/produto/g/mouse-gamer-redragon-lonewolf-2-pro-m721-rgb-32000-dpi-10-botoes-programaveis-black_90346.png" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://cyberconect.com.br/wp-content/uploads/2020/12/MOUSE-GAMER-X-ZHANG-XZ-5150.jpg.png" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://resource.logitech.com/content/dam/logitech/en/products/mice/m190-wireless-mouse/m190-wireless-mouse-charcoal-gallery-01.png" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup>



</div>
  
    );
  }