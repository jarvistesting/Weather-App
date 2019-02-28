import React from 'react';

const Weather = props => (
    <div className="weather_info">
        {
            props.city && props.country && <p className="weather__key">Loation:
                <span className="weather__value"> {props.city}, {props.country}</span> 
            </p>
        }
        {
            props.temprature && <p className="weather__key">Temprature:
                <span className="weather__value"> {props.temprature}</span> 
            </p>
        }
        {
            props.humidity && <p className="weather__key">Humidity:
                <span className="weather__value"> {props.humidity}</span> 
            </p>
        }
        {
            props.description && <p className="weather__key">Condition:
                <span className="weather__value"> {props.description}</span> 
            </p>
        }
        {
            props.error && <p className="weather__error">Error: {props.error}</p>
        }
    </div>
);

export default Weather;