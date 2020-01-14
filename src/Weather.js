import React, { useState, useEffect } from 'react';
import { InputGroup, Button, Container } from 'react-bootstrap';


function Weather() {
  const [ data, setData ] = useState({});
  const caracasCityId = 3646738;
  const apiKey = '884bca85e08368d78a24f4affffa40a0';
  
    async function fetchData() {
      const resp = await fetch(`http://api.openweathermap.org/data/2.5/weather?id=${caracasCityId}&units=metric&appid=${apiKey}`)       
        resp.json()
        .then((res) => {
          console.log(res)
          setData(res)
        })
    }
    useEffect(() => {
    fetchData();
}, [])
 

  return (
    <>
      <Container>
        <div>
          <h2>{data.name}</h2>
          <h2>{ data.main ? data.main.temp : null }°</h2>
        </div>
        <div>
          <p>Sensación Térmica: { data.main ? data.main.feels_like : null }°</p>
          <p>Mínima hoy: { data.main ? data.main.temp_min : null }°</p>
          <p>Máxima hoy: { data.main ? data.main.temp_max : null }°</p>
          <p>Humedad: { data.main ? data.main.humidity : null }%</p>
        </div>
      </Container>
    </>
  );
}

export default Weather;
