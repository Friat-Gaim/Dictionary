import React,{Component} from 'react'
import{Redirect,Link} from 'react-router-dom'
import { connect } from 'react-redux'
import home from './rewina.jpg'
import Logo from './Dictionary_Logo.png'
import Navbar from '../layout/Navbar';
import { Carousel } from 'react-responsive-carousel';
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
      <div>
      <div class="row mx-1">
          <div class="col card" style={{height:'520px'}}>
            <p class="font-weight-bold text-center">If there is new word Add to this web app</p>
            <Link to="/addword" >
              <button type="button" class="ml-5 btn btn-success">Click Here to New Add Word</button>
            </Link>
          </div>
          <div class="col card ">
           <p class="font-weight-bold text-center">English Dictionary for Begnners</p>
           <p class="text-center">Search More Word to Know More</p>
           <image src="./Dictionary_Logo"></image>
           <p class="text-center">ዘነበብ ይዕንብብ፡the most reader is fruit full</p>
          </div>
          <div class="col card" style={{height:'520px'}}>
            <p class="font-weight-bold text-center textcolor-primary">If there is new word Add to this web app</p>
            <Link to="/addword" >
            <button type="button" class="btn btn-success ml-5"> Click Here to Sereach Word</button>
            </Link>
          </div>
        </div>
          <div class="mb-2">                            
                <footer><p class="text-center">English dictionary, Anginners.com @ copy right</p></footer>
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
