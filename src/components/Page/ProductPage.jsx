import React, { Component } from "react";
import Footer from "../Common/Footer";
import Header from "../Common/Header";

import CategoryMenu from "../Product/CategoryMenu";
import BrandMenu from "../Product/BrandMenu";
import Advertising from "../Product/Advertising";
import Featured from "../Home/Featured";
import NewArrivel from "../Home/NewArrivel";
export class ProductPage extends Component {
   render() {
     return (
       <div>
         <Header />
         <div class="row">
           <div class="col-sm-3">
             <div class="left-sidebar">
             <h2>Category</h2>
               <CategoryMenu />
               <BrandMenu/>
               <Advertising/>
             </div>
           </div>
           <div class="col-sm-9 padding-right">
            <NewArrivel />
             <Featured />
             
           </div>
         </div>
         <Footer />
       </div>
     )
   }
 }
 
 export default ProductPage
 

