/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from 'axios'
import React, { Component } from 'react'
import AppUrl from '../Api/AppUrl'
import { Link } from 'react-router-dom'
class ProductBySubCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subcategory: props.subcategory,
      products: []
    };
    // this.productService=new this.productService
  }
  componentDidMount() {
    // this.productService.ProductBySubCategory(this.state.subcategory)
    // .then(response => {
    //   this.setState({products: response});
    // });
    var data = AppUrl.productsbysubcategory + '/' + this.props.subcategory;
    axios.get(data)
      .then((response) => {
        this.setState({
          products: response.data,
      
          
        })
        
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // componentDidMount() {
  //   this.changecontent()
  // }
  // componentDidUpdate(PrevProps) {
  //   if (this.props.category != PrevProps.category || this.props.subcategory != PrevProps.subcategory)
  //     this.changecontent()
  //   return true
  // }

   render(){
    
      var myview=this.state.products.map((product, index) =>{
         return(
             <div className="col-sm-3" key={index}>
            <div className="product-image-wrapper">
              <div className="single-products">
                <div className="productinfo text-center">
  
                <Link to={"/productdetails/" + product.id}><img src={product.image} alt="" />
                      <h2>{product.price}</h2>
                      <p>{product.title}</p>
                      <p className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</p>
                    </Link>
                  {/* <img src={product.image} alt="" />
                  <h2>{product.price}</h2>
                  <p>{product.title}</p>
                  <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a> */}
                </div>
                <div className="product-overlay">
                  <div className="overlay-content">
                    <Link to={"/productdetails/" + product.id}><img src={product.image} alt="" />
                      <h2>{product.price}</h2>
                      <p>{product.title}</p>
                      <p className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</p>
                    </Link>
                  </div>
                </div>
              </div>
  
            </div>
            </div>
        )
      })
      return (
        <div className="features_items">
          <h2 className="title text-center">{this.props.category} -{this.props.subcategory}</h2>
          {myview}
        </div>
      )
      
    }
  }
//    render() {
//       return (
//          <div className="col-sm-9 padding-right">
//             <div className="features_items">
//                <h2 className="title text-center">Thời trang nữ -Áo nữ</h2>
//                <div className="col-sm-3">
//                   <div className="product-image-wrapper">
//                      <div className="single-products">
//                         <div className="productinfo text-center">
//                            <img src="https://salt.tikicdn.com/cache/400x400/ts/product/d8/4f/f0/55ad6f5caed5d9d128756112adb852a2.jpg.webp" alt="" />
//                            <h2>65000</h2>
//                            <p>Áo trễ vai bánh bèo tiểu thư, áo trắng trần trễ vai</p>
//                            <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
//                         </div>
//                         <div className="product-overlay">
//                            <div className="overlay-content">
//                               <a href="#st">
//                                  <img src="https://salt.tikicdn.com/cache/400x400/ts/product/d8/4f/f0/55ad6f5caed5d9d128756112adb852a2.jpg.webp" alt="" />
//                                  <h2>65000</h2>
//                                  <p>Áo trễ vai bánh bèo tiểu thư, áo trắng trần trễ vai</p>
//                                  <p className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</p>
//                               </a>
//                            </div>
//                         </div>
//                      </div>
//                   </div>
//                </div>
//                <div className="col-sm-3">
//                   <div className="product-image-wrapper">
//                      <div className="single-products">
//                         <div className="productinfo text-center">
//                            <img src="https://salt.tikicdn.com/cache/400x400/ts/product/d8/4f/f0/55ad6f5caed5d9d128756112adb852a2.jpg.webp" alt="" />
//                            <h2>65000</h2>
//                            <p>Áo trễ vai bánh bèo tiểu thư, áo trắng trần trễ vai</p>
//                            <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
//                         </div>
//                         <div className="product-overlay">
//                            <div className="overlay-content">
//                               <a href="#st">
//                                  <img src="https://salt.tikicdn.com/cache/400x400/ts/product/d8/4f/f0/55ad6f5caed5d9d128756112adb852a2.jpg.webp" alt="" />
//                                  <h2>65000</h2>
//                                  <p>Áo trễ vai bánh bèo tiểu thư, áo trắng trần trễ vai</p>
//                                  <p className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</p>
//                               </a>
//                            </div>
//                         </div>
//                      </div>
//                   </div>
//                </div>

//                <div className="col-sm-3">
//                   <div className="product-image-wrapper">
//                      <div className="single-products">
//                         <div className="productinfo text-center">
//                            <img src="https://salt.tikicdn.com/cache/400x400/ts/product/d8/4f/f0/55ad6f5caed5d9d128756112adb852a2.jpg.webp" alt="" />
//                            <h2>65000</h2>
//                            <p>Áo trễ vai bánh bèo tiểu thư, áo trắng trần trễ vai</p>
//                            <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
//                         </div>
//                         <div className="product-overlay">
//                            <div className="overlay-content">
//                               <a href="#st">
//                                  <img src="https://salt.tikicdn.com/cache/400x400/ts/product/d8/4f/f0/55ad6f5caed5d9d128756112adb852a2.jpg.webp" alt="" />
//                                  <h2>65000</h2>
//                                  <p>Áo trễ vai bánh bèo tiểu thư, áo trắng trần trễ vai</p>
//                                  <p className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</p>
//                               </a>
//                            </div>
//                         </div>
//                      </div>
//                   </div>
//                </div>

//                <div className="col-sm-3">
//                   <div className="product-image-wrapper">
//                      <div className="single-products">
//                         <div className="productinfo text-center">
//                            <img src="https://salt.tikicdn.com/cache/400x400/ts/product/d8/4f/f0/55ad6f5caed5d9d128756112adb852a2.jpg.webp" alt="" />
//                            <h2>65000</h2>
//                            <p>Áo trễ vai bánh bèo tiểu thư, áo trắng trần trễ vai</p>
//                            <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
//                         </div>
//                         <div className="product-overlay">
//                            <div className="overlay-content">
//                               <a href="#st">
//                                  <img src="https://salt.tikicdn.com/cache/400x400/ts/product/d8/4f/f0/55ad6f5caed5d9d128756112adb852a2.jpg.webp" alt="" />
//                                  <h2>65000</h2>
//                                  <p>Áo trễ vai bánh bèo tiểu thư, áo trắng trần trễ vai</p>
//                                  <p className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</p>
//                               </a>
//                            </div>
//                         </div>
//                      </div>
//                   </div>
//                </div>

//                <div className="col-sm-3">
//                   <div className="product-image-wrapper">
//                      <div className="single-products">
//                         <div className="productinfo text-center">
//                            <img src="https://salt.tikicdn.com/cache/400x400/ts/product/d8/4f/f0/55ad6f5caed5d9d128756112adb852a2.jpg.webp" alt="" />
//                            <h2>65000</h2>
//                            <p>Áo trễ vai bánh bèo tiểu thư, áo trắng trần trễ vai</p>
//                            <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
//                         </div>
//                         <div className="product-overlay">
//                            <div className="overlay-content">
//                               <a href="#st">
//                                  <img src="https://salt.tikicdn.com/cache/400x400/ts/product/d8/4f/f0/55ad6f5caed5d9d128756112adb852a2.jpg.webp" alt="" />
//                                  <h2>65000</h2>
//                                  <p>Áo trễ vai bánh bèo tiểu thư, áo trắng trần trễ vai</p>
//                                  <p className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</p>
//                               </a>
//                            </div>
//                         </div>
//                      </div>
//                   </div>
//                </div>

//                <div className="col-sm-3">
//                   <div className="product-image-wrapper">
//                      <div className="single-products">
//                         <div className="productinfo text-center">
//                            <img src="https://salt.tikicdn.com/cache/400x400/ts/product/d8/4f/f0/55ad6f5caed5d9d128756112adb852a2.jpg.webp" alt="" />
//                            <h2>65000</h2>
//                            <p>Áo trễ vai bánh bèo tiểu thư, áo trắng trần trễ vai</p>
//                            <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
//                         </div>
//                         <div className="product-overlay">
//                            <div className="overlay-content">
//                               <a href="#st">
//                                  <img src="https://salt.tikicdn.com/cache/400x400/ts/product/d8/4f/f0/55ad6f5caed5d9d128756112adb852a2.jpg.webp" alt="" />
//                                  <h2>65000</h2>
//                                  <p>Áo trễ vai bánh bèo tiểu thư, áo trắng trần trễ vai</p>
//                                  <p className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</p>
//                               </a>
//                            </div>
//                         </div>
//                      </div>
//                   </div>
//                </div>

//                <div className="col-sm-3">
//                   <div className="product-image-wrapper">
//                      <div className="single-products">
//                         <div className="productinfo text-center">
//                            <img src="https://salt.tikicdn.com/cache/400x400/ts/product/d8/4f/f0/55ad6f5caed5d9d128756112adb852a2.jpg.webp" alt="" />
//                            <h2>65000</h2>
//                            <p>Áo trễ vai bánh bèo tiểu thư, áo trắng trần trễ vai</p>
//                            <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
//                         </div>
//                         <div className="product-overlay">
//                            <div className="overlay-content">
//                               <a href="#st">
//                                  <img src="https://salt.tikicdn.com/cache/400x400/ts/product/d8/4f/f0/55ad6f5caed5d9d128756112adb852a2.jpg.webp" alt="" />
//                                  <h2>65000</h2>
//                                  <p>Áo trễ vai bánh bèo tiểu thư, áo trắng trần trễ vai</p>
//                                  <p className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</p>
//                               </a>
//                            </div>
//                         </div>
//                      </div>
//                   </div>
//                </div>

//                <div className="col-sm-3">
//                   <div className="product-image-wrapper">
//                      <div className="single-products">
//                         <div className="productinfo text-center">
//                            <img src="https://salt.tikicdn.com/cache/400x400/ts/product/d8/4f/f0/55ad6f5caed5d9d128756112adb852a2.jpg.webp" alt="" />
//                            <h2>65000</h2>
//                            <p>Áo trễ vai bánh bèo tiểu thư, áo trắng trần trễ vai</p>
//                            <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
//                         </div>
//                         <div className="product-overlay">
//                            <div className="overlay-content">
//                               <a href="#st">
//                                  <img src="https://salt.tikicdn.com/cache/400x400/ts/product/d8/4f/f0/55ad6f5caed5d9d128756112adb852a2.jpg.webp" alt="" />
//                                  <h2>65000</h2>
//                                  <p>Áo trễ vai bánh bèo tiểu thư, áo trắng trần trễ vai</p>
//                                  <p className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</p>
//                               </a>
//                            </div>
//                         </div>
//                      </div>
//                   </div>
//                </div>
//                <div className="col-sm-3">
//                   <div className="product-image-wrapper">
//                      <div className="single-products">
//                         <div className="productinfo text-center">
//                            <img src="https://salt.tikicdn.com/cache/400x400/ts/product/d8/4f/f0/55ad6f5caed5d9d128756112adb852a2.jpg.webp" alt="" />
//                            <h2>65000</h2>
//                            <p>Áo trễ vai bánh bèo tiểu thư, áo trắng trần trễ vai</p>
//                            <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
//                         </div>
//                         <div className="product-overlay">
//                            <div className="overlay-content">
//                               <a href="#st">
//                                  <img src="https://salt.tikicdn.com/cache/400x400/ts/product/d8/4f/f0/55ad6f5caed5d9d128756112adb852a2.jpg.webp" alt="" />
//                                  <h2>65000</h2>
//                                  <p>Áo trễ vai bánh bèo tiểu thư, áo trắng trần trễ vai</p>
//                                  <p className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</p>
//                               </a>
//                            </div>
//                         </div>
//                      </div>
//                   </div>
//                </div>
//                <div className="col-sm-3">
//                   <div className="product-image-wrapper">
//                      <div className="single-products">
//                         <div className="productinfo text-center">
//                            <img src="https://salt.tikicdn.com/cache/400x400/ts/product/d8/4f/f0/55ad6f5caed5d9d128756112adb852a2.jpg.webp" alt="" />
//                            <h2>65000</h2>
//                            <p>Áo trễ vai bánh bèo tiểu thư, áo trắng trần trễ vai</p>
//                            <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
//                         </div>
//                         <div className="product-overlay">
//                            <div className="overlay-content">
//                               <a href="#st">
//                                  <img src="https://salt.tikicdn.com/cache/400x400/ts/product/d8/4f/f0/55ad6f5caed5d9d128756112adb852a2.jpg.webp" alt="" />
//                                  <h2>65000</h2>
//                                  <p>Áo trễ vai bánh bèo tiểu thư, áo trắng trần trễ vai</p>
//                                  <p className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</p>
//                               </a>
//                            </div>
//                         </div>
//                      </div>
//                   </div>
//                </div>
//                <div className="col-sm-3">
//                   <div className="product-image-wrapper">
//                      <div className="single-products">
//                         <div className="productinfo text-center">
//                            <img src="https://salt.tikicdn.com/cache/400x400/ts/product/d8/4f/f0/55ad6f5caed5d9d128756112adb852a2.jpg.webp" alt="" />
//                            <h2>65000</h2>
//                            <p>Áo trễ vai bánh bèo tiểu thư, áo trắng trần trễ vai</p>
//                            <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
//                         </div>
//                         <div className="product-overlay">
//                            <div className="overlay-content">
//                               <a href="#st">
//                                  <img src="https://salt.tikicdn.com/cache/400x400/ts/product/d8/4f/f0/55ad6f5caed5d9d128756112adb852a2.jpg.webp" alt="" />
//                                  <h2>65000</h2>
//                                  <p>Áo trễ vai bánh bèo tiểu thư, áo trắng trần trễ vai</p>
//                                  <p className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</p>
//                               </a>
//                            </div>
//                         </div>
//                      </div>
//                   </div>
//                </div>
//                <div className="col-sm-3">
//                   <div className="product-image-wrapper">
//                      <div className="single-products">
//                         <div className="productinfo text-center">
//                            <img src="https://salt.tikicdn.com/cache/400x400/ts/product/d8/4f/f0/55ad6f5caed5d9d128756112adb852a2.jpg.webp" alt="" />
//                            <h2>65000</h2>
//                            <p>Áo trễ vai bánh bèo tiểu thư, áo trắng trần trễ vai</p>
//                            <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
//                         </div>
//                         <div className="product-overlay">
//                            <div className="overlay-content">
//                               <a href="#st">
//                                  <img src="https://salt.tikicdn.com/cache/400x400/ts/product/d8/4f/f0/55ad6f5caed5d9d128756112adb852a2.jpg.webp" alt="" />
//                                  <h2>65000</h2>
//                                  <p>Áo trễ vai bánh bèo tiểu thư, áo trắng trần trễ vai</p>
//                                  <p className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</p>
//                               </a>
//                            </div>
//                         </div>
//                      </div>
//                   </div>
//                </div>

//             </div>
//          </div>

//       );
//    }
// }

export default ProductBySubCategory;