import React, { Component } from 'react'
import { Routes,Route } from 'react-router-dom'
import HomePage from'../components/Page/HomePage'
import ContactPage from'../components/Page/ContactPage'
import InfoPage from'../components/Page/InforPage'
import ProductByCategoryPage from'../components/Page/ProductByCategoryPage'
import ProductBySubCategoryPage from '../components/Page/ProductBySubCategoryPage '
import CartPage from'../components/Page/CartPage'
import ProductByBrandPage from'../components/Page/ProductByBrandPage'
import ProductDetailsPage from'../components/Page/ProductDetailPage'
import ProductPage from'../components/Page/ProductPage'
import LoginPage from'../components/Page/LoginPage'
import RegisterPage from'../components/Page/RegisterPage'
import ProfilePage from'../components/Page/ProfilePage'
import ResetPasswordPage from'../components/Page/ResetPasswordPage'
import ForgetPasswordPage  from'../components/Page/ForgetPasswordPage'
import OrderListPage from'../components/Page/OrderListPage'
export class AppRoute extends Component {
  render() {
    return (
      <div>
        <Routes>
          <Route path='/'element={<HomePage/>}></Route>
          <Route path='/contact' element={<ContactPage/>}></Route>
          <Route path='/info' element={<InfoPage />} ></Route>
          {/* <Route path='/productbysubcategory/:category/:subcategory' element={<ProductBySubCategoryPage />} ></Route> */}
          <Route path='/productbysubcategory/:category/:subcategory' element={<ProductBySubCategoryPage />} ></Route>

          <Route path='/productbycategory/' element={<ProductByCategoryPage />} ></Route>

          {/* <Route path='/productbycategory/:category/:subcategory' element={<ProductByCategoryPage />} ></Route> */}
          <Route path='/productbybrand' element={<ProductByBrandPage />} ></Route>
          <Route path='/productdetails/:product_id' element={<ProductDetailsPage />} ></Route>
          <Route path='/product' element={<ProductPage />} ></Route>
          <Route path='/login' element={<LoginPage />} ></Route>
          <Route path='/register' element={<RegisterPage />} ></Route>
          <Route path='/profile' element={<ProfilePage />} ></Route>
          <Route path='/forgetpassword' element={<ForgetPasswordPage />} ></Route>
          <Route path='/reset/:pincode' element={<ResetPasswordPage />} ></Route>

          <Route path='/about' element={<InfoPage slug="about"/>} ></Route>
          <Route path='/policy' element={<InfoPage slug="policy"/>} ></Route>
          <Route path='/warranty' element={<InfoPage slug="warranty"/>} ></Route>

          <Route path='/cart' element={<CartPage />} ></Route>
          <Route path='/orderlist' element={<OrderListPage />} ></Route>

        </Routes>
      </div>
    )
  }
}

export default AppRoute