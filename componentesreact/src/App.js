import ButtonComponent from './components/button/button';
import Button from '@mui/material/Button';

import './App.css';

function App() {

  function handleClickPadrao() {
    console.log("Botão Padrão Apertado")
  }
  function handleClickMaterial() {
    console.log("Botão Material Apertado")
  }

  return (
    <div className='container'>
      <div className='botao-container'>
        <ButtonComponent color="white" onClick={handleClickPadrao}>Botão Padrão</ButtonComponent>
        <ButtonComponent color="black" onClick={handleClickPadrao}>Botão Padrão</ButtonComponent>
      </div>
      <div className='botao-container'>
        <Button variant="contained" onClick={handleClickMaterial}>Botão Material</Button>
        <Button variant="outlined" onClick={handleClickMaterial}>Botão Material</Button>
      </div>
    </div>
  );
}

export default App;
