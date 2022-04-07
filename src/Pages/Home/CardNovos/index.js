import { Card, Button } from "react-bootstrap";
import "./style.css";


export default function CardNovos() {
    return (

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://images.kabum.com.br/produtos/fotos/107333/mouse-gamer-sem-fio-logitech-g-pro-wireless-lightspeed-rgb-lightsync-ambidestro-6-botoes-programaveis-hero-25k-910-005271_1644501564_gg.jpg" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>

);
}