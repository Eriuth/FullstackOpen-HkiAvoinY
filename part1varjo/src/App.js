//import { Hello } from "./components/Hello.js"; 
import { Header } from "./components/Header.js";
import { Content } from "./components/Content.js";

//harjoituksen vuoksi osa moduuleista fileinä sourcen alla ja osa tässä
//logiikka heikko, ns. yhteenlasku on fiksua laittaa tähän =)
//Mutta eihän aloittelijalta voi vielä olettaa kovaa tasoa??? 

const Total = ({lista}) => {
  return(
    <div>
      <p><b>Tehtävien lukumäärä yhteensä {lista}</b></p>
    </div>
  )
}


const App = () => {

  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
 

  return (
      <div>
 
      <Header otsikko={course}/>
      <Content nimi={part1} tehtavamaara={exercises1}/>
      <Content nimi={part2} tehtavamaara={exercises2}/>
      <Content nimi={part3} tehtavamaara={exercises3}/>
      <Total lista={exercises1+exercises2+exercises3}/>
       
      </div>
);
}


export default App;
