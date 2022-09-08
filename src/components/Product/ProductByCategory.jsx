import axios from 'axios'
import React, { Component } from 'react'
import AppUrl from '../Api/AppUrl'
import { Link } from 'react-router-dom'

class ProductByCategory extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: [],
    }
  }
  changecontent() {
    var d = AppUrl.productsbycategory + '/' + this.props.category + '/' + this.props.subcategory;
    axios.get(d)
      .then((response) => {
        this.setState({
          products: response.data,
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }
  componentDidMount() {
    this.changecontent()
  }
  componentDidUpdate(PrevProps) {
    if (this.props.category != PrevProps.category || this.props.subcategory != PrevProps.subcategory)
      this.changecontent()
    return true
  }
  render() {
    console.log('render')
    var products = this.state.products;
    var myview = products.map((product, j) => {
      return (
        <div className="col-sm-3" key={j}>
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

export default ProductByCategory
