import React, { useState, useRef, useEffect } from "react";
import { Button } from "react-bootstrap";
import {BsAlarm} from 'react-icons/bs';
import "./style.css";

const Countdown = () => {
  const [timerDays, setTimerDays] = useState('00');
  const [timerHours, setTimerHours] = useState('00');
  const [timerMinutes, setTimerMinutes] = useState('00');
  const [timerSeconds, setTimerSeconds] = useState('00');

  let interval = useRef();

  const startTimer = () => {
    const countDownDate = new Date("April 8, 2022 23:59:59").getTime();

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

  return (
    <section className="timer-container">
      <section className="timer">
        <div>
          <h2>Promoção <BsAlarm/></h2>
        </div>
        <div className="contador">
          <section>
            <p>{timerDays}</p>
            <p><small>Dias</small></p>
          </section>
          <span>:</span>
          <section>
            <p>{timerHours}</p>
            <p><small>Horas</small></p>
          </section>
          <span>:</span>
          <section>
            <p>{timerMinutes}</p>
            <p><small>Minutos</small></p>
          </section>
          <span>:</span>
          <section>
            <p>{timerSeconds}</p>
            <p><small>Segundos</small></p>
          </section>
        </div>
        <div className="d-grid gap-2">
        <Button className="button" variant="outline-dark" size="lg">Compre agora</Button>
        </div>
      </section>
      <div className="img_card"></div>
    </section>
  );
};

export default Countdown;

