import Carousel from "./Carousel";
import CardMaisVendidos from "./CardMaisVendidos";
import CardNovos from "./CardNovos";
import { Accordion, CardGroup } from "react-bootstrap";
import "./style.css";
import Countdown from "./CountDown";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllProducts } from '../../Service/Api.js'
import Load from "../../components/Load";


export default function Home() {

  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])

  useEffect(() => {
    getAllProducts().then(data => setProducts(data.content))
    getCategory();
  }, [])


  async function getCategory() {
    try {
      const data = await fetch('https://ecommerce-backend-ctd.herokuapp.com/categories')
      const response = await data.json()
      setCategories(response)
    } catch (error) {
      alert('Houve um erro de comunicação com o servidor.', error)
    }
  }

  if (products.length === 0) {
    return <Load />
  }

  return (
    <div className="tudo_home">

      <div className='container-categorias'>
        <ul className='container'>
          <li>
            <Link to={`/products/all`}>
              Todos
            </Link>
          </li>
          {categories.map(category =>
            <li key={category.id}>
              <Link to={`/products/${category.id}`}>
                {category.name}
              </Link>
            </li>
          )}
        </ul>
      </div>
      <Accordion className="menu_categoria_home" defaultActiveKey="0" flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Categorias</Accordion.Header>
          <Accordion.Body>
            <ul className='container'>
              <li>
                <Link to={`/products/all`}>
                  Todos
                </Link>
              </li>
              {categories.map(category =>
                <li key={category.id}>
                  <Link to={`/products/${category.id}`}>
                    {category.name}
                  </Link>
                </li>
              )}
            </ul>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      
      <div>
        <Carousel products={products} />
      </div>

      <div className="Novos_Title container">
        <p>Novos produtos</p>
      </div>

      <CardGroup className="container">
        <CardNovos products={products} />
      </CardGroup>

      <div className="container">
        <Countdown products={products} />
      </div>

      <div className="Novos_Title container">
        <p>Os mais vendidos</p>
      </div>

      <CardGroup className="container group_Maisvendido">
        <CardMaisVendidos products={products} />
      </CardGroup>

    </div>

  );
}