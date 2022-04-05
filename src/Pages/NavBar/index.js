import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from "react-bootstrap";
import {BsCart3, BsHeart, BsHouseDoor, BsTelephoneFill, BsFillEnvelopeFill, BsFillPinFill} from "react-icons/bs";

import "./style.css"

export default function NavBar() {
    return (
        <div className="NavBar">
        <header className="App-header">
        <Navbar bg="dark" variant="dark"
          sticky="top" expand="sm">
          <Navbar.Toggle />
          <Nav className="mx-auto">
            <p className="SobreNos"><BsTelephoneFill className="Icon-color"/> (00)-0000-0000</p>
          </Nav>
          <Nav className="mx-auto">
            <p className="SobreNos"><BsFillEnvelopeFill className="Icon-color"/> mercadin@test.com.br</p>
          </Nav>
          <Nav className="mx-auto">
            <p className="SobreNos"><BsFillPinFill className="Icon-color"/> 13 Maio, Centro - SP cep:(00000-000)</p>
          </Nav>
        </Navbar>

        <Navbar bg="dark" variant="dark"
          sticky="top" expand="sm">
          <Navbar.Brand id='brandname'>Mercadin</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className='right-aligned'>
          <Nav className="mx-auto">
            <Nav.Link className="align-link" ><BsHouseDoor className="Icon-color"/><br/><Link className="link-to" to="/home">Home</Link></Nav.Link>
          </Nav>
          <Nav className="mx-auto">
            <Nav.Link className="align-link" ><BsCart3 className="Icon-color"/><br/><Link className="link-to" to="/cart">Carrinho</Link></Nav.Link>
            <Nav.Link className="align-link" ><BsHeart className="Icon-color"/><br/><Link className="link-to" to="/fav">Favoritos</Link></Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Navbar>
        
      </header>
    </div>           
    
    );
}