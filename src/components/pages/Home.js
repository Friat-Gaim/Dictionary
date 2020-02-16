import React,{Component} from 'react'
import{Redirect,Link} from 'react-router-dom'
import { connect } from 'react-redux'
import home from './rewina.jpg'
import Logo from './Dictionary_Logo.png'
import Navbar from '../layout/Navbar';
import { Carousel } from 'react-responsive-carousel';
//import  Link from 'react-router-dom'
//import { Row, Col,Form, Button} from 'react-bootstrap';
//import { Typography, Input} from 'antd';
//const {Title,Text}=Typography
const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
class HomePage extends Component{
render(){
    // const { authError,auth,profile } = this.props;
    // if(auth.uid&&profile.userType==='Admin') return<Redirect to='/addword'/>
    // else if(auth.uid&&profile.userType==='user') return<Redirect to='/showword'/>
    return(<>
    <Carousel responsive={responsive} autoPlay="true" infinite="true" autoPlaySpeed='6000' ></Carousel>

    <Navbar/>
      <div class="container py-1 slider-item" style={{height:'800px'}}>
      {/* <div class="slider-item" style={{height:'800px',backgroundImage: `url(${home})`}}>
      <a className="ml-2" href="#/addword" style={{color:'#f57b25'}}>Click Here</a> */}
          <div class="row py-2">
           <div className="col-3" style={{marginTop:'20px', paddingLeft:'10px'}} >
              <Link class="mx-2 p-1 " to="/addword" >
                <button type="button">Click Here to New Add Word</button>
              </Link>
          </div>
          <div className="col-9" style={{paddingLeft:'10px'}}>
           <p class="font-weight-bold text-center-primary" style={{textAlign:"center",fontWeight:"bold"}}>English Dictionary for Begnners</p>
           <p class="" style={{textAlign:"center",fontWeight:"bold"}}>Search More Word to Know More</p>
          </div>
          <div className="col-2" style={{paddingLeft:'10px'}}>
            <Link className="p-1" to="/addword" >
            <button type="button" class="btn btn-success px-4 float-right"> Click Here to Sereach Word</button>
            </Link>
          </div>
          </div>
      </div>

   </> )
}
}
const mapStateToProps = (state) => {
    return{
      //auth:state.firebase.auth,
      profile:state.firebase.profile
    }
  }
  
 
  
  export default connect(mapStateToProps)(HomePage)
