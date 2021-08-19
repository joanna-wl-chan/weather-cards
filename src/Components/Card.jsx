import React from "react";

function Card(props) {
    return (
        <div className="card">
            <h2>{props.location}</h2>
        </div>
    )
}

export default Card;