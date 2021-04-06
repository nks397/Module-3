import React from "react"

function Badge(props){
    return(
        <div>
        <h3 style={{backgroundColor: "gray", color: "white", fontSize: "25px", position: "relative", top: "78px", padding: "15px 0px", paddingLeft: "20px", borderRadius: "12px"}}>Badge:</h3>
        <div className="badge-container">
            <div className="badge">
                <h3 className="name">Name: {props.firstName} {props.lastName}</h3>
                <br/>
                <h3 className="email">Email: {props.email}</h3>
                <br/>
                <h3 className="place-of-birth">Place of Birth: {props.placeOfBirth}</h3>
                <br/>
                <h3 className="phone-number">Phone Number: {props.phoneNumber}</h3>
                <br/>
                <h3 className="fav-food">Favorite Food: {props.favFood}</h3>
                <br/>
                <h3 className="about-you"><div className="about-you-container">{props.aboutYou}</div> </h3> 
            </div>
        </div>
        </div>
    )
}
export default Badge

