import './style.css';
import {BsGithub, BsLinkedin} from "react-icons/bs";
import {Card} from "react-bootstrap";


const nossaEquipe = [
  {
    id: "1",
    image: "https://avatars.githubusercontent.com/u/89156544?v=4" ,
    name: "Dayana Miranda",
    linkedin: "https://www.linkedin.com/in/dayana-m-092a32224/",
    github:"https://github.com/DayanaMiranda"    
   },
  {
    id: "2",
    image: "https://avatars.githubusercontent.com/u/86542760?v=4" ,
    name: "Gabriel Gomes",
    linkedin: "https://www.linkedin.com/in/gabrielgpena/",
    github:"https://github.com/GabrielGPena793"   
  },
  {
  id: "3",
    image: "https://avatars.githubusercontent.com/u/89006676?v=4" ,
    name: "Kantuta Molina",
    linkedin: "https://www.linkedin.com/in/kantuta/",
    github:"https://github.com/KantutaMolina"   
  },
  {
    id: "4",
    image: "https://avatars.githubusercontent.com/u/71605088?v=4" ,
    name: "Karina Osuka",
    linkedin: "https://www.linkedin.com/in/karinaosuka/",
    github:"https://github.com/kari-osk"   
  },
  {
    id: "5",
    image: "https://avatars.githubusercontent.com/u/89156014?s=400&u=d24de5e4728dae23c132e055b81566715b1b492d&v=4" ,
    name: "Luana Borges",
    linkedin: "",
    github:""   
  },
  {
    id: "6",
    image: "https://avatars.githubusercontent.com/u/82847204?v=4" ,
    name: "Paulo Rossi",
    linkedin: "https://www.linkedin.com/in/paulo-rossi-95296a4b/",
    github:"https://github.com/DubonP"   
  }
];



export default function SobreNos() {
  return (

    <main className= "container container-main" >
      <div className="container-sobre-nos-title">
      <h1>Conheça nosso time</h1>
      <p>Com profissionais amplamente competentes e buscando cada vez mais conhecimentos, a nossa equipe está preparada para atendê-los.</p>
      </div>
      
      <ul className="list-equipe row row-cols-3">
        {nossaEquipe.map(({ image, name, linkedin, github }, index) => (
          <Card className= "cards col" key={index} style={{ width: '18rem' }}>
            <Card.Img class="imgfoto"  src= {image} />
            <Card.Body className="info">
            <hr/>
            <Card.Title id = "nome">{name}</Card.Title>
            <Card.Subtitle id = "cargo" className="mb-2">Fullstack Developer</Card.Subtitle>
            <Card.Link className="link-to" href= {github} target="_blank" id='mygit' ><BsGithub className="Icon-color" /></Card.Link>
            <Card.Link className="link-to" href= {linkedin} target="_blank" id='mylinkedin' ><BsLinkedin className="Icon-color" /></Card.Link>
            </Card.Body>
          </Card>
        ))}
      </ul>    

     </main>
     

   

  );
}