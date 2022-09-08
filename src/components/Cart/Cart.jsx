import React, { Component } from "react";
import { store } from "../../store/store";
import AppUrl from "../Api/AppUrl";
import axios from "axios";
import { DeleteCart } from "../../store/actions/cart";
import { UpdateCart } from "../../store/actions/cart";
import{IncreaseQuantity,DecreaseQuantity} from"../../store/actions/cart";
import { Link } from "react-router-dom";
export class Cart extends Component {

  constructor() {
    super();
    this.state = {
    carts: [],
    cartNumber: 0,
    userId:'',
    phone: "",
    name: "",
    email:'',
    delivery_address: "",
    }
    store.subscribe(() => {
    this.loadDataCart() 
    });
  }
    loadDataCart() {
    var numberCart = store.getState().numberCart;
    var carts = store.getState().cart.carts;
    console.log(carts);
    this.setState({ numberCart: numberCart,carts:carts });
    }
    nameOnChange = (event) => {
      let name = event.target.value;
      this.setState({ name: name })
      }
      
      addressOnChange = (event) => {
      let delivery_address = event.target.value;
      this.setState({ delivery_address: delivery_address })
      }
      phoneOnChange = (event) => {
      let phone = event.target.value;
      this.setState({ phone: phone })
      }
     
      emailOnChange = (event) => {
        let email = event.target.value;
        this.setState({ email: email })
      }
  componentDidMount(){
    this.loadDataCart();
    if (localStorage.getItem('token')) {
      //Lay du lieu cua user
      let config={
        headers: {
          Authorization:'Bearer ' + localStorage.getItem('token')
        }
      }
      axios.get(AppUrl.userdata, config).then(response =>{
      var userData = response.data
      this.setState({
      id:userData.id,
      name: userData.name,
      email: userData.email
      })
      });
  }
}

  render() {
    const myList = this.state.carts;
    let totalPriceSum = 0, totalItem = 0;
    const myView=myList.map((product, i)=>{
    totalPriceSum = totalPriceSum + parseInt(product.quantity*product.unit_price)
    totalItem = totalItem + parseInt(product.quantity)

    
      return(
        <div key={i} className="p-1 col-lg-12 col-md-12 col-sm-12 col-12">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                <img src={product.image} style={{width: '120px', height: '120px', margin: '5px'}}/>
              </div>
              <div className="col-lg-5 col-md-5 col-sm-6 col-6">
                <h5 className="product-name">{product.name}</h5>
               
                <h6> Quantity = {product.quantity}</h6>
                <h6>{product.unit_price} x {product.quantity} = {product.unit_price*product.quantity}$</h6>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-6 col-6">
                <input value={product.quantity} onChange={(e) => { let quantity = e.target.value; 
                { store.dispatch(UpdateCart({id:product.id, quantity:quantity})) } }} placeholder={product.quantity} className="form-control text-center" type="number" min='1' max='10'/></div>
              {/* <div className="col-lg-2 col-md-2 col-sm-6 col-6"><button type="button" className="btn site-btn"><i className="fa fa-plus"></i>{" "}</button> */}
                

              <button type="button" onClick={() => store.dispatch(IncreaseQuantity(product.id))} className="btn site-btn"><i className="fa fa-plus" min='1' max='10'></i> </button>
              <button type="button" onClick={() => store.dispatch(DecreaseQuantity(product.id))} className="btn site-btn"><i className="fa fa-minus" min='1' max='10'></i> </button>
              
              <button type="button" onClick={() => store.dispatch(DeleteCart(i))}className="btn site-btn"><i className="fa fa-trash" /> Remove </button>

                
                {/* <button type="button" className="btn site-btn">
                  <i className="fa fa-minus"></i>{" "}
                </button>
                <button type="button" className="btn site-btn">
                  <i className="fa fa-trash"></i> Remove{" "}
                </button> */}
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
      )
    })
    return (
      <div >
        <div className="container">
      <div style={{ display: 'block' }}>
        <div className="section-title text-center mt-55 mb-55">
          <h2>Product Cart List</h2>
        </div>
        <div className="row">
         {myView}
          
        </div>
        <div>
          <div className="col-lg-8 col-md-8 col-sm-6 col-6 "></div>
          <div className="col-lg-4 col-md-4 col-sm-6 col-6 ">
          <h5> Total Item = {totalItem} </h5>
          <h5>Total Price = {totalPriceSum}$</h5>
          </div>
        </div>
        </div>
      
      <div className="row mt-3">
        <h2 className="mt-3"> ORDER INFORMATION </h2>
        <div className="col-lg-8 col-md-8 col-sm-6 col-6">
        <div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12"><label className="form-label">Your Name</label><input className="form-control" type="text" value={this.state.name} placeholder={this.state.name}   onChange={this.nameOnChange} /></div>
        <div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12"><label className="form-label">Email</label><input className="form-control" type="email" value={this.state.email} placeholder={this.state.email} onChange={this.emailOnChange} /></div>
        <div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12"><label className="form-label">Phone Number</label><input className="form-control" type="text" value={this.state.phone} onChange={this.phoneOnChange} /></div>
        <div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12"><label className="form-label">Delivery Address</label><textarea rows={2} className="form-control" type="text" onChange={this.addressOnChange} value={this.state.delivery_address} /></div>
        <div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12"><button type="button" className="btn btn-block w-100 mt-3 site-btn btn btn-primary">Confirm Order</button></div>
        </div>
        </div>

      
      <h2>Thank you for your Ordermation.</h2>
      <a href="/orderlist"><button className="btn btn-primary"> See All Your Orders</button></a>
    </div>
    </div>
    );
  }
}
