import axios from "axios";
import React, { Component } from "react";
import { Link, Navigate } from "react-router-dom";
import AppUrl from '../Api/AppUrl';

import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Validation from "../../Validation/Validation";

export default class Register extends Component {
  constructor(){
    super()
    this.state={
      name:'',
      email:'',
      password:'',
      passwordConfirm:'',
      loggendIn: false
    }
  }
  nameOnChange=(e)=>{
    this.setState({name: e.target.value});
  }
  emailOnChange=(e)=>{
    this.setState({email: e.target.value});
  }
  passwordOnChage=(e)=>{
    this.setState({password: e.target.value});
  }
  passwordConfirmOnChange=(e)=>{
    this.setState({passwordConfirm: e.target.value});
  }
  componentDidMount(){
    let registerForm=document.getElementById('registerForm')
    registerForm.addEventListener('submit',this.onSubmitRegister)
  }
  onSubmitRegister=(e)=>{
    e.preventDefault();
    let name=this.state.name
    let email=this.state.email
    let password=this.state.password
    let passwordConfirm=this.state.passwordConfirm

    if(name=='') toast.error('Please write name')
    else if(email=='')toast.error("Please write email")
    else if(password=='')toast.error("Please write password")
    else if(passwordConfirm=='')toast.error("Please write passwordConfirm")
    else if(!(Validation.nameRegx).test(name)) toast.error('Name invalid')
    else if(!(Validation.emailRegx).test(email)) toast.error('Email invalid')
    else if(!(Validation.passwordRegx).test(password)) toast.error('Password invalid')
    else if(password!=passwordConfirm) toast.error('Password and password confirm not same')
    else{
        let registerBtn=document.getElementById('registerBtn')
        registerBtn.innerHTML='Registerting...'
        //Goi API gui data
        const data={
          name: name, 
          email: email,
          password: password,
          password_confirmation: passwordConfirm
        }
        axios.post(AppUrl.register, data). then(response=>{
          localStorage.setItem('token', response.data.token);
          this.setState({ loggendIn: true})
        }).catch(error =>{
          console.log(error)
          toast.error(error.response.data.message,{
            position: "top-right"
          })
        })
      
    }
  }
  render() {
    // kiem tra
    if( this.state.loggendIn){
      return <Navigate to={'/profile'} />
    }
    if (localStorage.getItem('token')){
      return <Navigate to='/profile' />
    }
    return (
      <section
        className="h-100 h-custom register"
        style={{ backgroundColor: "rgb(143, 196, 183)" }} >
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-8 col-xl-6">
              <div className="card rounded-3">
                <div className="card-body p-4 p-md-5">
                  <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">
                    Registration Info
                  </h3>
                  <form className="px-md-2" id='registerForm'>
                    <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form3Example1q">Name</label>
                      <input type="text" id="txtName" onChange={this.nameOnChange} className="form-control"/>
                      
                    </div>
                    <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form3Example1q">
                        Email
                      </label>
                      <input
                        type="text"
                        id="txtEmail" onChange={this.emailOnChange}
                        className="form-control"/>
                      
                    </div>
                    <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form3Example1q">
                        Password
                      </label>
                      <input
                        type="text"
                        id="txtPassword" onChange={this.passwordOnChage}
                        className="form-control"/>
                      
                    </div>
                    <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form3Example1q">
                        Confirm Password
                      </label>
                      <input
                        type="text"
                        id="txtPasswordConfirm" onChange={this.passwordConfirmOnChange}
                        className="form-control" />
                      
                    </div>
                    <button  id='registerBtn' type="submit"className="btn btn-success btn-lg mb-1">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>

        </div>
        <ToastContainer/>
        name{this.state.name},email{this.state.email}, password{this.state.password},passwordConfirm{this.state.passwordConfirm}

      </section>
      
    );
  }
}
