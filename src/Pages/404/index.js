import React, { useEffect, useState, useMemo} from "react";
import "./style.css";
import Particles from "react-tsparticles";
import { Link } from "react-router-dom";
import planeta from "./assets/planeta.svg";
import astronauta from "./assets/astronauta.svg";

export default function NotFound() {

    let [time, setTime] = useState(15);
  
    useEffect(()=>{
     
      setTimeout(() => {
        setTime(--time)
        if(time === 0){
          window.location.href = 'http://localhost:3000/';
        }
      }, 1000)
  
    })
  
  
    const particlesInit = (main) => {
      console.log(main);
    };
  
    const particlesLoaded = (container) => {
      console.log(container);
    };
  
  
    //colocando o componente em memória para ele não renderizar sempre que acontecer uma mundaça que não seja nele
    const particulas = useMemo(()=> (<Particles
    id="tsparticles"
    init={particlesInit}
    loaded={particlesLoaded}
    options={{
      "particles": {
        "number": {
          "value": 160,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#ffffff"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 1,
          "random": true,
          "anim": {
            "enable": true,
            "speed": 1,
            "opacity_min": 0,
            "sync": false
          }
        },
        "size": {
          "value": 3,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 4,
            "size_min": 0.3,
            "sync": false
          }
        },
        "line_linked": {
          "enable": false,
          "distance": 150,
          "color": "#ffffff",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 0.17,
          "direction": "none",
          "random": true,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 600
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": false,
            "mode": "bubble"
          },
          "onclick": {
            "enable": false,
            "mode": "repulse"
          },
          "resize": false
        },
        "modes": {
          "grab": {
            "distance": 400,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 250,
            "size": 0,
            "duration": 2,
            "opacity": 0,
            "speed": 3
          },
          "repulse": {
            "distance": 400,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    }}
    />),[]);
  
  
    return (
      <>
       {particulas}
        <section className="permission_denied">
          <div id="particles-js"></div>
          <div className="denied__wrapper">
            <h1>404</h1>
            <h3>
              Está perido na <span>LOJA</span> Merc Tech? Hmm, parece que está pagina não existe.
            </h3>
            <img className="saturn" id="astronaut" src={astronauta} alt="Astronauta" />
            <img className="saturn" src={planeta} alt="Planeta vermelho, com estralas ao redor" />
            <Link to="/">
              <button className="denied__link">Go Home</button>
            </Link>
            <h3>Voltando para home em {time}...</h3>
          </div>
        </section>
      </>
    );
  }