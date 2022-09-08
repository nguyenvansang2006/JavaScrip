import React, { Component } from 'react'

export class ShowDate extends Component {
    constructor(props){
        super(props);
        this.state={
            ngay:15,
            thang:2,
            nam:2022
        }
        alert('Khoi tao');
    }
    capnhat=()=>{
        this.setState({
            ngay:this.state.ngay+1
        });
        
    };

    shouldComponentUpdate(){
        alert('xem xet Uppdate')
        return true
    }
    componentDidUpdate(){
        alert(" da Update");
        
    }

  render() {
    return (
      <div>
          <p>Ngay:{this.state.ngay} Thang:{this.state.thang} Nam:{this.state.nam}</p>
          <button onClick={this.capnhat}>Cap Nhat</button>
      </div>
    )
  }
}

export default ShowDate