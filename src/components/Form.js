import React from 'react';
import ReactDOM from 'react-dom/client';
import  { useState } from 'react';
import './Form.css';
import Pregunta from "./Pregunta.js"; 

const Form = () => {
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState('');
  const [nacionalidad, setNacionalidad] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handlePreguntaChange = (pregunta, valor) => {
    switch (pregunta) {
      case 'Nombre':
        setNombre(valor);
        break;
      case 'Edad':
        setEdad(valor);
        break;
      case 'Nacionalidad':
        setNacionalidad(valor);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setMensaje(`Hola, ${nombre}!, tienes ${edad} y eres de ${nacionalidad}`);
  };

  return (
    <div>
      <h1>Formulario React</h1>
      <form onSubmit={handleSubmit}>
      <Pregunta label="Nombre" value={nombre} onChange={handlePreguntaChange} />
        <Pregunta label="Edad" value={edad} onChange={handlePreguntaChange} />
        <Pregunta label="Nacionalidad" value={nacionalidad} onChange={handlePreguntaChange} />
        <br />
        <button type="submit">Enviar</button>
      </form>
      <p>{mensaje}</p>
    </div>
  );
};

export default Form;