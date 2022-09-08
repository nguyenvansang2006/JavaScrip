import React, { Component } from 'react'
import axios from "axios";
import AppUrl from '../Api/AppUrl';
import { ToastContainer,toast } from 'react-toastify';
import Validation from "../../Validation/Validation";
import { Link, Navigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
export default class ResetPassword extends Component {
  constructor(){
    super()
    this.state={
      token: '',
      email:'',
      password:'',
      passwordConfirm:'',
      resetsuccess: false
      
    }
  }
  formSubmit=(e)=>{
    e.preventDefault();
    let email=this.state.email
    let password=this.state.password
    let passwordConfirm=this.state.passwordConfirm

    if(email=='')toast.error("Please write email")
    else if(password=='')toast.error("Please write password")
    else if(passwordConfirm=='')toast.error("Please write passwordConfirm")
   
    else if(!(Validation.emailRegx).test(email)) toast.error('Email invalid')
    else if(!(Validation.passwordRegx).test(password)) toast.error('Password invalid')
    else if(password!=passwordConfirm) toast.error('Password and password confirm not same')
    else{
        let resetBtn=document.getElementById('resetBtn')
        resetBtn.innerHTML='Resetting...'

        const data={
          token:this.state.token,
          email: this.state.email,
          password: this.state.password,
          password_confirmation: this.state.passwordConfirm
        }
        axios.post(AppUrl.resetpassword, data).then(response =>{
          this.setState({resetsuccess:true})
          toast.success(response.data.message,{
            position: 'top-right'
          });
          document.getElementById("fromreset").reset();
        }).catch(error =>{
          toast.error(error.response.data.message,{
            position: 'top-right'
          });
        });
        }
    }
  
  render() {
    if(this.state.resetsuccess){
      return < Navigate to={'/login'}/>
    }
    return (
      <div class=" row text-center">
        <div class="d-flex justify-content-center col-md-3 col-sm-12">
        </div>
        <div class="d-flex justify-content-center col-md-6 col-sm-12">
          <form class="onboardForm" onSubmit={this.formSubmit} id="fromreset" >
            <h4 class="section-title-login"> RESET PASSWORD </h4>
            <input type="text" placeholder="Enter Your Pin Code"  onChange={(e)=> {this.setState({token: e.target.value}) }}/>
            <input class="form-control m-2" type="email" placeholder="Enter Your Email" onChange={(e)=> {this.setState({email: e.target.value}) }}/>
            <input class="form-control m-2" type="password" placeholder="Your New Password"  onChange={(e)=> {this.setState({password: e.target.value}) }}/>
            <input class="form-control m-2" type="password" placeholder="Confirm Your Password"  onChange={(e)=> {this.setState({passwordConfirm: e.target.value}) }}/>
            <button id='resetBtn' type="submit" class="btn btn-success m-2 "> Reset Password </button>

          </form>
        </div>
        <div class="d-flex justify-content-center col-md-3 col-sm-12">
        </div>
        <ToastContainer/>
      </div>
    )
  }
}
