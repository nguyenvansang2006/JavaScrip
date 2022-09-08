import axios from 'axios';
import React, { Component } from 'react'
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Validation from '../../Validation/Validation';
import AppUrl from '../Api/AppUrl';

export default class ForgetPassword extends Component {
  constructor(){
    super();
    this.state={
      email:''
    }
  }
  formSubmit= (e) =>{
    e.preventDefault();
    let email= this.state.email
    if(email == '')toast.error('please write email')
    else if(!(Validation.emailRegx).test(email)) toast.error('Email invalide')
    else{
    let resetBtn= document.getElementById('resetBtn')
    resetBtn.innerHTML= 'Sending...'

    const data={
      email:email
    }
    console.log(data)

  
     //alert(AppUrl.forgetpassword)
    axios.post(AppUrl.forgetpassword, data).then( response => {
        toast.success(response.data.message,{
          position: 'top-right'
        });
      }).catch(error=>{
        console.log(error)
        toast.error(error.response.data.message,{
          position: 'top-right'
        });
      });
    }
  }
  render() {
    return (
      <div className='row'>
        <div className="col-md-4 col-xs-12">
        </div>
        <div className="col-md-4 col-xs-12">
          <form className="onboardForm" onSubmit={this.formSubmit} >
            <h4 className="section-title-login"> FORGET PASSWORD ? </h4>
            <input className="m-2" type="email" placeholder="Enter Your Email" onChange={(e)=> {this.setState({email: e.target.value}) }}/>
            <button id='resetBtn' type="submit" className="btn btn-success m-2 "> Reset Password </button>
          </form>
        </div>
        <div className="col-md-4 col-xs-12">
        </div>
        <ToastContainer/>
      </div>
    )
  }
}
