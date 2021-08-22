import React from "react";
import IconButton from '@material-ui/core/IconButton';
import ClearIcon from '@material-ui/icons/Clear';

// Mapped according to https://openweathermap.org/weather-conditions
const conditions = [
    {
        "group": 2,
        "condition": "thunderstorm",
        "url": "../assets/thunderstorm.gif"
    },
    {
        "group": 3,
        "condition": "rain",
        "url": "../assets/rain.gif"
    },
    {
        "group": 5,
        "condition": "rain",
        "url": "../assets/rain.gif"
    },
    {
        "group": 6,
        "condition": "snow",
        "url": "../assets/snow.gif"
    },
    {
        "group": 7,
        "condition": "atmosphere",
        "url": "../assets/atmosphere.gif"
    },
    {
        "group": 800,
        "condition": "clear",
        "url": "../assets/clear.gif"
    },
    {
        "group": 8,
        "condition": "clouds",
        "url": "../assets/clouds.gif"
    }
]

function getUrl(id) {
    const result = conditions.filter(condition => condition.group === id);
    console.log(id);
    console.log(result);
    return result[0].url;
}

// Need to get id. If 800, clear, otherwise refer to conditions array and only get first number
function getGroup(id) {
    return id === 800 ? id : Number(id.toString()[0]);
}

function Card(props) {
    const id = getGroup(props.weatherid);
    const url = getUrl(id);

    return (
        <div className="card" style={{ backgroundImage:`url(${url})` }}>
            <div className="card-delete">
                <IconButton onClick={() => props.handleDelete(props.id)}>
                    <ClearIcon />
                </IconButton>
            </div>
            <div className="card-location">
                {props.location}
            </div>
            <div className="card-description">
                {props.description}
            </div>
            <div className="card-temperature">
                {Math.floor(props.temp)}° C
            </div>
            <div className="card-min-max">
                Min: {Math.floor(props.temp_min)} Max: {Math.floor(props.temp_max)}
            </div>
        </div>
    )
}

export default Card;