import React from "react";

function Card(props) {
    return (
        <div className="card">
            <h2>{props.location}</h2>
            <h2>Temp: {props.temp}</h2>
            <h2>Min: {props.temp_min}</h2>
            <h2>Max: {props.temp_max}</h2>
            <h2>Description: {props.description}</h2>

        </div>
    )
}

export default Card;