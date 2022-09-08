import React, { Component } from 'react'
import Header  from '../Common/Header'
import Footer from '../Common/Footer'
import {Cart} from '../Cart/Cart'
export class CartPage extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Cart/>
        <Footer/>
        

      </div>
    )
  }
}

export default CartPage

