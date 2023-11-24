import React, { useState } from "react";
import Container from '@mui/material/Container';
import './Calculator.css'

export default function Calculator() {
    const [num, setNum] = useState(0);
    function inputNum(e) {
        var input = e.target.value
        if (num === 0) {
            setNum(input) 
        }else {
            setNum(num + input) }
    }
    function clear(){
        setNum(0)
    }
    return(
        <Container maxWidth="xs" className="wrapper">
        <div className="container">
            <h1 className="result">{num}</h1 >
            <button onClick={clear}>AC</button>
            <button>+/-</button>
            <button>%</button>
            <button className="orange">/</button>
            <button className="gray"onClick={inputNum} value={7}>7</button>
            <button className="gray" onClick={inputNum} value={8}>8</button>
            <button className="gray" onClick={inputNum} value={9}>9</button>
            <button className="orange">X</button>
            <button className="gray" onClick={inputNum} value={4}>4</button>
            <button className="gray"onClick={inputNum} value={5}>5</button>
            <button className="gray"onClick={inputNum} value={6}>6</button>
            <button className="orange">-</button>
            <button className="gray"onClick={inputNum} value={1}>1</button>
            <button className="gray"onClick={inputNum} value={2}>2</button>
            <button
            className="gray"onClick={inputNum} value ={3}>3</button>
            <button className="orange">+</button>
            <button className="gray"onClick={inputNum} value={0}>0</button>
            <button className="gray">,</button>
            <button className="useless">.</button>
            <button className="">=</button>
            
            
        </div>
        </Container>
    )
}