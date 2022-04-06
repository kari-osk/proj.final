import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from "react-bootstrap";
import {BsWhatsapp, BsGithub, BsLinkedin, BsFillEnvelopeFill } from "react-icons/bs";
import "./style.css";

export default function Footer() {
    return (
        <div id="main-footer" className="main-footer bg-dark">
            <Navbar className="container" bg="dark" variant="dark" sticky="botton" expand="sm">
            <Navbar.Toggle />
            <Navbar.Collapse className='right-aligned'>
            <div className="container">
                <div className="row justify-content-md-center">

                    <div className="col col-lg-3">
                        <h4 className="title_footer">Linkedin Pages</h4>
                        <ul className="list-unstyled">
                            <Nav.Link className="link-to" href='https://www.linkedin.com/in/dayana-m-092a32224/' target="_blank" id='mylinkedin' ><BsLinkedin className="Icon-color" /> Dayana</Nav.Link>
                            <Nav.Link className="link-to" href='https://www.linkedin.com/in/gabrielgpena/' target="_blank" id='mylinkedin' ><BsLinkedin className="Icon-color" /> Gabriel</Nav.Link>
                            <Nav.Link className="link-to" href='https://www.linkedin.com/in/kantuta/' target="_blank" id='mylinkedin' ><BsLinkedin className="Icon-color" /> Kantuta</Nav.Link>
                            <Nav.Link className="link-to" href='https://www.linkedin.com/in/karinaosuka/' target="_blank" id='mylinkedin' ><BsLinkedin className="Icon-color" /> Karina</Nav.Link>
                            <Nav.Link className="link-to" href='https://github.com/luanableal' target="_blank" id='mylinkedin' ><BsLinkedin className="Icon-color" /> Luana</Nav.Link>
                            <Nav.Link className="link-to" href='https://www.linkedin.com/in/paulo-rossi-95296a4b/' target="_blank" id='mylinkedin' ><BsLinkedin className="Icon-color" /> Paulo</Nav.Link>
                        </ul>
                    </div>

                    <div className="col col-lg-3">
                        <h4 className="title_footer">Github Pages</h4>
                        <ul className="list-unstyled">
                            <Nav.Link className="link-to" href='https://github.com/DayanaMiranda' target="_blank" id='mygit' ><BsGithub className="Icon-color" /> Dayana</Nav.Link>
                            <Nav.Link className="link-to" href='https://github.com/GabrielGPena793' target="_blank" id='mygit' ><BsGithub className="Icon-color" /> Gabriel</Nav.Link>
                            <Nav.Link className="link-to" href='https://github.com/KantutaMolina' target="_blank" id='mygit' ><BsGithub className="Icon-color" /> Kantuta</Nav.Link>
                            <Nav.Link className="link-to" href='https://github.com/kari-osk' target="_blank" id='mygit' ><BsGithub className="Icon-color" /> Karina</Nav.Link>
                            <Nav.Link className="link-to" href='https://github.com/luanableal' target="_blank" id='mygit' ><BsGithub className="Icon-color" /> Luana</Nav.Link>
                            <Nav.Link className="link-to" href='https://github.com/DubonP' target="_blank" id='mygit' ><BsGithub className="Icon-color" /> Paulo</Nav.Link>
                            <br/>                            
                        </ul>
                    </div>

                    <div className="col col-lg-3"></div>

                    <div className="col col-lg-2">
                        <h4 className="title_footer">Contato</h4>
                        <ul className="list-unstyled">
                        <Nav.Link className="link-to" href="https://wa.me/550000000000" target="_blank" id='mygit' ><BsWhatsapp className="Icon-color" /> Whatsapp</Nav.Link>
                        <Nav.Link className="link-to" href="mailto:mercadin@test.com.br?" target="_blank" id='myemail'><BsFillEnvelopeFill className="Icon-color" /> Email</Nav.Link>
                        </ul>
                    </div>
                    
                </div>

                <div className="footer-bottom container">
                    <p className="text-xs-center">
                        Todos os direitos reservados
                        &copy;{new Date().getFullYear()}
                    </p>
                </div>
            </div>
            </Navbar.Collapse>
            </Navbar>
        </div>
);
}