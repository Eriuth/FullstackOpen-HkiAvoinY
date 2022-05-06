/* Kuuluu kurssiin https://fullstackopen.com/osa1/reactin_alkeet
 Kopioi annetut ensin (ohje)*/
/*Kolme uutta komponenttia yhden sijaan: Header, Content, Total */

/* kysyttyä tutulta vinkkejä, opittua:
kun käsketään renderöidä, vaikka kone renderöi on yleistä sanoa että koodaaja renderöi... (miksi?)
return siis "renderöi" -> returnaa palan templatea (selkeämpää kieltä minusta) -> on yleisestä siis sanoa tässä renderöi, ei returnaa (vaikka renderöinti on sivun latausvaihe???!!!! luulin, että kirjoitan koodia, en renderöi... kone hoitaa.... jargon?)
Paras suomennos (valittamalla paljon) saatu -> eli käskytätä mitä renderöidään -> renderöit
<br></br> sijaan voi tägäillä kuin parttiakin tai muistele image
sano "muuttuja" älä keksi "jotain" määritelmiä
const Header = (props) => jne luetaan Headersiin sijoitetaan funktio ominaisuuksilla props/ joka ottaa propsit sisään ja sylkee (tässä" stringiä ulos*/

//saatu vinkki -> toinen tapa kirjoittaa eli "ekvivalentti nimetty funktio"
//function Header(props) {}

//vinkattu, seuraavaa kutsutaan lambda-funktioksi
const Header = (props) => {
  return(
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part =(props) => {
  return(<>{props.part} {props.exercises}<br/></>)
}

const Content = (props) => {
  return(
    <div>
      <Part part={props.part1} exercises={props.exercises1} />
      <Part part={props.part2} exercises={props.exercises2} />
      <Part part={props.part3} exercises={props.exercises3} />
    </div>
  )
}

const Total = (props) => {
  return(
    <div>
      <p> Number of exercises {props.exercises1+props.exercises2+props.exercises3}</p>
    </div>
  )
}



const App = () => {
  const course = "Half stack application development"
  const part1 = "Fundamentals of React"
  const exercises1 = 10
  const part2 = "Using props to pass data"
  const exercises2 = 7
  const part3 = "State of a component"
  const exercises3 = 14

  return (

   <div>
     <Header course={course}/>
     
    <Content part1={part1} exercises1={exercises1} 
    part2={part2} exercises2={exercises2} 
    part3={part3} exercises3={exercises3} />

    <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />   
      
      </div>
  )
}

export default App;
