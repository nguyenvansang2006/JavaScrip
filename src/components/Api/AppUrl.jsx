import React, { Component } from 'react'

export class AppUrl extends Component {
    static BaseURL = "http://ecomlaravel.test:88/api/";
    static getvisitor = this.BaseURL + "getvisitor";
    static postcontact = this.BaseURL + "postContact";
    static allsiteinfo = this.BaseURL + "allSiteInfo";
    static allcategories = this.BaseURL + "allCategories";
    static AllSliders = this.BaseURL + "allSliders";
    static productsbyremark = this.BaseURL + "productsByRemark";
    static productsbysubcategory = this.BaseURL + "productsBySubCategory";
    static productsbycategory = this.BaseURL + "productsByCategory";
    static productdetails = (id) => { return this.BaseURL + "productDetail/" + id; }
 
    static login = this.BaseURL + "login"
    static userdata = this.BaseURL + "userdata"
    static register = this.BaseURL + "register"
    static forgetpassword = this.BaseURL + "forgetpassword"
    static resetpassword = this.BaseURL + "resetpassword"
 
    static addToCart = this.BaseURL + "addtocart"
    static CartList(email) {
       return this.BaseURL + "cartlist/" + email;
    }
    static RemoveCartList(id) {
       return this.BaseURL + "removecartlist/" + id;
    }
    static CartItemPlus(id, quantity, price) {
       return this.BaseURL + "cartitemplus/" + id + "/" + quantity + "/" + price;
    }
    static CartItemMinus(id, quantity, price) {
       return this.BaseURL + "cartitemminus/" + id + "/" + quantity + "/" + price;
    }
    static CartItemCountChange(id, quantity, price) {
       return this.BaseURL + "cartitemcountchange/" + id + "/" + quantity + "/" + price;
    }
    static CartOrder = this.BaseURL + "cartorder"
    static OrderList = this.BaseURL + "orderlist"
    static OrderListByUser(email) {
       return this.BaseURL + "orderListByUser/" + email;
    }
 }
 

export default AppUrl