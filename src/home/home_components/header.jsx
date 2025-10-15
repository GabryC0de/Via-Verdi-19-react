import '../home_styles/header.css';
import { Link } from "react-router";
import React, { useEffect, useState } from 'react';


function Header() {

    const [weatherData, setWeatherData] = useState({
        temperature: "",
        iconCode: ""
    });

    useEffect(() => {
        const fetchWeatherData = async () => {
            try {
                const response = await fetch('http://localhost:3000/weather-request');
                const data = await response.json(); // ✅ Estrai i dati correttamente
                setWeatherData({
                    ...weatherData,       // Copia tutte le proprietà esistenti
                    temperature: data.weather.details.air_temperature,
                    iconCode: data.forecast.summary.symbol_code
                });
            } catch (err) {
                console.error('Error fetching weather data: ', err);
            }
        };

        fetchWeatherData(); // Chiamata iniziale
        const intervalID = setInterval(fetchWeatherData, 1000 * 60 * 1); // Polling ogni 5 minuti (esempio)

        return () => clearInterval(intervalID);
    }, []); // ✅ Esegui solo al mount

    return (
        <header>
            <div id="header-content">
                <Link to="/">
                    <div className="logo-container">
                        <img className={"logo"} src={"/pictures/logo.png"} alt="logo"></img>
                    </div>
                </Link>
                <div id="weather-container">
                    <div id="weather-icon-container">
                        <img id="weather-icon" src={`/weatherIcons/${weatherData.iconCode}.png`} alt="icon"></img>
                    </div>
                    <div id="temp-container">
                        <h3 id="temp-text">
                            {weatherData ? `${weatherData.temperature}°C` : "Load..."}
                        </h3>
                    </div>
                </div>

                <div className="info-wrapper">
                    <div className="info-icons">
                        <a href="#contatti" style={{ scrollBehavior: "smooth" }}>
                            <h3>
                                Contatti
                            </h3>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;