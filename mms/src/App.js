
import './App.css';
import * as React from 'react';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import Button from './components/Button';
import List from './components/List';
function App() {
  const objeto = { marca: 'Nome da Marca', ano_lancamento: 2022 };
  return (
    
    <div className="App">
      <Frase></Frase>
      <HelloWorld></HelloWorld>
      <SayMyName nome="Maria"></SayMyName>
      <SayMyName nome="Joaquim"></SayMyName>
      <SayMyName nome="Cristina"></SayMyName>
      <Pessoa nome="Maria" idade="30" profissao="Desenvolvedora" foto="https://picsum.photos/200/300"></Pessoa>
      <Pessoa nome="Joaquim" idade="25" profissao="Desenvolvedor" foto="https://picsum.photos/200/300"></Pessoa>
      <Pessoa nome="Cristina" idade="25" profissao="Desenvolvedora" foto="https://picsum.photos/200/300"></Pessoa>
      <Button></Button>
      
      <List Carro> marca</List>
    </div>
  );
}

export default App;
