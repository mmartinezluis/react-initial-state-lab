// your Bomb code here!
import React from 'react';

export default class Bomb extends React.Component{

    constructor(props){
        super();
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    outcome = () => {
    if (this.state.secondsLeft > 0) {
        return `${this.state.secondsLeft} seconds left before I go boom!`
            
        }
        return "Boom!"
    }

    render(){
        return (
            <div>
                {this.outcome()}
            </div>
        )
    }
}
