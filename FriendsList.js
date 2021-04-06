import React from "react"
import friendsData from "./friendsData"
import Friend from "./Friend"

function FriendsList() {
    const friendsComponents = friendsData.map(function(friends) {
        return (<Friend key={friends.id} name={friends.name} age={friends.age} pets={friends.pets}/>)
})
    return(
        <div>
            {friendsComponents} 
        </div>
    )
}
export default FriendsList
