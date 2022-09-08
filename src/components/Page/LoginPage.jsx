import React, { Component } from 'react';
import Footer from '../Common/Footer';
import Header from '../Common/Header';
import Login from '../Others/Login';

class LoginPage extends Component {
    render() {
        return (
            <div>
            <Header/>
            <Login />
            <Footer/>
            </div>

        );
    }
}

export default LoginPage;