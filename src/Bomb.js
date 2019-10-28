import React, { Component } from 'react'
import ImageSlider from './ImageSlider'

export default class Bomb extends Component { 

    constructor(props){
        super(props);
        console.log(this.props.initialCount)
        this.state = { 
            secondsLeft: this.props.initialCount
        }
    }

    render() {
        if(this.state.secondsLeft > 0){
            return <p>{this.state.secondsLeft} seconds left before I go boom!</p>
        } 
        else { 
            return <p>Boom!</p>
        }      
    }

}