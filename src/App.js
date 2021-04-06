import React from "react"
import Badge from "./Badge"

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            placeOfBirth: "",
            phoneNumber: "",
            favFood: "",
            aboutYou: "",
            badgeArr: []
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleNumbers = this.handleNumbers.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault()
        this.setState(prevState => {
            return {
                firstName: "",
                lastName: "",
                email: "",
                placeOfBirth: "",
                phoneNumber: "",
                favFood: "",
                aboutYou: "",
                badgeArr: [
                    ...prevState.badgeArr, {...prevState}
                ]
            }
        })
    }    
          

    handleChange(event){
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    handleNumbers(event){
        let phoneNumber = event.target.value;
        if (!Number(phoneNumber)) {
            return
        }
        this.setState({
            [event.target.name]: phoneNumber
        })
    }
    
    render() {
        const badges = this.state.badgeArr.map((item)=>{ return <Badge key={item}{...item}/>})
        return(
            <div className="input-container">
                <form onSubmit={this.handleSubmit}>
                    <input style={{width: "248%", position: "relative", right: "330px"}} type="text" name="firstName" placeholder="First Name" value={this.state.firstName} minlength="3" onChange={this.handleChange} required/>
                    <input style={{width: "248%", position: "relative", left: "-10px"}} type="text" name="lastName" placeholder="Last Name" value={this.state.lastName} minlength="3" onChange={this.handleChange} required/>
                    <input style={{width: "248%", position: "relative", right: "330px"}} type="text" name="email" placeholder="Email" value={this.state.email} minlength="3" onChange={this.handleChange} required/>
                    <input style={{width: "248%", position: "relative", left: "-10px"}} type="text" name="placeOfBirth" placeholder="Place of Birth" value={this.state.placeOfBirth} minlength="3" onChange={this.handleChange} required/>
                    <input style={{width: "248%", position: "relative", right: "330px"}} type="tel" name="phoneNumber" placeholder="Phone Number" value={this.state.phoneNumber} minlength="3" onChange={this.handleNumbers} required/>
                    <input style={{width: "248%", position: "relative", left: "-10px"}} type="text" name="favFood" placeholder="Favorite Food" value={this.state.favFood} minlength="3" onChange={this.handleChange} required/>
                    <textarea style={{width: "223%", height:"200%", position: "relative", left: "-330px"}}type="text" name="aboutYou" placeholder="Tell us about yourself" value={this.state.aboutYou} minlength="3" onChange={this.handleChange} required/>
                    <button style={{fontSize:"18px", padding:"5px 30px", border: "solid 3px", borderRadius: "6px", position: "relative", top: "55px"}} type="submit" onClick={this.inputReset}>Submit</button>
                </form>
                {badges}
           </div> 
        )
    }
}
// width was  260% before
export default App


// The user should be able to enter their information in the badge fields.***
// Upon submit, the badge fields should be cleared, and a new badge should be displayed below the badge form. (*FIX*)****
// Each time the user submits a badge, each badge will be printed below the form in a list.***
// Specify input types to correspond with the required information.***
// Add a minimal character count of 3 for each field.***
// Note: The new badge should not appear until after it is submitted.***
// If any of the input fields are empty the Submit button should be disabled***
// Write validation code to make sure the phone number field only has numbers (no dashes or special characters, must look like this 9757653323
// ***

// Notes:
// fix badgeArr***
// fix submit function
