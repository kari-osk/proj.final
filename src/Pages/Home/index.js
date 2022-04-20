import Carousel from "./Carousel";
import CardMaisVendidos from "./CardMaisVendidos";
import CardNovos from "./CardNovos";
import { CardGroup } from "react-bootstrap";
import "./style.css";
import Countdown from "./CountDown";

export default function Home() {
  return (
    <div className="tudo_home">

      <div>
        <Carousel />
      </div>

      <div className="Novos_Title container">
        <p>Novos produtos</p>
      </div>

      <CardGroup className="container">
        <CardNovos />
      </CardGroup>

      <div className="container">
        <Countdown />
      </div>

      <div className="Novos_Title container">
        <p>Os mais vendidos</p>
      </div>

      <CardGroup className="container group_Maisvendido">
        <CardMaisVendidos />
      </CardGroup>

    </div>

  );
}