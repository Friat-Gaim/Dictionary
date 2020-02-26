import React,{Component} from 'react'
import{Redirect,Link} from 'react-router-dom'
import { connect } from 'react-redux'
import Logo from '../img/books.PNG'
import home from '../img/homeimage.PNG'
import reader from '../img/night.PNG'
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
          <div class="col card" style={{height:'540px'}}>
            <img class="img-fluid mb-4 mt-3" src={Logo} alt="home image" style={{height:'400px'}}/>
            <p class="ml-5">If there is new word Add to this</p>
            <Link to="/addword" >
              <button type="button" class="ml-5 mb-2 btn btn-success">Click Here to New Add Word</button>
            </Link>
          </div>
          <div class="col card ">
            <p class="font-weight-bold text-center">English Dictionary for Begnners</p>
            <p class="">The Oxford English Dictionary (OED) is widely regarded as the accepted authority on the English language. It is an unsurpassed guide to the meaning, history, 
              and pronunciation of 600,000 words— past and present—from across the English-speaking world.
            </p>
            <p>
              As a historical dictionary, the OED is very different from dictionaries of current English, in which the focus is on present-day meanings. You’ll still find present-day meanings in the OED, but you’ll also find the history of individual words, and of the language—traced
              through 3 million quotations, from classic literature and specialist periodicals to film scripts and cookery books.
            </p>
            <p>
              The OED started life more than 150 years ago. Today, the dictionary is in the process of its first major revision. Updates revise
              and extend the OED at regular intervals, each time subtly adjusting our image of the English language.
            </p>
           <p class="text-center mb-1 text-success">ዘነበብ ይዕንብብ፡the most reader is fruit full</p>
           {/* <img class="img-fluid " src={home} alt="home image" style={{height:'400px'}}/> */}
          </div>
          <div class="col card" style={{height:'540px'}}>
            <img class="img-fluid mb-4 mt-3" src={reader} alt="home image" style={{height:'400px'}}/>
            <p class="ml-5">If there is new word Search in this</p>
            <Link to="/addword" >
            <button type="button" class="btn btn-success ml-5 mb-2"> Click Here to Sereach Word</button>
            </Link>
          </div>
        </div>
          <div class="mb-2">                            
                <footer><p class=" text-center text-warning">English dictionary, Anginners.com @ copy right</p></footer>
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
