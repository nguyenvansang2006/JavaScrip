import React, { Component } from 'react';
import Footer from '../Common/Footer';
import Header from '../Common/Header';

class OrderListPage extends Component {
    render() {
        return (
            <div class="container">
                <Header/>
                <div class="section-title text-center mb-55">
                    <h2>Order History </h2>
                </div>
                <div class="card">
                    <div class="card-body">
                        <div class="row">
                            <div>
                                <div>
                                    <h5 class="product-name">MaiShop-1648977403469</h5>
                                    <h5 class="product-name">Áo Phông Polo Nữ YODY Tay Ngắn Phối Bo Chất Liệu Pique M</h5>
                                    <h6> Quantity = 1 </h6>
                                    <p>XS | pink</p>
                                    <h6>Price = 165000 x 1 = 165000$</h6>
                                    <h6>Status = Pending </h6>
                                    <p>03-04-2022 | 04:16:44pm</p>
                                </div>
                                <button class="btn btn-danger">Post Review </button>
                                <hr />
                            </div>
                            <div>
                                <div>
                                    <h5 class="product-name">MaiShop-1648977403469</h5>
                                    <h5 class="product-name">Áo Phông Polo Nữ YODY Tay Ngắn Phối Bo Chất Liệu Pique M</h5>
                                    <h6> Quantity = 1 </h6>
                                    <p>XS | pink</p>
                                    <h6>Price = 165000 x 1 = 165000$</h6>
                                    <h6>Status = Pending </h6>
                                    <p>03-04-2022 | 04:16:44pm</p>
                                </div>
                                <button class="btn btn-danger">Post Review </button>
                                <hr />
                            </div>
                            <div>
                                <div>
                                    <h5 class="product-name">MaiShop-1648891316601</h5>
                                    <h5 class="product-name">Áo trễ vai bánh bèo tiểu thư, áo trắng trần trễ vai</h5>
                                    <h6> Quantity = 1 </h6>
                                    <p>XS | red</p>
                                    <h6>Price = 65000 x 1 = 65000$</h6>
                                    <h6>Status = Pending </h6>
                                    <p>02-04-2022 | 04:21:57pm</p>
                                </div>
                                <button class="btn btn-danger">Post Review </button>
                                <hr />
                                <Footer/>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default OrderListPage;