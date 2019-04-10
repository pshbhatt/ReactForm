import React from 'react'

function Joke(props){
    let style;
    if(props.jokes.question==null){
        style='none';
        console.log(props.jokes.question)
    }
    return (<div>
    <p style={{display:style}}> Joke:: {props.jokes.question} </p>
    <p> Punchline:: {props.jokes.punchline} </p>
    </div>)
}

export default Joke