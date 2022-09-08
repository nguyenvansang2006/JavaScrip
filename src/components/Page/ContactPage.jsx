import React, { Component } from 'react'
import Footer from '../Common/Footer'
import Header from '../Common/Header'
import Contact from '../Others/Contact'

export default class ContactPage extends Component {
    render() {
        return (
            <div>
            <Header/>
            
            <Contact />
            <Footer/>
            </div>
        )
    }
}
