import React from 'react'

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            imageSrc : "https://placedog.net/200"
        }
        this.modifyImage = this.modifyImage.bind(this)
    }
    modifyImage(){
        this.setState({imageSrc:'https://placedog.net/201'});
    }
    render(){
    return (
        <div>
        <img src={this.state.imageSrc} />
        <br />
        <br />
        <button onClick={this.modifyImage}>Click</button>
        </div>
 
    )
    }
}

export default App