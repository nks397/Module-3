import React from "react"
import Header from "./Header"
import MemeGenerator from "./MemeGenerator"
// import axios from "axios"

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            topText: "",
            bottomText: "",
            randomImg: "http://i.imgflip.com/1bij.jpg",
            memeArr: []
        }
        this.topHandleChange = this.topHandleChange.bind(this)
        this.bottomHandleChange = this.bottomHandleChange.bind(this)
        this.handleRandomImg = this.handleRandomImg.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleAddition = this.handleAddition.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.handleEdit = this.handleEdit.bind(this)
    }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                // response.data.memes
                this.setState({
                    topText: "",
                    bottomText: "",
                    randomImg: "",
                    memeArr: response.data.memes
                    

                })
                            

            })
                
                
                // 
    }

    topHandleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    bottomHandleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name]:value
        })
    }

    handleRandomImg() {

    }

    handleSubmit() {

    }

    handleAddition() {

    }

    handleDelete() {

    }

    handleEdit() {

    }

    render(){
        return (
            <div>
                <Header />
                <MemeGenerator />
                <form>
                    <input type="text" onChange={this.topHandleChange} name="topText" value={this.state.topText} placeholder="Top Text"/> 
                    <input type="text" onChange={this.bottomHandleChange} name="bottomText" value={this.state.bottomText} placeholder="Bottom Text"/>
                    <button type="submit" onClick={this.handleSubmit}>Refresh Meme Image</button>
                    <button type="submit" onClick={this.handleSubmit}>Submit</button>
                    <button type="button" onClick={this.handleAddition}>Add</button>
                    <button type ="button" onClick={this.handleDelete}>Delete</button>
                    <button type ="button" onClick={this.handleEdit}>Edit</button>
                </form>
            </div>
        )
    }
}

export default App