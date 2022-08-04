import React from "react";

function TopButtons({ setQuery }) {
    const cities = [
        {
            id: 1,
            title: "Delhi",
        },
        {
            id: 2,
            title: "Mumbai",
        },
        {
            id: 3,
            title: "Hyderabad",
        },
        {
            id: 4,
            title: "Ghaziabad",
        },
        {
            id: 5,
            title: "Srinagar",
        },
    ];

    return (
        <div 
            className="
                flex 
                items-center 
                justify-around 
                my-6"
        >
            {cities.map((city) => (
                <button
                    key={city.id}
                    className="
                        text-white 
                        text-lg 
                        font-medium
                        transition ease-out hover:scale-95
                    "
                    onClick={() => setQuery({q: city.title})}
                >
                    {city.title}
                </button>
            ))}
        </div>
    );
}

export default TopButtons;