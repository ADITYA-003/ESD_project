import React, { useState } from "react";

export default function Sub(props){
    const [num1, setNum1]  = useState(0);
    const [num2, setNum2]  = useState(0);
    const [result, setRes] = useState(0);

    function subfunc(){
        setRes(num1-num2);
    }
    return(
        <div>
            <h1>Subtraction</h1>
            {/* <h1>Subtraction of {props.x} and {props.y} is {props.x - props.y}</h1> */}

            Num1:<input type ="text" onChange={e=>setNum1(parseInt(e.target.value))}/>
            Num2:<input type ="text" onChange={e=>setNum2(parseInt(e.target.value))}/><br></br>
            <br></br>
            <button type="button" class="btn btn-primary"onClick={subfunc}>Sub</button>
            <div>{result}</div>
        </div>
    )
}