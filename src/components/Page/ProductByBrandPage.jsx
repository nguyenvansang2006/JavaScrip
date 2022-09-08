import React, { Component } from 'react'
import Footer from '../Common/Footer'
import Header from '../Common/Header'
import CategoryMenu from '../Product/CategoryMenu'
import ProductByBrand from '../Product/ProductByBrand'

export default class ProductByBrandPage extends Component {
    render() {
        return (
            <div>
                <Header/>
            <div className='row'>
                <CategoryMenu />
                <ProductByBrand />
                <Footer/>
            </div>
            </div>
        )
    }
}
