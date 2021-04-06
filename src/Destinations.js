import React from "react"

function Destinations(props) {
const vacationCards = {
    paddingTop: "50px",
    paddingBottom: "50px",
    margin: "50px 470px",
    backgroundImage: "linear-gradient( 90.5deg,  rgba(255,207,139,0.50) 1.1%, rgba(255,207,139,1) 81.3% )",
    border: "solid 5px"
}

const headingStyle = {
    textAlign: "center"
}

const paraStyle = {
    textAlign: "center",
    fontSize: 16,
    padding: "30px 0px 0px 0px"
}

    return(
        <div className="vacation-spots">
            <div style={vacationCards}>
                <h2 style={headingStyle}>{props.place}</h2>
                <p style={paraStyle}>Price: {props.price.toLocaleString("en-US", { style: "currency", currency: "USD" })} </p>
                <p style={paraStyle}>Time To Go: {props.timeToGo}</p>
            </div>
        </div>
    )
}

export default Destinations