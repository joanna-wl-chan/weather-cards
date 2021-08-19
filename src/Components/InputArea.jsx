import React, { useState } from "react";

function InputArea(props) {

    const [input, setInput] = useState("");

    function handleChange(e) {
        const inputValue = e.target.value;
        setInput(inputValue);
    }
    
    function handleSubmit(e) {
        props.handleAdd(input);
        setInput("");
        e.preventDefault();
    }
 
    return(
        <>
            <h1>{props.label}</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" id="location" name="location" value={input} onChange={handleChange}></input>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default InputArea;