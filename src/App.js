import React from "react"
import Destinations from "./Destinations"
import destinationsData from "./destinationsData"

function App() {
    const vacayComponents = destinationsData.map(function(vacay) {
        return(<Destinations key={vacay.id} place={vacay.place} price={vacay.price} timeToGo={vacay.timeToGo}/>)
        
    })    

    return(
        <div>
            {vacayComponents}
        </div>
    )


}

export default App