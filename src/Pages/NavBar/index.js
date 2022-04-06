import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from "react-bootstrap";
import {BsCart3, BsHeart, BsHouseDoor, BsTelephoneFill, BsFillEnvelopeFill, BsFillPinFill, BsFillEmojiSmileFill, BsFillKeyFill} from "react-icons/bs";

import "./style.css";

export default function NavBar() {
    return (
        <div className="NavBar bg-dark">
        <header className="App-header">
        <Navbar className="container" bg="dark" variant="dark"
          sticky="top" expand="sm">
          <Nav className="mx-auto">
            <p className="SobreNos"><BsTelephoneFill className="Icon-color"/> (00)-0000-0000</p>
          </Nav>
          <Nav className="mx-1">
            <p className="SobreNos"><BsFillEnvelopeFill className="Icon-color"/> mercadin@test.com.br</p>
          </Nav>
          <Nav className="mx-auto">
            <p className="SobreNos"><BsFillPinFill className="Icon-color"/> 13 Maio, Centro - SP cep:(00000-000)</p>
          </Nav>
        </Navbar>

        <Navbar className="container" bg="dark" variant="dark"
          sticky="top" expand="sm">
          <Navbar.Brand id='brandname'>Mercadin</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className='right-aligned'>
          <Nav className="mx-auto">
          </Nav>
          <Nav className="mx-5">
            <Nav.Link className="align-link" ><BsHouseDoor className="Icon-color"/><br/><Link className="link-to" to="/home">Home</Link></Nav.Link>
            <Nav.Link className="align-link" ><BsFillEmojiSmileFill className="Icon-color"/><br/><Link className="link-to" to="/sobrenos">Sobre</Link></Nav.Link>
            <Nav.Link className="align-link" ><BsFillKeyFill className="Icon-color"/><br/><Link className="link-to" to="/admin">Admin</Link></Nav.Link>
          </Nav>
          <Nav className="mx-2">
            <Nav.Link className="align-link" ><BsCart3 className="Icon-color"/><br/><Link className="link-to" to="/cart">Carrinho</Link></Nav.Link>
            <Nav.Link className="align-link" ><BsHeart className="Icon-color"/><br/><Link className="link-to" to="/fav">Favoritos</Link></Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Navbar>
        
      </header>
    </div>           
    
    );
}