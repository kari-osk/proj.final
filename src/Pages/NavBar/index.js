import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Offcanvas, Button, FormLabel, FormControl } from "react-bootstrap";
import { BsCart3, BsHouseDoor, BsTelephoneFill, BsFillEnvelopeFill, BsFillPinFill, BsFillEmojiSmileFill, BsFillKeyFill } from "react-icons/bs";
import "./style.css";
import merc from "../../img/merc.svg";
import { useState, useContext } from "react";
import { CartContext } from "../Cart/context/cart";

export default function NavBar() {
  const [ show, setShow ] = useState(false);

  const {productsCart} = useContext(CartContext)

  console.log(productsCart.length)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="NavBar">
      <header className="App-header">
        <Navbar className="container"  variant="dark"
          expand="sm">
          <Nav className="mx-auto">
            <p className="SobreNos"><BsTelephoneFill className="Icon-color" /> (00)-0000-0000</p>
          </Nav>
          <Nav className="mx-1">
            <p className="SobreNos"><BsFillEnvelopeFill className="Icon-color" /> merctech@test.com.br</p>
          </Nav>
          <Nav className="mx-auto">
            <p className="SobreNos"><BsFillPinFill className="Icon-color" /> 13 Maio, Centro - SP cep:(00000-000)</p>
          </Nav>
        </Navbar>

        <Navbar className="container" variant="dark"
          sticky="top" expand="sm">
          <Navbar.Brand>
            <Link className="link-to" to="/home"><img className="merc_logo" src={merc} alt="Logo Merch Tech" /></Link>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className='right-aligned'>
            <Nav className="mx-auto">
            </Nav>
            <Nav className="mx-5">
              <Nav.Link className="align-link" ><BsHouseDoor className="Icon-color" /><br /><Link className="link-to" to="/home">Home</Link></Nav.Link>
              <Nav.Link className="align-link" ><BsFillEmojiSmileFill className="Icon-color" /><br /><Link className="link-to" to="/sobrenos">Sobre</Link></Nav.Link>
              <Nav.Link onClick={handleShow} className="align-link" ><a className="link-to"><BsFillKeyFill className="Icon-color" /><br />Admin</a></Nav.Link>
            </Nav>
            <Nav className="mx-2">
              <Nav.Link className="align-link" ><span>{productsCart.length || 0}</span><BsCart3 className="Icon-color cart-count" /><br /><Link className="link-to" to="/cart">Carrinho</Link></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>


        <Offcanvas placement="end" show={show} onHide={handleClose} >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Login</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div>
              <FormLabel to="#login">Username</FormLabel>
              <FormControl id="login" placeholder="Login" />
            </div>
            <div>
              <FormLabel>Passoword</FormLabel>
              <FormControl placeholder="Password" />
            </div>
            <Link to="/admin">
              <Button onClick={handleClose} Button>Entrar</Button>
            </Link>
          </Offcanvas.Body>
        </Offcanvas>


      </header>
    </div>

  );
}