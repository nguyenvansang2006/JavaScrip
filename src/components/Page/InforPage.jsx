import React, { Component } from 'react'
import Footer from '../Common/Footer'
import Header from '../Common/Header'
import Info from '../Common/Info'
export default class InforPage extends Component {
    render() {
        return (
           <div>
                <Header/>
                <Info slug={this.props.slug} />
                <Footer/>
            </div>
        )
    }
}
