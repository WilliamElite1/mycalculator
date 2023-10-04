import React, { useState } from 'react';
import './App.css';

function CalcuButton({ label, onClick, buttonClassName = "CalcuButton" }) {
  return (
    <button className={buttonClassName} onClick={onClick}>
      {label}
    </button>
  );
}

function CalcuDisplay({ Display }) {
  return (
    <div className="CalcuDisplay">
      {Display}
    </div>
  );
}



export default function App() {
  const [Display, setDisp] = useState(0);
  const [num1, setNum1] = useState(null);
  const [oper, setOper] = useState(null);
  const [num2, setNum2] = useState(null);

  const numberClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    let num = value;
    if (oper === null) {
      if (num1 !== null) {
        num = num1 + num;
      }
      setNum1(num);
      setDisp(num);
    } else {
      if (num2 !== null) {
        num = num2 + num;
      }
      setNum2(num);
      setDisp(num);
    }
  }

  const operatorClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    setOper(value);
    setDisp(value);
  }

  const equalClickHandler = (e) => {
    e.preventDefault();

    switch (oper) {
      case "+":
        setDisp(parseInt(num1) + parseInt(num2));
        break;
      case "-":
        setDisp(parseInt(num1) - parseInt(num2));
        break;
      case "*":
        setDisp(parseInt(num1) * parseInt(num2));
        break;
      case "/":
        if (parseInt(num2) === 0) {
          setDisp("ERROR: Division by zero");
        } else {
          setDisp(parseInt(num1) / parseInt(num2));
        }
        break;
      default:
        setDisp("ERROR");
        break;
    }
  }

  const clearClickHandler = (e) => {
    e.preventDefault();

    setDisp(0);
    setNum1(null);
    setOper(null);
    setNum2(null);
  }
  const nameClickHandler = (e) => {
    e.preventDefault();
    setDisp("Christian Anthony S. Quiambao");
  }
  

  return (
    <div class="moving-border">
    <div className="App">
      <div className="CalcContainer">
          <h1>Calculator of Christian Anthony S. Quiambao - IT3A</h1>
          <CalcuDisplay Display={Display} />
          <div className="ButtonContainer">
            <CalcuButton label={7} onClick={numberClickHandler} buttonClassName={"CalcuButtonNum"} />
            <CalcuButton label={8} onClick={numberClickHandler} buttonClassName={"CalcuButtonNum"} />
            <CalcuButton label={9} onClick={numberClickHandler} buttonClassName={"CalcuButtonNum"} />
            <CalcuButton label={"+"} onClick={operatorClickHandler} buttonClassName={"OperatorButton"} />
            <CalcuButton label={4} onClick={numberClickHandler} buttonClassName={"CalcuButtonNum"} />
            <CalcuButton label={5} onClick={numberClickHandler} buttonClassName={"CalcuButtonNum"} />
            <CalcuButton label={6} onClick={numberClickHandler} buttonClassName={"CalcuButtonNum"} />
            <CalcuButton label={"-"} onClick={operatorClickHandler} buttonClassName={"OperatorButton"} />
            <CalcuButton label={1} onClick={numberClickHandler} buttonClassName={"CalcuButtonNum"} />
            <CalcuButton label={2} onClick={numberClickHandler} buttonClassName={"CalcuButtonNum"} />
            <CalcuButton label={3} onClick={numberClickHandler} buttonClassName={"CalcuButtonNum"} />
            <CalcuButton label={"*"} onClick={operatorClickHandler} buttonClassName={"OperatorButton"}/>
            <CalcuButton label={"C"} onClick={clearClickHandler} buttonClassName={"OperatorButton"} />
            <CalcuButton label={"0"} onClick={numberClickHandler} buttonClassName={"CalcuButtonNum"}/>
            <CalcuButton label={"="} onClick={equalClickHandler} buttonClassName={"OperatorButton"}/>
            <CalcuButton label={"/"} onClick={operatorClickHandler} buttonClassName={"OperatorButton"}/>
          </div>
        <div className="NameButton">
          <CalcuButton label={"Quiambao"} onClick={nameClickHandler} buttonClassName={"CalcuButtonName"} />
        </div>
      </div>
    </div>
    </div>
  );
}
