import React, { useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles({
    iconButton: {
        backgroundColor: "#FFFFFF",
        borderRadius: "0 6px 6px 0"
    }
}); 


function InputArea(props) {

    const [input, setInput] = useState("");
    const classes = useStyles();

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
        <div className="inputArea">
            <h1>{props.label}</h1>
            <form onSubmit={handleSubmit} className="search-box">
                <input className="search-bar" type="text" id="location" name="location" value={input} onChange={handleChange}></input>
                <IconButton className={classes.iconButton} type="submit" aria-label="search">
                    <SearchIcon />
                </IconButton>
            </form>
        </div>
    )
}

export default InputArea;