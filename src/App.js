import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { InputGroup, Button } from 'react-bootstrap';
import Weather from './Weather';

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header"> 
          <Weather/>
        </header> 
       
      </div>
    </>  
    );
}

export default App;


  // {
  //   "id": 3646738,
  //   "name": "Caracas",
  //   "country": "VE",
  //   "coord": {
  //     "lon": -66.879189,
  //     "lat": 10.48801
  //   }