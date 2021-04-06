import React from "react"
import Targets from "./Target"
import Header from "./Header"
import "./styles.css" 

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            targets: []
        }
    }

    componentDidMount(){
        fetch("https://raw.githubusercontent.com/VSchool/vschool-api/master/static/hitlist.json")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    targets: data
                })
            })
    }

    render() {
    const hitlist = this.state.targets.map((people, index) => 
        <Targets key={index} name={people.name} image={people.image}/>
        )
    
        return (
            <div className="hit-list-div">
                <Header />
                {hitlist}
           </div>

        )
    }
}

export default App