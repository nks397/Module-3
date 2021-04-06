import React from "react"
import Pet from "./Pet"

function Friend(props) {
    const petComponents = props.pets.map(function(pet){
                return (<Pet key={pet.name} name={pet.name}breed={pet.breed} />)
            })

    return (
        
        <div style={{
             textAlign: "center",
             backgroundImage: "linear-gradient( 109.6deg,  rgba(48,207,208,1) 11.2%, rgba(51,8,103,1) 92.5% )",
             margin: "50px 320px",
             border: "inset 5px",
             boxShadow: "12px 12px 2px 1px gray",
             fontFamily: "'Indie Flower', cursive"
        }}>
            <h3 style={{
                padding: "70px 0px 5px 0px"
            }}>Friend's Name: {props.name}</h3>
            <h3 style={{
                padding: "0px 0px 25px 0px"
            }}>Age: {props.age}</h3>
            <hr style={{
                borderStyle: "dotted",
                borderWidth: "5px 0px 0px 0px",
                margin: "0px 220px",
                color: "white"
            }}/>
            <h3 style={{
                padding: "15px 0px 35px 0px",
                
            }}><i style={{color: "white"}} class="fas fa-paw"></i> PETS {petComponents}</h3>
        </div>    
    ) 
}

export default Friend