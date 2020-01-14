import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Weather from './Weather';

function App() {
  return (
    <>
      <div className="App">
        <header className="">
          <img src="https://dojiw2m9tvv09.cloudfront.net/4/8/img-logos-logo-bsale-naranjo-mobile.png?1116"
            srcset="https://dojiw2m9tvv09.cloudfront.net/4/8/img-logos-logo-bsale-naranjo.png?1116" alt="Logo de Bsale"></img>
        </header>
        <Weather />
      </div>
    </>
  );
}

export default App;