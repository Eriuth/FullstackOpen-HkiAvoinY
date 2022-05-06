const Hello = (props) => {
  return(
    <div>
      <p>Heippa {props.name}, you are {props.age} years old.</p>
    </div>
  )
}


const App = () => {
  const nimi= "Petra"
  const ika = 16
  return(
  <>  <h1>Greetigs</h1>
  <Hello name="Testitär" age={2022-1987}/>
  <Hello name = {nimi} age={ika}/> 
   </> 
)}

export default App;
