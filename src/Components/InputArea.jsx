import React, { useState } from "react";

function InputArea(props) {

    const [input, setInput] = useState("");

    function handleChange(e) {
        const inputValue = e.target.value;
        setInput(inputValue);
    }
    
    function handleSubmit(e) {
        e.preventDefault();
        props.handleSearch(input);
        setInput("");
    }
 
    return(
        <>
            <h1>{props.label}</h1>
            <form onSubmit={handleSubmit} className="search-box">
                <input className="search-bar" type="text" id="location" name="location" value={input} onChange={handleChange}></input>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default InputArea;