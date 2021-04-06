import React from "react"


function Pet(props) {
    return (
        <div>
            <p> Name: {props.name}</p>
            <p> Breed: {props.breed}</p>
        </div>
    )
}

export default Pet