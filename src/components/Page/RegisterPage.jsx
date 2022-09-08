import React, { Component } from 'react'
import Footer from '../Common/Footer'
import Header from '../Common/Header'

import Register from '../Others/Register'
export default class RegisterPage extends Component {
    render() {
        return (
            <div>
            <Header/>
            <Register />
            <Footer/>
            </div>
        )
    }
}
