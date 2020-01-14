import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';


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
        <Row>
          <Col>
            <h1>{data.name}</h1>
          </Col>
          
          <Col>
            <h1>{ data.main ? Math.round(data.main.temp) : null }°</h1>
            <p>{ data.weather ? data.weather[0].description : null }</p>

          </Col>
        </Row>
        <div>
          <p>Sensación Térmica: { data.main ? Math.round(data.main.feels_like) : null }°</p>
          <Row>
            <Col>
              <p>Mín: { data.main ? Math.round(data.main.temp_min) : null }°</p>
            </Col>
            <Col>
              <p>Máx: { data.main ? Math.round(data.main.temp_max) : null }°</p>
            </Col>
          </Row>
          <p>Velocidad el viento: { data.wind ? data.wind.speed : null }km/h</p>
          {/* <p>Visibilidad: { data.visibility ? data.visibility : null }km</p> */}
          <p>Nubosidad: { data.clouds ? data.clouds.all : null }%</p>

          <p>Humedad: { data.main ? data.main.humidity : null }%</p>
        </div>
      </Container>
    </>
  );
}

export default Weather;

  // *****Información de la ciudad*****
  // {
  //   "id": 3646738,
  //   "name": "Caracas",
  //   "country": "VE",
  //   "coord": {
  //     "lon": -66.879189,
  //     "lat": 10.48801
  //   }