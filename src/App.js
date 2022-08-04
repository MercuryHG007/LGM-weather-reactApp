import { useEffect, useState } from 'react';

import './App.css';

import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import TempAndDetails from './components/TempAndDetails';
import Forecast from './components/Forecast';

import getFormatedWeatherData from './services/weatherService';

import images from './components/images';

function App() {

  const [query, setQuery] = useState({q: "ghaziabad"});
  const [units, setUnits] = useState("metric");
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

  const formatBackground = () => {
    if(!weather){
      return images[0].src
    }

    let source = images.find((img) => {
      let ic = weather.icon;  

      if(ic === '02d' || ic === '03d' || ic === '04d')
        return img.id === '02d'
      else if(ic === '02n' || ic === '03n' || ic === '04n')
        return img.id === '02n'
      else if(ic === '11d' || ic === '11n')
        return img.id === '11d'
      else if(ic === '50d' || ic === '50n')
        return img.id === '50d'

      return img.id === ic
    })

    return source.src

    // if (!weather)
    //   return "from-cyan-700 to-blue-700"
    
    // const threshold = (units === 'metric')? 20 : 68;

    // console.log(weather)

    // if(weather.temp <= threshold)
    //   return "from-cyan-700 to-blue-700"
    // else
    //   return "from-yellow-700 to-orange-700"
  }

  const myStyle = {
    backgroundSize: "Cover", 
    backgroundImage: `url(${formatBackground()})`,
  }

  return (
    <div
      // className={`
      //   mx-auto 
      //   max-w-screen-md 
      //   mt-4 
      //   py-5 
      //   px-32 
      //   bg-gradient-to-br ${formatBackground()}
      //   h-fit 
      //   shadow-xl 
      //   shadow-gray-400
      //   `}
        className="
        mx-auto 
        max-w-screen-md 
        mt-4 
        py-5 
        px-32 
        h-fit 
        shadow-xl 
        shadow-gray-400
        "
      //style={`${formatBackground()}`}
      style={myStyle}
    >

    <TopButtons 
      setQuery={setQuery}
    />

    <Inputs 
      setQuery={setQuery} 
      units={units}
      setUnits={setUnits}
    />

    {weather && (
      <div>
        <TimeAndLocation 
          weather={weather}
        /> 

        <TempAndDetails 
          weather={weather}
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
