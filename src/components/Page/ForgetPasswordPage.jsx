import React, { Component } from 'react'
import Footer from '../Common/Footer'
import Header from '../Common/Header'
import ForgetPassword from '../Others/ForgetPassword'
export default  class ForgetPasswordPage extends Component {
  render() {
    return (
      <div>
        <Header/>
        <ForgetPassword/>
        <Footer/>
      </div>
    )
  }
}

