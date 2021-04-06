import React from "react"
import DiceBox from "./DiceBox"

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            num1: 0,
            num2: 0,
            num3: 0,
            num4: 0,
            num5: 0
        }
        this.diceGenerator = this.diceGenerator.bind(this)
    }

    diceGenerator() {
        this.setState(prevState =>{
            const random1 = Math.floor(Math.random() * 6)
            const random2 = Math.floor(Math.random() * 6)
            const random3 = Math.floor(Math.random() * 6)
            const random4 = Math.floor(Math.random() * 6)
            const random5 = Math.floor(Math.random() * 6)

            return {
               num1: random1,
               num2: random2,
               num3: random3,
               num4: random4,
               num5: random5
            }
        })
    }

    render() {
        return(
            <div>
                <DiceBox num1={this.state.num1} num2={this.state.num2} num3={this.state.num3} num4={this.state.num4} num5={this.state.num5}/>
                <button className="diceBtn" onClick={this.diceGenerator}>Roll the Dice</button>
            </div>
        )
    }
}

export default App