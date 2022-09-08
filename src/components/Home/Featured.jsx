import React, { Component } from "react";
import AppUrl from "../Api/AppUrl";
import axios from 'axios'
import { Link } from "react-router-dom";
export class Featured extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }
  componentDidMount() {
    axios
      .get(AppUrl.productsbyremark + "/featured")
      .then((response) => {
        this.setState({
          products: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    console.log(this.state.products);
    return (
      <div className="features_items">
        <h2 className="title text-center">Featured</h2>
        {this.state.products.map((product) => (
          <div className="col-sm-3">
            <div className="product-image-wrapper">
              <div className="single-products">
                <div className="productinfo text-center">
                  <img src={product.image} alt="" />
                  <h2>{product.price}</h2>
                  <p>{product.name}</p>
                  <Link
                    to={`/productdetail/${product.id}`}
                    className="btn btn-default add-to-cart"
                  >
                    <i className="fa fa-shopping-cart" />
                    Add to cart
                  </Link>
                </div>
                <div className="product-overlay">
                  <div className="overlay-content">
                  <Link to= {"/productdetails/" + product.id}>
                      <img src={product.image} alt="" />
                      <h2>{product.price}</h2>
                      <p>{product.name}</p>
                      <p className="btn btn-default add-to-cart">
                        <i className="fa fa-shopping-cart" />
                        Add to cart
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}


export default Featured;
