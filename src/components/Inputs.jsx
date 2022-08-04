import React, { useState } from 'react';
import { 
    UilSearch, 
    UilLocationPoint,
    UilCelsius,
    UilFahrenheit
} from '@iconscout/react-unicons';

function Inputs({ setQuery, units, setUnits }) {

    const [city, setCity] = useState('');

    const handleSearchClick = () => {
        if(city !== ''){
            setQuery({q: city})
        }
    }

    const handleLocationClick = () => {
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition((position) => {
                let lat = position.coords.latitude;
                let lon = position.coords.longitude;

                setQuery({
                    lat,
                    lon,
                })
            })
        }
    }

    const handleUnitChange = (e) => {
        const selectedUnit = e.currentTarget.name;
        if(units !== selectedUnit){
            setUnits(selectedUnit);
        }
    }

    return (
        <div
            className='
                flex flex-row
                justify-center
                my-6
            '
        >
            <div
                className='
                    flex flex-row
                    w-3/4
                    items-center justify-center
                    space-x-4
                '
            >
                <input 
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    type="text"
                    className='
                        text-xl font-light
                        p-2
                        w-full
                        shadow-xl
                        focus:outline-none
                        capitalize
                        placeholder:lowercase
                    '
                    placeholder='Search for city....'
                />
                <button
                    onClick={handleSearchClick}
                >
                    <UilSearch 
                        size={25}
                        className="
                            text-white
                            cursor-pointer
                            transition ease-out hover:scale-125
                        "
                    />
                </button>

                <button
                    onClick={handleLocationClick}
                >
                    <UilLocationPoint 
                        size={25}
                        className="
                            text-white
                            cursor-pointer
                            transition ease-out hover:scale-125
                        "
                    />
                </button>
            </div>

            <div
                className='
                    flex flex-row w-1/4 
                    items-center justify-center
                '
            >
                <button 
                    name='metric'
                    className='
                        text-xl text-white
                        font-light
                        transition ease-out hover:scale-125
                    '
                    onClick={handleUnitChange}
                >
                    <UilCelsius />
                </button>
                <p
                    className='
                        text-xl text-white
                        mx-2
                    '
                >
                    |
                </p>
                <button
                    name='imperial'
                    className='
                        text-xl text-white
                        font-light
                        transition ease-out hover:scale-125
                    '
                    onClick={handleUnitChange}
                >
                    <UilFahrenheit />
                </button>


            </div>
        </div>
    )
}

export default Inputs