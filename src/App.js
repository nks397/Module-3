import React from "react"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            name: "",
            nameArr: []
        }
            this.handleChange = this.handleChange.bind(this)
            this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name]: value,
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        this.setState(prevState => {
            return {
                nameArr: [
                    ...prevState.nameArr, {name: prevState.name}

                ]
            }
        })
        console.log("Submit successful!")
    }    


    render() {
        const newNameArr = this.state.nameArr.map((namesList, index) => <li key={index}>{namesList.name}</li>)
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
                    <button type="submit">Submit</button>
                </form>
                <br />
                <h1>Name: {this.state.name}</h1>
                <br />
                <ol style={{fontSize: "20px"}}>
                    {newNameArr}
                </ol>
            </div>
        )
        
    }
}

export default App

// Build a simple react app with an *input box, an *<h1>, a *button, and an *ordered list. The user will type names into the input box.
// When the user types in the input box, the <h1> should update to show the same text as the input box.
// When the user clicks the button, the value of the input box should be added to a running list of names that have been previous entered. (Hint: you'll need to set state and map over an array to do this).