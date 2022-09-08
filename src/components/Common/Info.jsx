import axios from "axios";
import React, { Component } from "react";
import AppUrl from "../Api/AppUrl";
import'placeholder-loading/dist/css/placeholder-loading.css'
export default class Info extends Component {
  constructor(props){
    super(props)
    this.state={
      title:props.title,
      slug:props.slug,
      siteInfo:[],
      content:'',
      displayContent:'none',
      displayLoading:'block'
    }
  }
  loadSiteInfo(){
    axios.get(AppUrl.allsiteinfo)
    .then((response)=>{
      this.setState({
        siteInfo:response.data[0],
        content:response.data[0][this.props.slug],
        displayContent:'block',
        displayLoading:'none'
      });
    })
    .catch((error)=>{
      console.log(error)

    })
  }
  shouldComponentUpdate(props){
    if(this.state.slug!==props.slug ){
      this.setState({
        slug:props.slug,
        content:this.state.siteInfo[props.slug]
      })
      
    }
    return true;
   // return false;
  }
  componentDidMount(){
    this.loadSiteInfo();
  }
  render() {
    return (
      <div class="content">
        <div class="infopanel" style={{display: this.state.displayContent}}>
          <h2>{this.state.title}</h2>
          <div className='content' dangerouslySetInnerHTML={{__html:this.state.content}}/>
        
        
        
        </div>
        <div class="ph-item" style={{display: this.state.displayLoading}}>
    <div class="ph-col-12">
        {/* <div class="ph-picture"></div>
        <div class="ph-avata"></div> */}
        <div class="ph-col-12 big"></div>
        <div class="ph-row">
        <div class="ph-col-12"></div>
        <div class="ph-col-12"></div>
        <div class="ph-col-8"></div>
        <div class="ph-col-8"></div>
        <div class="ph-col-9"></div>
        <div class="ph-col-10"></div>
        <div class="ph-col-12"></div>
        <div class="ph-col-12"></div>
        <div class="ph-col-12"></div>
            {/* <div class="ph-col-6 big"></div>
            <div class="ph-col-4 empty big"></div>
            <div class="ph-col-2 big"></div>
            <div class="ph-col-4"></div>
            <div class="ph-col-8 empty"></div>
            <div class="ph-col-6"></div>
            <div class="ph-col-6 empty"></div> */}
            
        </div>
    </div>
</div>
      </div>
    );
  }
}
