import React, { Component } from 'react'
import Footer from '../Common/Footer'
import Header from '../Common/Header'
import Profile from '../Others/Profile'
export default class ProfilePage extends Component {
    render() {
        return (
            <div>
            <Header/>
            <Profile />
            <Footer/>
            </div>
        )
    }
}
