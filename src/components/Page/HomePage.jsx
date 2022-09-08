import React, { Component } from "react";
import Footer from "../Common/Footer";
import Header from "../Common/Header";

import Featured from "../Home/Featured";
import NewArrival from "../Home/NewArrivel";
import Slider from "../Home/Slider";
export class HomePage extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Slider />
        <NewArrival />
        <Featured />
        <Footer/>
      </div>
    );
  }
}
export default HomePage;