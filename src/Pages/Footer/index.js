import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import {BsWhatsapp, BsFillEnvelopeFill } from "react-icons/bs";
import "./style.css";
import merc from "../../img/merc.svg";

export default function Footer() {
    return (
        <div id="main-footer" className="main-footer">
            <Navbar className="container"  variant="dark" sticky="botton" expand="sm">
                <div className="container flex-column">                
                    <div className='d-flex justify-content-between w-100 container-contato'>
                        <div className='d-flex box_logo_contato'>
                            <img className="merc_logo" src={merc} alt="Logo Merch Tech" />              
                            <div className="text-white box_sobre_logo">
                                <p className="Text_sobre_logo">+ 55 11 9 6106-4451</p>
                                <p className="Text_sobre_logo">contato@merctech.com.br</p>
                            </div>
                        </div> 

                        <div className='d-flex box_mail_whats'>
                            <Nav.Link className="link-to" href="https://wa.me/550000000000" target="_blank" id='mygit' >
                                <div className="box_icon_footer">
                                    <BsWhatsapp className="Icon-color_footer" />
                                </div> 
                            </Nav.Link>
                            <Nav.Link className="link-to" href="mailto:mercadin@test.com.br?" target="_blank" id='myemail'>
                                <div className="box_icon_footer">
                                    <BsFillEnvelopeFill className="Icon-color_footer" />
                                </div>
                            </Nav.Link>
                        </div>   

                    </div>                             
                    <div className="container text-white text-center text_foter_info">
                        <p className="Text_sobre_footer">Merc Tech Varejo do Brasil Ltda. | CNPJ 08.888.440/0001-39</p>
                        <p className="Text_sobre_footer">Rua Treze de Maio, 3458 Centro, São Paulo/SP CEP: 14870-160</p>
                        <p className="Text_sobre_footer">Formas de pagamentos aceitas: cartões de crédito (MasterCard, Visa, Elo e American Express) e boleto.</p>
                        <p className="Text_sobre_footer">Todos os direitos reservados &copy;{new Date().getFullYear()}</p>
                    </div>
                </div>
            </Navbar>
        </div>
    );
}