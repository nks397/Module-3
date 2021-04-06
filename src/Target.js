import React from "react"

function Targets(props){
    return(
        <div className="target-container">
            <div className="column">
            <span>
                <img src={props.image} alt="hit-list"/> 
                <div className="names">{props.name}</div>
            </span>
        </div>
        </div>
        
    )
}

export default Targets 