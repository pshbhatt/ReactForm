import React from 'react'
import Joke from './Joke'

function App(){
    return (<div>
    <Joke jokes={{question:'Question1', punchline:'punchline1'}}/>
    <Joke jokes={{question:'Question2', punchline:'punchline2'}}/>
    <Joke jokes={{ punchline:'punchline3'}}/>
    <Joke jokes={{question:'Question4', punchline:'punchline4'}}/>
    <Joke jokes={{question:'Question5', punchline:'punchline5'}}/>
    </div>)
}

export default App