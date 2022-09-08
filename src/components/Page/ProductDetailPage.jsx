import React, { Component } from 'react'
import Footer from '../Common/Footer'
import Header from '../Common/Header'
import ProductDetails from '../Product/ProductDetails'

import {useParams} from 'react-router-dom'
import SimilarProduct from '../Product/SimilarProduct'
function ProductDetailPage(props) {
  const product_id = useParams().product_id;
  const user = props.user;
    return (
      <div>
      <Header />    
      <ProductDetails product_id={product_id} user={user}/>
      
      <Footer />
      </div>
    )
  }
export default ProductDetailPage