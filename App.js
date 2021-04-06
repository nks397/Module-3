import React from "react"
import Square from "./Square"
import kidInkType from "./audio/kid-ink-type.mp3"
import miGente from "./audio/mi-gente.mp3"
import vibes from "./audio/vibes.mp3"
import techHouse from "./audio/tech-house.mp3"
import djBabyScratch from "./audio/dj-baby-scratch.mp3"
import scratchingMajor from "./audio/scratching-major.mp3"
import percussiveScratch from "./audio/percussive-scratch.mp3"
import vocalScratch from "./audio/vocal-scratch.mp3"


class App extends React.Component{
    constructor() {
        super()
        this.state = {
            colors: ["white", "white", "white", "white"],
            musicPlaying: false
        }
        this.track1 = React.createRef()
        this.track2 = React.createRef()
        this.track3 = React.createRef()
        this.track4 = React.createRef()
        this.track5 = React.createRef()
        this.track6 = React.createRef()
        this.track7 = React.createRef()
        this.track8 = React.createRef()
        this.smallDJBtn = this.smallDJBtn.bind(this)
        this.partyDJBtn = this.partyDJBtn.bind(this)
        this.proDJBtnRight = this.proDJBtnRight.bind(this)
        this.proDJBtnLeft = this.proDJBtnLeft.bind(this)
        this.bigTimeDJ1 = this.bigTimeDJ1.bind(this)
        this.bigTimeDJ2 = this.bigTimeDJ2.bind(this)
        this.bigTimeDJ3 = this.bigTimeDJ3.bind(this)
        this.bigTimeDJ4 = this.bigTimeDJ4.bind(this)
    }
    smallDJBtn() {
        this.setState(prevState => {
            return {
            colors: ["black", prevState.colors[1], "black", prevState.colors[3]]
            }
        })

        if(!this.state.musicPlaying){
            this.track1.current.play()
            return this.setState({musicPlaying: true})

          } 
          if (this.state.musicPlaying) { 
            this.track1.current.pause()
            return this.setState({musicPlaying: false})
          }
        
    }
    partyDJBtn() {
        this.setState(prevState => {
                    return {
                        colors: ["purple", "purple", prevState.colors[2], prevState.colors[3]]
                    }
                })

        if(!this.state.musicPlaying){
            this.track2.current.play()
            return this.setState({musicPlaying: true})
          } 
          if (this.state.musicPlaying) { 
            this.track2.current.pause()
            return this.setState({musicPlaying: false})
          }
       
    }
    proDJBtnRight() {
        this.setState(prevState => {
            return {
                colors: [prevState.colors[0], prevState.colors[1], "blue", prevState.colors[3]]
            }
        })

        if(!this.state.musicPlaying){
            this.track3.current.play()
            return this.setState({musicPlaying: true})
          } 
          if (this.state.musicPlaying) { 
            this.track3.current.pause()
            return this.setState({musicPlaying: false})
          }
        
    }
    proDJBtnLeft() {
        this.setState(prevState => {
            return {
                colors: [prevState.colors[0], prevState.colors[1], prevState.colors[2], "blue"]
            }
        })

        if(!this.state.musicPlaying){
            this.track4.current.play()
            return this.setState({musicPlaying: true})
          } 
          if (this.state.musicPlaying) { 
            this.track4.current.pause()
            return this.setState({musicPlaying: false})
          }
        
    }
    bigTimeDJ1() {
         this.setState(prevState => {
            return {
                colors: ["orange", prevState.colors[1], prevState.colors[2], prevState.colors[3]]
            }
        })

        if(!this.state.musicPlaying){
            this.track5.current.play()
            return this.setState({musicPlaying: true})
          } 
          if (this.state.musicPlaying) { 
            this.track5.current.pause()
            return this.setState({musicPlaying: false})
          }
       
    }
    bigTimeDJ2() {
        this.setState(prevState => {
                    return {
                        colors: [prevState.colors[0], "lime", prevState.colors[2], prevState.colors[3]]
                    }
                })

        if(!this.state.musicPlaying){
            this.track6.current.play()
            return this.setState({musicPlaying: true})
          } 
          if (this.state.musicPlaying) { 
            this.track6.current.pause()
            return this.setState({musicPlaying: false})
          }
        
    }
    bigTimeDJ3() {
        this.setState(prevState => {
                    return {
                        colors: [prevState.colors[0], prevState.colors[1], "green", prevState.colors[3]]
                    }
                })

        if(!this.state.musicPlaying){
            this.track7.current.play()
            return this.setState({musicPlaying: true})
        }
        if(this.state.musicPlaying){
            this.track7.current.pause()
            return this.setState({musicPlaying:false})
        }
        
    }
    bigTimeDJ4() {
        this.setState(prevState => {
            return {
                colors: [prevState.colors[0], prevState.colors[1], prevState.colors[2], "#ff4500"]
            }
        })

        if(!this.state.musicPlaying){
          this.track8.current.play()
          console.log(this.state.musicPlaying)
          console.log(this.track8.current)
          return this.setState({musicPlaying: true})
        } 
        if (this.state.musicPlaying) { 
          this.track8.current.pause()
          console.log(this.state.musicPlaying)
          return this.setState({musicPlaying: false})
        }
        
    }
    render() {
        return(
            <div>
                <audio ref={this.track1} type="audio/mpeg" src={miGente}></audio>
                <audio ref={this.track2} type="audio/mpeg" src={djBabyScratch}></audio>
                <audio ref={this.track3} type="audio/mpeg" src={kidInkType}></audio>
                <audio ref={this.track4} type="audio/mpeg" src={scratchingMajor}></audio>
                <audio ref={this.track5} type="audio/mpeg" src={techHouse}></audio>
                <audio ref={this.track6} type="audio/mpeg" src={vocalScratch}></audio>
                <audio ref={this.track7} type="audio/mpeg" src={vibes}></audio>
                <audio ref={this.track8} type="audio/mpeg" src={percussiveScratch}></audio>

                <div>
                    <h2 className="title">DJ React</h2>
                </div>
                <div className="container" style={{background:this.state.color}}>
                    <div><Square color={this.state.colors[0]}/></div>
                    <div><Square color={this.state.colors[1]}/></div>
                    <div><Square color={this.state.colors[2]}/></div>
                    <div><Square color={this.state.colors[3]}/></div>
                </div>
                <div className="btn-container"> 
                    <button className="btn1" onClick={this.smallDJBtn}>Small DJ</button>
                    <button className="btn2" onClick={this.partyDJBtn}>Party DJ</button>
                    <button className="btn3" onClick={this.proDJBtnRight}>Pro DJ Left</button>
                    <button className="btn4" onClick={this.proDJBtnLeft}>Pro DJ Right</button>
                    <button className="btn5" onClick={this.bigTimeDJ1}>Big Time DJ 1</button>
                    <button className="btn6" onClick={this.bigTimeDJ2}>Big Time DJ 2</button>
                    <button className="btn7" onClick={this.bigTimeDJ3}>Big Time DJ 3</button>
                    <button className="btn8" onClick={this.bigTimeDJ4}>Big Time DJ 4</button>
                </div>
            </div>
        )
    }
}
export default App