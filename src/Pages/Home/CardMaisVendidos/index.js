import { Card, Button } from "react-bootstrap";
import "./style.css";


export default function CardMaisVendidos() {
    return (

<Card>
    <Card.Img variant="top" src="https://img.terabyteshop.com.br/produto/g/mouse-gamer-redragon-lonewolf-2-pro-m721-rgb-32000-dpi-10-botoes-programaveis-black_90346.png" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer className="d-grid gap-2">
    <Button className="link-buy" variant="outline-dark" size="lg">Comprar</Button>
    </Card.Footer>
  </Card>

);
}