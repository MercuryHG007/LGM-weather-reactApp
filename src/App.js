import { useEffect, useState } from 'react';

import './App.css';

import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import TempAndDetails from './components/TempAndDetails';
import Forecast from './components/Forecast';

import getFormatedWeatherData from './services/weatherService';

function App() {

  const [query, setQuery] = useState({q: "ghaziabad"});
  const [units, setunits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {

    const fetchWeather = async () => {
      await getFormatedWeatherData({...query, units})
      .then((data) => {
        setWeather(data);
      });
    };
    fetchWeather(); 

  }, [query,units]);

  return (
    <div
      className='
        mx-auto 
        max-w-screen-md 
        mt-4 
        py-5 
        px-32 
        bg-gradient-to-br from-cyan-700 to-blue-700 
        h-fit 
        shadow-xl 
        shadow-gray-400
        '
    >

    <TopButtons />
    <Inputs />

    {weather && (
      <div>
        <TimeAndLocation 
          weather={weather}
        /> 
        <TempAndDetails 
          weather ={weather}
        />

        <Forecast 
          title="Hourly Forecast"
          items = {weather.hourly} 

        />
        <Forecast 
          title="Daily Forecast"
          items = {weather.daily} 

        />
      </div>
    )}


    </div>
  ); 
}

export default App;
