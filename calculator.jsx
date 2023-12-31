import React, { useState } from "react";
import Container from '@mui/material/Container';
import './Calculator.css'

export default function Calculator() {
    const [num, setNum] = useState(0);
    const [operator, setOperator] = useState(0);
    const [oldNum, setOldNum] = useState(0);

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
    function porcentagem() {
        setNum(num / 100)
    }
    function changeSign() {
        if(num>0) {
            setNum(-num)
        }else {
            setNum(Math.abs(num))
        }
    }
    function operatorHandler(e) {
        var operatorInput = e.target.value;
        setOperator(operatorInput);
        setOldNum(num);
        setNum(0);
    }
    function calculate() {
        if(operator ==="/") {
            setNum(oldNum / num)
        }else if (operator === "+") {
            setNum(parseFloat(oldNum) + parseFloat(num))
        }else if (operator === "X") {
            setNum(oldNum * num)
        } else if (operator === "-") {
            setNum(oldNum - num)
        }if(num > 9) {
            setNum(12)
        }
    }
    /* limitar os numeros do resultado para ser ate 9
    e aprender figma para deixa mais bonito*/

    return(
        <div className="cole">
        <Container maxWidth="xs" className="wrapper">
        <div className="container">
            <h1 className="result">{num}</h1 >
            <button onClick={clear}>AC</button>
            <button onClick={changeSign}>+/-</button>
            <button onClick={porcentagem}>%</button>
            <button className="orange" onClick={operatorHandler} value={"/"}>/</button>
            <button className="gray"onClick={inputNum} value={7}>7</button>
            <button className="gray" onClick={inputNum} value={8}>8</button>
            <button className="gray" onClick={inputNum} value={9}>9</button>
            <button className="orange" onClick={operatorHandler} value={"X"}>X</button>
            <button className="gray" onClick={inputNum} value={4}>4</button>
            <button className="gray"onClick={inputNum} value={5}>5</button>
            <button className="gray"onClick={inputNum} value={6}>6</button>
            <button className="orange" value={"-"} onClick={operatorHandler}>-</button>
            <button className="gray" onClick={inputNum} value={1}>1</button>
            <button className="gray" onClick={inputNum} value={2}>2</button>
            <button
            className="gray"onClick={inputNum} value ={3}>3</button>
            <button className="orange" onClick={operatorHandler} value={"+"}>+</button>
            <button className="gray" onClick={inputNum} value={0}>0</button>
            <button className="gray" value={"."} onClick={inputNum}>.</button>
            <button className="useless">.</button>
            <button className="" onClick={calculate}>=</button>
            
            
        </div>
        </Container>
    <h1 className="cole">Todos os direitos reservados
                 por Flayrys A.P ©</h1>
        </div>
    );
}
