import React from 'react';
import ReactDOM from 'react-dom/client';
import './Pregunta.css'; 
const Pregunta = ({ label, value, onChange }) => {
  return (
    <label>
        {label}:
        <input type="text" value={value} onChange={(e) => onChange(label, e.target.value)} />
    </label>
  );
};

export default Pregunta;