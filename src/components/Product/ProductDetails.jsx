import React, { Component } from 'react'
import axios from 'axios'
import AppUrl from '../Api/AppUrl'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { store } from '../../store/store';
import { AddCart } from '../../store/actions/cart';
export default class ProductDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: '',
      colors: [],
      img_1: '',
      img_2: '',
      img_3: '',
      img_4: '',
      long_description: '',
      short_description: '',
      sizes: [],
      brand: '',
      category: '',
      image: '',
      price: '',
      product_code: '',
      sale_price: null,
      star: '',
      subcategory: '',
      title: '',
      product_id: this.props.product_id,
      quantity: 1,
      unit_price: 0,
      color: '',
      size: '',
      user: this.props.user,
    }
    this.addToCartClickHandle = this.addToCartClickHandle.bind(this)
  }

  addToCartClickHandle() {
    console.log(this.state.name);
      
    store.dispatch(AddCart({
      id: this.state.product_id,name: this.state.title,
      quantity: 1, unit_price: this.state.price, image: this.state.image
    }))
    this.setState({ message: "Add to cart 1 item" })
    toast.success(this.state.message, {
      position: "top-right"
    });
  }


  //   <button onClick={this.addToCartClickHandle}>Add To Cart</button>
  // addToCartClickHandle() {
  //   if (this.state.user == null)
  //     alert('Cần dang nhap')
  //   else {
  //     var formdata = {
  //       email: this.state.user.email,
  //       image: this.state.image,
  //       product_name: this.state.title,
  //       product_code: this.state.product_code,
  //       size: this.state.size,
  //       color: this.state.color,
  //       quantity: this.state.quantity,
  //       unit_price: this.state.unit_price,
  //       total_price: this.state.quantity * this.state.unit_price
  //     }
  //     axios.post(AppUrl.addToCart, formdata).then((response) => {
  //       this.setState({ message: "Add to cart 1 item" })
  //       toast.success(this.state.message, {
  //         position: "top-right"
  //       });
  //     })
  //       .catch((error) => {
  //         this.setState({ message: error.response.data.message })
  //         toast.error(this.state.message, {
  //           position: "top-right"
  //         });
  //       })
  //   }
  // }

  componentDidMount() {

    var data = AppUrl.productdetails(this.state.product_id);
    // var data = AppUrl.productdetails + '/' + this.state.product_id;
    axios.get(data)
      .then((response) => {
        var productdetails = response.data.productDetail[0];
        var productlist = response.data.product[0];
console.log(response);
        this.setState({
          colors: productdetails.color.split(","),
          img_1: productdetails.img_1,
          img_2: productdetails.img_2,
          img_3: productdetails.img_3,
          img_4: productdetails.img_4,
          long_description: productdetails.long_description,
          short_description: productdetails.short_description,
          sizes: productdetails.size.split(","),
          brand: productlist.brand,
          category: productlist.category,
          image: productlist.image,
          price: productlist.price,
          product_code: productlist.product_code,
          sale_price: productlist.sale_price === 0 ? null : productlist.sale_price,
          star: productlist.star,
          subcategory: productlist.subcategory,
          title: productlist.name,
          size: productdetails.size.split(",")[0],
          color: productdetails.color.split(",")[0],
          unit_price: (productlist.sale_price == null) ? productlist.sale_price : productlist.price
        })

      })

      .catch((error) => {
        console.log(error);
      })
  }

  render() {
    var myviewcolors = this.state.colors.map((color) => {
      return (
        <option value={color} key={color}>{color}</option>
      )
    })
    var myviewsizes = this.state.sizes.map((size) => {
      return (
        <option value={size} key={size}>{size}</option>
      )
    })
    return (
      <div className="container">
        <div className="col-lg-10 border p-3 main-section bg-white">
          <div className="row m-0">
            <div className="col-md-5 left-side-product-box pb-3">
              <img src={this.state.image} className="border p-3" />
              <span className="sub-img">
                <img src={this.state.img_1} className="border p-2" alt-text="" />
                <img src={this.state.img_2} className="border p-2" alt-text="" />
                <img src={this.state.img_3} className="border p-2" alt-text="" />
                <img src={this.state.img_4} className="border p-2" alt-text="" />

              </span>
            </div>
            <div className="col-md-7">
              <div className="right-side-pro-detail border p-3 m-0">
                <div className="row">
                  <div className="col-lg-12">

                    <p className="m-0 p-0">{this.state.title}</p>
                  </div>

                  <div className="col-lg-12">
                    {this.state.sale_price != null ?
                      <p className="m-0 p-0 price-pro">{this.state.sale_price} <del>{this.state.price}</del></p>
                      : <p className="m-0 p-0 price-pro">{this.state.price}</p>

                    }<hr className="p-0 m-0" />
                  </div>
                  <div className="col-lg-12 pt-2">
                    BRAND: {this.state.brand}<br />
                    PRODUCT CODE: {this.state.product_code}<br />

                  </div>
                  <div className="col-lg-12 pt-2">
                    <h5>Product Detail</h5>

                    {this.state.short_description}
                    <div>
                      {this.state.long_description}
                    </div>

                  </div>
                  <div className="col-lg-12">
                  </div>
                  <div className="col-lg-12">
                    <h6>Quantity :</h6>
                    <input type="number" className="form-control text-center w-100" defaultValue={1} onChange={(e) => this.setState({ quantity: e.target.value })} />
                  </div>
                  <div className="col-lg-12">
                    <h6>Color :</h6>
                    <select onChange={(e) => this.setState({ color: e.target.value })}>
                      {myviewcolors}
                    </select>
                  </div>
                  <div className="col-lg-12">
                    <h6>Size :</h6>
                    <select onChange={(e) => { this.setState({ size: e.target.value }) }}>
                      {myviewsizes}
                    </select>
                  </div>
                  <div className="col-lg-12">
                    <div className="row">
                      <div className="col-lg-6 ">
                        <button className=" addtocartbutton btn btn-danger w-100" onClick={this.addToCartClickHandle}>Add To Cart</button>
                      </div>

                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    )
  }
}


