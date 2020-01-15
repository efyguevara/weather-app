import React, { useState, useEffect } from 'react';
import './weather.css';
import { Container, Row, Col } from 'react-bootstrap';


function Weather() {
  const [data, setData] = useState({});
  const caracasCityId = 3646738;
  const apiKey = '884bca85e08368d78a24f4affffa40a0';

  async function fetchData() {
    const resp = await fetch(`https://api.openweathermap.org/data/2.5/weather?id=${caracasCityId}&units=metric&lang=es&appid=${apiKey}`)
    resp.json()
      .then((res) => {
        backgroundTemp(res.main.temp);
        setData(res)
      })
  }

  useEffect(() => {
    fetchData();
  }, [])

  const getData = (data, attr, indicator) => {
    return data ? Math.round(data[attr]).toString() + indicator : 'No Disponible';
  };

  function firstLetterMay(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function backgroundTemp(temp) {
    const bodyBg = document.getElementById('boddy');

    if (temp <= 10) {
      bodyBg.classList.add("cold");
    }
    if (temp >= 11 && temp <= 20) {
      bodyBg.classList.add("normal");
    }
    if (temp >= 21 && temp <= 30) {
      bodyBg.classList.add("hot");
    }
  }

  return (
    <>
      <Container className="weather-style">
        <Row>
          <Col>
            <h1>{data ? data.name : 'No disponible'}</h1>
          </Col>
        </Row>

        <Row>
          <Col>
            <h1>{getData(data.main, 'temp', '°')}</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>{data.weather ? firstLetterMay(data.weather[0].description) : 'No disponible'}</p>
          </Col>
        </Row>

        <Row>
          <Col>
            <p>Sensación Térmica: {getData(data.main, 'feels_like', '°')}</p>
          </Col>
        </Row>

        <Row>
          <Col>
            <p>Mín: {getData(data.main, 'temp_min', '°')} / Máx: {getData(data.main, 'temp_max', '°')}</p>
          </Col>
        </Row>

        <Row>
          <Col>
            <p>Viento: {getData(data.wind, 'speed', 'km/h')}</p>
          </Col>

          <Col sm>
            <p>Visibilidad: {data.visibility ? data.visibility / 1000 + 'km' : 'No Disponible'}</p>
          </Col>

          <Col sm>
            <p>Nubosidad: {getData(data.clouds, 'all', '%')}</p>
          </Col>

          <Col sm>
            <p>Humedad: {getData(data.main, 'humidity', '%')}</p>
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