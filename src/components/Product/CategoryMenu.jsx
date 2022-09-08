import React, { Component } from 'react';
import axios from 'axios';
import AppUrl from '../Api/AppUrl';
import { Link } from 'react-router-dom';
class CategoryMenu extends Component {
   constructor(){
      super();
      this.state={
         categoryArray: []
      }
   }
   getData(){
      axios.get(AppUrl.allcategories)
      .then((response) =>{
         var data= response.data;
         this.setState({
            categoryArray: data
         })
      })
      .catch((error)=>{

      })
   }
   componentDidMount(){
      this.getData();
   }
   render() {
      var categoryArray=this.state.categoryArray;
      var myview=categoryArray.map((category, i)=>{
        return (
        
            <div className="panel panel-default" key={i}>
             
              <div className="panel-heading">
                
                <h4 className="panel-title"><a data-toggle="collapse" data-parent="#accordian" href={"#id" + i}><span className="badge pull-right"><i className="fa fa-plus" /></span>{category.catname}</a>
                </h4>
              </div>
              <div id={"id" + i} className="panel-collapse collapse">
                <div className="panel-body">
                  <ul>
                    {
                    category.subcategories.map((subcategory, j) => {
                      return (
                        // <li key={j}><Link to="#st">{subcategory.subcatname}</Link></li>
                        <li key={j}><Link to={"/productbysubcategory/" + subcategory.catname + '/' + subcategory.subcatname}>{subcategory.subcatname} </Link></li>
                      )}
                    )}
                  </ul>
                </div>
              </div>
            </div>
          )
        })
        return (
          <div>
           
          <div className="panel-group category-products" id="accordian">
            {myview}
          </div>
          </div>
        )
      }
    }
    

export default CategoryMenu;