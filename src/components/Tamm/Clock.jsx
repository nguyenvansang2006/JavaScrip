import React, { Component } from 'react'

export class Clock extends Component {
    constructor(props){
        super(props);
        this.state={date: new Date()};
    }
  render() {
    return (
      <div>
        <h1>Hello,word1</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
      </div>
    )
  }
}

export default Clock