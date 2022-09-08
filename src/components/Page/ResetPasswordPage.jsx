import React, { Component } from 'react';
import Footer from '../Common/Footer';
import Header from '../Common/Header';
import ResetPassword from '../Others/ResetPassword';

class ResetPasswordPage extends Component {
    render() {
        return (
            <div>
            <Header/>
            <ResetPassword />
            <Footer/>
            </div>
        );
    }
}

export default ResetPasswordPage;