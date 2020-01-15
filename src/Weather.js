import React, { useState, useEffect } from 'react';
import './weather.css';
import { Container, Row, Col } from 'react-bootstrap';
import Tips from './Tips';

function Weather() {
  const [data, setData] = useState({});
  const caracasCityId = 3646738;
  const apiKey = '884bca85e08368d78a24f4affffa40a0';

  async function fetchData() {
    const resp = await fetch(`https://api.openweathermap.org/data/2.5/weather?id=${caracasCityId}&units=metric&lang=es&appid=${apiKey}`)
    resp.json()
      .then((res) => {
        setData(res)
      })
  }

  useEffect(() => {
    fetchData();
  }, [])

  const getData = (data, attr, indicator) => {
    return data ? Math.round(data[attr]).toString() + indicator : 'No Disponible';
  };

  const firstLetterMay = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const temperature = data.main ? data.main.temp : null;

  return (
    <>
      <Container className="weather-style">
        <Row>
          <Col sm={12} className="text-center">
            <h2>{data ? data.name : 'No disponible'}</h2>
          </Col>

          <Col sm={12} className="text-center">
            <h1>{getData(data.main, 'temp', '°')}</h1>
          </Col>

          <Col sm={12} className="text-center">
            <p>{data.weather ? firstLetterMay(data.weather[0].description) : 'No disponible'}</p>
          </Col>

          <Col sm={12} className="text-center">
            <p>Sensación Térmica: {getData(data.main, 'feels_like', '°')}</p>
          </Col>

          <Col sm={12} className="text-center">
            <p>Mín: {getData(data.main, 'temp_min', '°')} / Máx: {getData(data.main, 'temp_max', '°')}</p>
          </Col>
        </Row>

        <Row >
          <Col sm={12} md={6}>
            <div className="bg2">
              <p>Viento: {getData(data.wind, 'speed', 'km/h')}</p>
              <p>Visibilidad: {data.visibility ? data.visibility / 1000 + 'km' : 'No Disponible'}</p>
              <p>Nubosidad: {getData(data.clouds, 'all', '%')}</p>
              <p>Humedad: {getData(data.main, 'humidity', '%')}</p>
            </div>
          </Col>

          <Col Col sm={12} md={6}>
            <div id="tips">
              <Tips temp={temperature} />
            </div>
          </Col>
        </Row>

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