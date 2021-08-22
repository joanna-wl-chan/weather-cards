import React from "react";

function Card(props) {
    return (
        <div className="card">
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