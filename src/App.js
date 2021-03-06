import React, { useState } from 'react';
import './App.css';
import Input from './components/Input';
import Button from './components/Button';
import Select from './components/Select';

function App() {

  const [CP, setCP] = useState({})
  const [City, setCity] = useState({})
  const [Settlements, setSettlements] = useState([])
  
  const initialURL = 'http://otb.mx/api/cpostal';

  const fetchCP = async () => {
    let value = document.querySelector('input').value;

    await fetch(`${initialURL}/${value}`)
      .then(response => response.json())
      .then(data => {
        setCP(data.data.postal_code);
        setCity(data.data.city);
        setSettlements(data.data.settlements);
        console.log(CP);
        console.log(City);
        console.log(Settlements);
      })
      .catch(error => console.log(error))
  };

  return (
    <div className='App'>
      <div className="container">
        <div>
          <p>Busca uno de los siguientes códigos postales: 20000, 20016 o 20018</p>
          <Input type="text" />
          <Button value="Buscar" onClick={() => fetchCP()}  />
        </div>
        <h4>Código postal: {CP.postal_code}</h4>
        <h5>Ciudades: {City.city_name}</h5>
        <label><small>Asentamientos:</small></label>
        <Select options={Settlements} />
      </div>
    </div>
  );
}

export default App;
