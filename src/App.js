import React from "react"
import axios from "axios"
import "./styles.css"

class App extends React.Component{
    constructor() {
        super()
        this.state = {
            color:""
        }
        this.handleclick = this.handleclick.bind(this)
    }

    componentDidMount() {
        axios.get(`https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`)
        .then(response => {
            this.setState({
                color: "#"+ response.data.colors[0].hex
                // console.log(response.data)
            })  
        })
    }
    
    handleclick(){
        axios.get(`https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`)
        .then(response => {
            this.setState({
                color: "#"+ response.data.colors[0].hex
            })  
        }) 
       
    }

    render(){
        console.log(this.state, "hello")
        return(
            <div>
                <h1 className="title">Random Color Block</h1>
                <div className="color-block"style={{backgroundColor: this.state.color}}></div>
                <button onClick={this.handleclick} className="btn">Click Me </button>

            </div>
        )
    }
}

export default App