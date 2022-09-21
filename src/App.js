import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import {urlWeather} from './endpoints'

function App() {
  React.useEffect(() => {
    axios.get(urlWeather + "/WeatherForecast")
    .then((response) => {
      
      console.log(response.data);
    })
  },[])
  return (
    <>
    </>
  );
}

export default App;
