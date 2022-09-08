import axios from 'axios'
import React, { Component } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import AppUrl from '../Api/AppUrl'


export default class Profile extends Component {
  constructor(){
    super()
    this.state={
      name: '',
      email: '',
      profilePhoto: ''
    }
  }
  componentDidMount(){
    if(localStorage.getItem('token')){
      let config={
        headers: {
          Authorization:'Bearer ' + localStorage.getItem('token')
        }
      }
      axios.get(AppUrl.userdata, config).then(response =>{
        console.log(response)
        var userdata= response.data
        this.setState({
          name: userdata.name,
          email: userdata.email,
          level: userdata.level,
          profilePhoto: userdata.profile_photo_url
        })
      }).catch(error =>{
        toast.error(error.response.data.message, {
          position: 'top-right'

        });
      });
    }
  }
  render() {
    if(! localStorage.getItem('token')){
      return<Navigate to='/login'/>
    }
    return (
        <div className="profile">
        <h2 className="text-center">PROFILE </h2>
        <ul className="list-group">
        <li className="list-group-item"><img src={this.state.profilePhoto}/> </li>
           <li className="list-group-item">Name :  {this.state.name} </li>
           <li className="list-group-item">Email :  {this.state.email} <Link to='/orderlist'> <button className="btn btn-success"> All Orders</button></Link></li>
        </ul>
        
        <ToastContainer></ToastContainer>

     </div>
     
    )
  }
  
}
