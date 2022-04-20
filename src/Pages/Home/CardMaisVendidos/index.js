import { Card, Button } from "react-bootstrap";
import "./style.css";
import { useEffect, useState, useContext } from "react";
import { getAllProducts } from '../../../Service/Api';
import { CartContext } from "../../Cart/context/cart";


export default function CardMaisVendidos() {

  const { productsCart, addProducToCart, removeProductToCart } = useContext(CartContext);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts().then(data => setProducts(data.content));
  }, []);

    return (
  <div className="group_card container">
  {/* slice limita o número de produtos que serão exibidos */}
  {products.slice(4, 7).map((product) => (
  <Card className="box_card" key={product.id}>
    <div className="box_imageMaisvend">
    <Card.Img className="image_maisvend" variant="top" src={product.image} />
    </div>
    <Card.Body>
      <Card.Title>{product.title}</Card.Title>
      <Card.Text>{product.description}</Card.Text>
    </Card.Body>
    <Card.Footer className="d-grid gap-2">
    <Button onClick={() => addProducToCart(product.id, product.image)} className="link-buy" variant="outline-dark" size="lg">Comprar por R$ {product.price}</Button>
    </Card.Footer>
  </Card>
  ))}
  </div>
);
}