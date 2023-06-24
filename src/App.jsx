import frases from './data/frases.json'
import "./App.css";
import Card from "./components/Card";
import { useState } from "react";
import ImageAnimation from './components/ImageRamdon'

function App() {
  const arr =[1, 2, 3, 4]

  const [index, setIndex] = useState(0)

  const [backRamdon, setBackRamdon] = useState(0)

  const backRaondom = () => {
     const nuevoContador = backRamdon + Math.floor(Math.random() *  arr.length);
      setBackRamdon(nuevoContador);
     if (nuevoContador < arr.length ) {
       setBackRamdon(backRamdon + 1);
     } else {
       setBackRamdon(1);
     }
   };
  


  const count = () => {
   const nuevoContador = index + Math.floor(Math.random() * frases.length) + 1;
    setIndex(nuevoContador);
    if (nuevoContador < frases.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };

  const handleEvent = () =>{
    count()
    backRaondom()
  }

  


  document.body.style.backgroundImage = `url(./src/images/fondo${backRamdon}.jpg)`; 

  return (
    <div>
      <Card
      frases={frases[index]}
      btn={handleEvent}
      />
      <ImageAnimation/>
    </div>
  );
}

export default App;
