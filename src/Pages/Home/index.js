import Carousel from "./Carousel";
import CardMaisVendidos from "./CardMaisVendidos";
import CardNovos from "./CardNovos";
import { CardGroup } from "react-bootstrap";
import "./style.css";
import Countdown from "./CountDown";

export default function Home(){
    return(
<div>

        <div>
        <Carousel/>
        </div>

        <div className="Novos_Title container">
            <br/>
            <p>Novos produtos</p>
        </div>

        <CardGroup className="container">
          <CardNovos/>
          <CardNovos/>
          <CardNovos/>
        </CardGroup>

        <div className="container">
            <br/><br/>
            <Countdown/>
        </div>

        <div className="Novos_Title container">
            <br/>
            <p>Os mais vendidos</p>
        </div>

        <CardGroup className="container">
          <CardMaisVendidos/>
          <CardMaisVendidos/>
          <CardMaisVendidos/>
          <CardMaisVendidos/>
        </CardGroup>
        <br/>

</div>
  
  );
}