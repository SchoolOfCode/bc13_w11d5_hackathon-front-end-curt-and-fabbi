import React from 'react'
import { useState } from 'react';

const Input = () => {

    const [text, setText] = useState("")

    function handleChange(e) {
        setText(e.target.value)
    }

    function handleClick() {
        // on click send current text, and a default completed state of false to the API.
    }

    return (
        <div>
            <input type="text" value={text} onChange={handleChange}></input>
            <button onClick={handleClick}>Submit</button>
        </div>
    )
}

export default Input;