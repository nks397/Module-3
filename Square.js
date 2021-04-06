import React from "react"

function Square(props) {
    return(
        <div>
            <div className="square" style={{backgroundColor: props.color}}></div>
        </div>
    )
}

export default Square