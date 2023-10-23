
import './App.css';
import * as React from 'react';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import Button from './components/Button';

function App() {
  const nome = 'Maria'

  return (
    
    <div className="App">
      <HelloWorld/>
      <SayMyName nome="Anderson" />
      <HelloWorld/>
      <SayMyName nome={nome} />
      <Pessoa 
      nome= "Rodrigo" 
      idade= "28" 
      profissao="Programador" 
      foto="https://via.placeholder.com/150"/>
      <Frase/>
      <Button></Button>

    </div>
  );
}

export default App;
