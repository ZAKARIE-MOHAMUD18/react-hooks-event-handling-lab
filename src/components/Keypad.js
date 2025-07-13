// Code Keypad Component Here

import React from "react";

function Keypad (){

    function keypadHandler(e){
        console.log(e.target.value)
    }


    return (
        <div>
            <input 
            
            type="password"
            // value={}
            onChange={keypadHandler}
            placeholder="Enter Your Password"


            />
        </div>
    )
}

export default Keypad;