import { Card, Button } from "react-bootstrap";
import "./style.css";
import { useEffect, useState, useContext } from "react";
import { getAllProducts } from "../../../Service/Api";
import { CartContext } from "../../Cart/context/cart";


export default function CardNovos() {

  const { productsCart, addProducToCart, removeProductToCart } = useContext(CartContext);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts().then(data => setProducts(data.content));
  }, []);

  var item = products[Math.floor(Math.random() * products.length)];

    return (
<div className="group_card container">
{/* slice limita o número de produtos que serão exibidos */}
{products.slice(0, 4).map((product) => (
<Card className="box_cardNovos" style={{ width: '18rem' }} key={product.id}>
  <div className="box_imageVovos">
  <Card.Img className="image_novos" variant="top" src={product.image} />
  </div>
  <Card.Body>
    <Card.Title>{product.title}</Card.Title>
    <Card.Text className="Text_price">
      Apenas R$ {product.price}
    </Card.Text>
    <Card.Footer>
    <div className="d-grid gap-2 Box_botao_novos">
    <Button onClick={() => addProducToCart(product.id, product.image)} className="link-buy Botao_Novos" variant="outline-dark" size="lg">Comprar</Button>
    </div>
    </Card.Footer>
  </Card.Body>
</Card>
))}
</div>

);
}