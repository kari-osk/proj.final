import { Card, ListGroupItem, ListGroup, Pagination } from "react-bootstrap"
import { useState, useEffect } from "react"
import "./style.css"
import { Link, useParams, useNavigate } from "react-router-dom"
import { formatMoney } from "../Administracao/useUtils"
import Load from "../../components/Load"


export default function Products() {

    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(true)

    const [pageNumber, setPageNumber] = useState(0)
    const [totalPages, setTotalPages] = useState(0)

    const params = useParams();
    let navigate = useNavigate()

    useEffect(() => {

        console.log(params.category)
        if (params.category === "all") {
            getProducts();
        } else {
            getProductsByCategory(params.category)
        }

        getCategory();
    }, [navigate, pageNumber])

    async function getProducts() {
        try {
            const data = await fetch(
              `https://ecommerce-backend-ctd.herokuapp.com/products?size=10&page=${pageNumber}`
            )
            const { content, totalPages} = await data.json()
      
            setProducts(content)
            setTotalPages(totalPages)
            setLoading(false)    
          } catch (error) {
            alert('Houve um erro de comunicação com o servidor.', error)
          }
    }

    async function getCategory() {
        try {
            const data = await fetch('https://ecommerce-backend-ctd.herokuapp.com/categories')
            const response = await data.json()
            setCategories(response)
        } catch (error) {
            alert('Houve um erro de comunicação com o servidor.', error)
        }
    }

    async function getProductsByCategory(id) {
        try {
            const data = await fetch(`https://ecommerce-backend-ctd.herokuapp.com/products/category/${id}`)
            const content = await data.json()
            setProducts(content)
        } catch (error) {
            alert('Houve um erro de comunicação com o servidor.', error)
        }
    }

    function selectCategory(category) {
        navigate(`../products/${category}`, { replace: true })
    }


    if (loading === true) {
        return <Load/>
    }

    return (
        <section id="section-products" className="container">

            <aside className="container-pesquisa">
                <div>
                    <h2>Categorias</h2>
                    <ul>
                        <li onClick={() => selectCategory("all")}>Todas</li>
                        {categories.map(category =>
                            <li onClick={() => selectCategory(category.id)} key={category.id}> {category.name}</li>
                        )}

                    </ul>
                </div>
            </aside>
            <div className=" container-products-card"git >
                <div >
                    {products.map(product =>

                        <Link to={`/details/${product.id}`}>
                            <Card className="products-card" key={product.id} >
                                <div>
                                    <Card.Img className="img-fluid" variant="top" src={product.image} />
                                </div>
                                <Card.Body>
                                    <Card.Title>{product.title}</Card.Title>
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroupItem>{product.category.name}</ListGroupItem>
                                    <ListGroupItem className="list-group-price" >{formatMoney(product.price)}</ListGroupItem>
                                </ListGroup>
                            </Card>
                        </Link>
                    )}
                </div>

                    
                <div className="container-pagination">
                    <Pagination >
                        <Pagination.First />
                        <Pagination.Prev onClick={() => setPageNumber(pageNumber -1)} />
                        <Pagination.Item active>{pageNumber+1}</Pagination.Item>
                        <Pagination.Ellipsis />
                        <Pagination.Item onClick={() => setPageNumber(totalPages-1)} >{totalPages}</Pagination.Item>
                        <Pagination.Next onClick={() => setPageNumber(pageNumber +1)} />
                        <Pagination.Last />
                    </Pagination>
                </div>
            </div>
        </section>
    );
}