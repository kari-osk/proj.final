import { Link, useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  Navbar,
  Nav,
  Offcanvas,
  Button,
  FormLabel,
  FormControl
} from 'react-bootstrap'
import {
  BsCart3,
  BsHouseDoor,
  BsTelephoneFill,
  BsFillEnvelopeFill,
  BsFillPinFill,
  BsFillEmojiSmileFill,
  BsFillKeyFill
} from 'react-icons/bs'
import './style.css'
import merc from '../../img/merc.svg'
import { useState, useContext } from 'react'
import { CartContext } from '../Cart/context/cart'

export default function NavBar() {
  const [show, setShow] = useState(false)
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')

  let navigate = useNavigate()

  const { productsCart } = useContext(CartContext)

  let totalQuantity = productsCart.reduce(
    (accumulator, product) => product?.quantity + accumulator,
    0
  )

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  function login() {
    if (username === 'admin' && password === 'admin') {
      navigate('../admin', { replace: true })
      clearFields()
      handleClose()
    }
  }

  function clearFields() {
    setUserName('')
    setPassword('')
  }

  return (
    <div className="NavBar">
      <header className="App-header">
        <div className='container-background'>
          <Navbar className="container" variant="dark" expand="sm">
            <Nav className="mx-auto">
              <p className="SobreNos">
                <BsTelephoneFill className="Icon-color" /> (11) 9 6106-4451
              </p>
            </Nav>
            <Nav className="mx-1">
              <p className="SobreNos">
                <BsFillEnvelopeFill className="Icon-color" />{' '}
                contato@merctech.com.br
              </p>
            </Nav>
            <Nav className="mx-auto">
              <p className="SobreNos">
                <BsFillPinFill className="Icon-color" /> Treze de Maio, 3458
                Centro - SP CEP: 14870-160
              </p>
            </Nav>
          </Navbar>
        </div>

        <Navbar className="container" variant="dark" expand="sm">
          <Navbar.Brand>
            <Link className="link-to" to="/home">
              <img className="merc_logo" src={merc} alt="Logo Merch Tech" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="right-aligned">
            <Nav className="mx-auto"></Nav>
            <Nav className="mx-5">
              <Nav.Link className="align-link">
                <BsHouseDoor className="Icon-color" />
                <br />
                <Link className="link-to" to="/home">
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link className="align-link">
                <BsFillEmojiSmileFill className="Icon-color" />
                <br />
                <Link className="link-to" to="/sobrenos">
                  Sobre
                </Link>
              </Nav.Link>
              <Nav.Link onClick={handleShow} className="align-link">
                <button className="link-to">
                  <BsFillKeyFill className="Icon-color" />
                  <br />
                  Admin
                </button>
              </Nav.Link>
            </Nav>
            <Nav className="mx-2">
              <Nav.Link className="align-link container-icon-cart">
                <span className="quantity-cart">{totalQuantity || 0}</span>
                <BsCart3 className="Icon-color cart-count" />
                <br />
                <Link className="link-to" to="/cart">
                  Carrinho
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <hr className='quebra-estilizada' />
        <Offcanvas
          className="container-canvas"
          placement="end"
          show={show}
          onHide={handleClose}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Login</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="container-canvas-form">
            <div>
              <FormLabel to="#login">Username</FormLabel>
              <FormControl
                value={username}
                onChange={e => setUserName(e.target.value)}
                id="login"
                placeholder="Login"
              />
            </div>
            <div>
              <FormLabel>Passoword</FormLabel>
              <FormControl
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Password"
              />
            </div>
            <Button onClick={login} Button>
              Entrar
            </Button>
            <hr />
            <p>
              Simulação de login, para acessar a sessão de administração,
              coloque: <br /> <b>login:</b> admin <br /> <b>senha:</b> admin
            </p>
          </Offcanvas.Body>
        </Offcanvas>
      </header>
    </div>
  )
}
