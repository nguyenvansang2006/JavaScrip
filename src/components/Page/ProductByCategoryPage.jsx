import React, { Component, useState } from 'react'
import ProductByCategory from '../Product/ProductByCategory'
import Header from '../Common/Header'
import Footer from '../Common/Footer'
import CategoryMenu from '../Product/CategoryMenu'
import BrandMenu from '../Product/BrandMenu'
import Advertising from '../Product/Advertising'
import { useParams } from 'react-router-dom'
function ProductByCategoryPage() {

  const category = useParams().category;
  const subcategory = useParams().subcategory;

  return (
    <div>
      <Header />
      <div className="row">
        <div className="col-sm-3">
          <div className="left-sidebar">
            <h2>Category</h2>
            <CategoryMenu />
            <BrandMenu />
            <Advertising />
          </div>
        </div>
        <div className="col-sm-9 padding-right">
          <ProductByCategory  />
          {/* category={category} subcategory={subcategory} */}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ProductByCategoryPage