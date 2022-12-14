import React, { Component } from "react";
import { Link } from "react-router-dom";
import ContactPage from "../Others/Contact";

export class Header extends Component {

   render() {


      return (
         <header id="header">

            <div className="header_top">
               <div className="container">
                  <div className="row">
                     <div className="col-sm-6">
                        <div className="contactinfo">
                           <ul className="nav nav-pills">
                              <li><a href="#"><i className="fa fa-phone"></i> 1414141414</a></li>
                              <li><a href="#"><i className="fa fa-envelope"></i> info@domain.com</a></li>
                           </ul>
                        </div>
                     </div>
                     <div className="col-sm-6">
                        <div className="social-icons pull-right">
                           <ul className="nav navbar-nav">
                              <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                              <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                              <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                              <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                              <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="header-middle">
               <div className="container">
                  <div className="row">
                     <div className="col-sm-4">
                        <div className="logo pull-left item">Logo</div>
                     </div>
                     <div className="col-sm-8">
                        <div className="shop-menu pull-right">
                           <ul className="nav navbar-nav">
                             
                              <li><Link to='/cart'><i className="fa fa-shopping-cart"></i> Cart</Link></li>
                              {!localStorage.getItem("token")? <><li><Link to='/login'><i className="fa fa-lock"></i> Login</Link></li><li><Link to='/register'><i className="fa fa-sign-in"></i> Register</Link></li></>: null}
                              
                              
                              <li><Link to='/profile'><i className="fa fa-user"></i> Profile</Link></li>
                              <li><Link onClick={() => {
                                 localStorage.removeItem('token');

                              }} to='/'><i className="fa fa-sign-out"></i> Logout</Link></li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="header-bottom">
               <div className="container">
                  <div className="row">
                     <div className="col-sm-9">
                        <div className="navbar-header"><button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse"><span className="sr-only">Toggle navigation</span><span className="icon-bar"></span><span className="icon-bar"></span><span className="icon-bar"></span></button></div>
                        <div className="mainmenu pull-left">
                           <ul className="nav navbar-nav collapse navbar-collapse">
                              <li><Link to='/'>Home</Link></li>
                              <li><Link to='/product'>Products</Link></li>
                              <li><Link to='/about'>About us</Link></li>
                              <li><Link to='/policy'>Policy</Link></li>
                              <li><Link to='/warranty'>Warranty</Link></li>
                              <li><Link to='/contact'>Contact</Link></li>
                           </ul>
                           {/* <form class="form-inline mt-2 mt-md-0" method="get" action="search.html">
                    <input class="form-control mr-sm-2" type="text" placeholder="T??m ki???m" aria-label="Search"
                        name="keyword_tensanpham"/>
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">T??m ki???m</button>
                </form> */}
                        </div>
                     </div>
                     <div className="col-sm-3">
                        <div className="search_box pull-right"><input type="text"  placeholder="Search" /></div>
{/* <div class="row">
                    <div class="col-sm-4">
                        <p>B??? l???c </p>
                        <div class="card">
                            
                            <div class="card-group-item">
                                <header class="card-header">
                                    <h6 class="title">T??n s???n ph???m </h6>
                                </header>
                                <div class="filter-content">
                                    <div class="card-body">
                                        <input class="form-control" type="text" placeholder="T??m ki???m"
                                            aria-label="Search" name="keyword_tensanpham" value=""/>
                                    </div> 
                                </div>
                                </div>
                                </div>
                                </div> */}




{/*                    

                    <ul id="myUL">
          <li><a href="#">Athens</a></li>
          <li><a href="#">Amsterdam</a></li>
          <li><a href="#">Atlanta</a></li>
          <li><a href="#">Alaska</a></li>
          <li><a href="#">Barcelona</a></li>
          <li><a href="#">Bologna</a></li>
          <li><a href="#">Berlin</a></li>
          <li><a href="#">Bordeaux</a></li>
          <li><a href="#">Copenhagen</a></li>
          <li><a href="#">Cardiff</a></li>
          <li><a href="#">Caen</a></li>
          <li><a href="#">Cannes</a></li>
        </ul> */}
                     </div>
                  </div>
               </div>
            </div>
         </header>
      );

      // // l???y th??? input
      // var input = document.getElementById("myInput");
      // // ?????nh ngh??a h??m x??? l?? myFunction
      // function myFunction() {
      //     var filter, ul, li, a, i;
      //     // l???y gi?? tr??? ng?????i d??ng nh???p
      //     filter = input.value.toUpperCase();
      //     ul = document.getElementById("myUL");
      //     li = ul.getElementsByTagName("li");
      //     // N???u filter kh??ng c?? gi?? tr??? th??? ???n ph???n k???t quare\
      //     if (!filter) {
      //       ul.style.display = "none";
      //     }else{
      //       // l???p qua t???t c??? c??c th??? li ch???a k???t qu???
      //       for (i = 0; i < li.length; i++) {
      //           // l???y th??? a trong c??c th??? li
      //           a = li[i].getElementsByTagName("a")[0];
      //           // ki???m tra gi?? tr??? nh???p c?? t??n t???i trong n???i dung th??? a
      //           if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      //             //n???u c?? hi???n th??? ph??n t??? ul v?? c??c th??? li ????
      //               ul.style.display = "block";
      //               li[i].style.display = "";
      //           } else {
      //             // n???u kh??ng ???n c??c th??? li
      //               li[i].style.display = "none";

      //           }
      //       }
      //     }
      // }
      // //g??n s??? ki???n cho th??? input
      // input.addEventListener("keyup", myFunction);
 
   }
}

export default Header;
