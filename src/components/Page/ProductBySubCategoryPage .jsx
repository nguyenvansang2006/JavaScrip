/* eslint-disable jsx-a11y/anchor-is-valid */
// import React, { Component } from 'react';
import React, { useState,useEffect } from 'react';
import Footer from '../Common/Footer';
import Header from '../Common/Header';
import BrandMenu from '../Product/BrandMenu';
import CategoryMenu from '../Product/CategoryMenu';

import ProductBySubCategory from '../Product/ProductBySubCategory';
import Slider from '../Home/Slider';
import { useParams } from 'react-router-dom';
function ProductBySubCategoryPage() {
    
    const category = useParams().category;
    const subcategory = useParams().subcategory;
        return (
            
            <div>
                <Header/>
                {/* <Slider/> */}
            <div className='row'>
                <div className='col-sm-3'>
                    <div className='left-sidebar'>
                        <CategoryMenu/>
                        <BrandMenu/>
                    </div>
                </div>
                <div className='col-sm-9 padding-right'>
                
                
                <ProductBySubCategory category={category} subcategory={subcategory} />
                </div>
                </div>
                <Footer/>
                </div>
        );
    }

export default ProductBySubCategoryPage
