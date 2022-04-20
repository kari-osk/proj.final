import React, { useState, useRef, useEffect, useContext } from "react";
import { Button } from "react-bootstrap";
import {BsAlarm} from 'react-icons/bs';
import "./style.css";
import { getAllProducts } from "../../../Service/Api";
import { CartContext } from "../../Cart/context/cart";
import { Link } from "react-router-dom";

const Countdown = () => {

  const { productsCart, addProducToCart, removeProductToCart } = useContext(CartContext);

  const [timerDays, setTimerDays] = useState('00');
  const [timerHours, setTimerHours] = useState('00');
  const [timerMinutes, setTimerMinutes] = useState('00');
  const [timerSeconds, setTimerSeconds] = useState('00');

  let interval = useRef();

  const startTimer = () => {
    const countDownDate = new Date("April 27, 2022 23:59:59").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
      const minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
      const seconds = Math.floor(distance % (1000 * 60) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
        setTimerDays('00');
        setTimerHours('00');
        setTimerMinutes('00');
        setTimerSeconds('00');
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }

    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => clearInterval(interval.current);
  });

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts().then(data => setProducts(data.content));
  }, []);

  return (
    <div className="container Box_promocao">
    {products.slice(12, 13).map((product) => (
    <section className="timer-container">
      <div className="timer-box">
      <section className="timer">
        <div>
          <h2>Promoção <BsAlarm/></h2>
          <h2>{product.title}</h2>
        </div>
        <div className="contador">
          <section>
            <p>{timerDays}</p>
            <p><small>Dias</small></p>
          </section>
          <span className="span_timer">:</span>
          <section>
            <p>{timerHours}</p>
            <p><small>Horas</small></p>
          </section>
          <span className="span_timer">:</span>
          <section>
            <p>{timerMinutes}</p>
            <p><small>Minutos</small></p>
          </section>
          <span className="span_timer">:</span>
          <section>
            <p>{timerSeconds}</p>
            <p><small>Segundos</small></p>
          </section>
        </div>
        <Link to={`/details/${product.id}`}  className="d-grid gap-2">
          <Button className="button_Timer" variant="outline-dark" size="lg">Compre agora por R$ {product.price}</Button>
        </Link>
      </section>
      </div>
      <div className="img_card">
        <img className="imagem_count" src={product.image}></img>
      </div>
    </section>
    ))}
    </div>
  );
};

export default Countdown;

