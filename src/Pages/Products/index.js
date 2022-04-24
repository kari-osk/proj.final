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

    const [lastPage, setLastPage] = useState(false)
    const [firstPage, setFirstPage] = useState(false)

    const params = useParams();
    let navigate = useNavigate()

    useEffect(() => {

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
            const { content, totalPages,  last, first } = await data.json()
      
            setProducts(content)
            setTotalPages(totalPages)
            setLastPage(last)
            setFirstPage(first)
            setLoading(false)    
          } catch (error) {
            alert('Houve um erro de comunicação com o servidor.', error)
          }
    }

    async function getCategory() {
        try {
            const data = await fetch('https://ecommerce-backend-ctd.herokuapp.com/categories')
            const content = await data.json()
            setCategories(content)

        } catch (error) {
            alert('Houve um erro de comunicação com o servidor.', error)
        }
    }

    async function getProductsByCategory(id) {
        try {
            const data = await fetch(`https://ecommerce-backend-ctd.herokuapp.com/products/category/${id}?page=${pageNumber}`)
            const { content, totalPages,  last, first } = await data.json()
            setProducts(content)
            setTotalPages(totalPages)
            setLastPage(last)
            setFirstPage(first)
            setLoading(false) 
        } catch (error) {
            alert('Houve um erro de comunicação com o servidor.', error)
        }
    }

    function selectCategory(category) {
        navigate(`../products/${category}`, { replace: true })
        setPageNumber(0)
        console.log(pageNumber)
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
            <div className=" container-products-card">
                <div >
                    {products.map(product =>

                        <Link key={product.id} to={`/details/${product.id}`}>
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
                        <Pagination.Prev disabled={firstPage} onClick={() => setPageNumber(pageNumber -1)} />
                        <Pagination.Item active>{pageNumber+1}</Pagination.Item>
                        {totalPages <= 1 ? "" :
                        <>
                            <Pagination.Ellipsis />
                            <Pagination.Item onClick={() => setPageNumber(totalPages-1)} >{totalPages}</Pagination.Item>
                        </>
                        }
                        <Pagination.Next disabled={lastPage} onClick={() => setPageNumber(pageNumber +1)} />
                        <Pagination.Last />
                    </Pagination>
                </div>
            </div>
        </section>
    );
}