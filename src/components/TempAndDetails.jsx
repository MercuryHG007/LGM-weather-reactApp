import React from 'react'
import {
    UilTemperature,
    UilTear,
    UilWind,
    UilSun,
    UilSunset,
    UilTopArrowToTop,
    UilArrowToBottom
  } from "@iconscout/react-unicons";

function TempAndDetails() {
    return (
        <div>
            <div
                className='
                    flex
                    items-center justify-center
                    py-6
                    text-xl text-cyan-300
                '
            >
                <p>Badal h re baba</p>
            </div>

            <div
                className='
                    flex flex-row
                    items-center justify-between
                    text-white
                    py-3
                '
            >
                <img
                    src='https://openweathermap.org/img/wn/01d@2x.png'
                    alt=''
                    className='w-20'
                />
                <p
                    className='
                        text-5xl
                    '   
                >
                    44°
                </p>
                <div
                    className='
                        flex flex-col
                        space-y-2
                    '
                >
                    <div
                        className='
                            flex
                            justify-center items-center
                            font-light
                            text-sm
                        '
                    >
                        <UilTemperature size={18} className='mr-1' />
                        Real feel: <span className='font-medium ml-1'>32°</span>
                    </div>
                    <div
                        className='
                            flex
                            justify-center items-center
                            font-light
                            text-sm
                        '
                    >
                        <UilTear size={18} className='mr-1' />
                        Humidity: <span className='font-medium ml-1'>50%</span>
                    </div>
                    <div
                        className='
                            flex
                            justify-center items-center
                            font-light
                            text-sm
                        '
                    >
                        <UilWind size={18} className='mr-1' />
                        Wind: <span className='font-medium ml-1'>10 kmph</span>
                    </div>
                </div>
            </div>

            <div
                className='
                    flex flex-row
                    items-center justify-center
                    space-x-2
                    text-white text-sm
                    py-3
                '
            >
                <UilSun />
                <p className='font-light'>
                    Rise: <span className='font-medium ml-1'>06:45AM</span> 
                </p>
                <p className='font-light'>|</p>

                <UilSunset />
                <p className='font-light'>
                    Set: <span className='font-medium ml-1'>06:45PM</span> 
                </p>
                <p className='font-light'>|</p>

                <UilTopArrowToTop />
                <p className='font-light'>
                    High: <span className='font-medium ml-1'>40°</span> 
                </p>
                <p className='font-light'>|</p>

                <UilArrowToBottom />
                <p className='font-light'>
                    Low: <span className='font-medium ml-1'>30°</span> 
                </p>

            </div>

        </div>
    )
}

export default TempAndDetails