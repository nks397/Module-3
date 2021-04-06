import React from "react"

function DiceBox(props) {
    return(
        <div>
            <h2>I'm not a dice. I'm just a</h2>
            <div className="dice">
                 {`${props.num1}, ${props.num2}, ${props.num3}, ${props.num4}, ${props.num5}`}</div>
                
            </div>
        </div>
    )
}

export default DiceBox