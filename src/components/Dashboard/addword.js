import React, { Component } from 'react'
import addword from  '../../store/action/addWordAction'
import {connect} from 'react-redux';
import { firestoreConnect } from "react-redux-firebase";
import Navbar from '../layout/Navbar'
import {Redirect} from 'react-router-dom'
import fbConfig from'../../config/fbConfig';
class Addword extends Component {
    state={
        WordName:'',
        classWord:'',
        Etymology:'',
        pronounce:'',
        description:'',
        sentence:[]
      }
    handelChange=(e)=>{
      this.setState({
        [e.target.id]:e.target.value,
        })
     }
   handleSubmit=(e)=>{
    //e.preventDefault();
    this.props.addword(this.state)
    const notification="this word is added"
    console.log("word added",this.state.notification)
    this.props.history.push('/addword');
}
   render() {
    const { words } = this.props;
    console.log(words)
    const styles = {
        position:"center",
        color:'#000',
        fontFamily:'poppins,Arial,sans-serif',
        lineHeight:'1.5', 
        fontweight:'30',
        fontSize:'20px'
      }
      const forminput={
        bordercolor:"#0e97d8",
        borderradius: "2px"
      }
      return (
     <div>
         <Navbar/>
        <section class="ftco-section contact-section" >
            <div class="container-JP">
            <div class="row">
                <div class="col-md-10 mx-auto bg-white" >
                    <h2 style={styles}  style={{textAlign:"center",fontFamily:"Times New Roman Times serif",fontWeight:"bold",fontSize:"24px"}}>Insert New Words To The Dictionary</h2>
                    <p>{this.props.notification}</p>
                    <form class="form" style={{backgroundColor:"white"}}>
                    <div class="form-group row">
                        <div class="col-sm-6">
                            <label  style={styles}>Name of word</label>
                            <input type="text"  onChange={this.handelChange}  style={forminput} id="WordName" placeholder="Write the word" 
                            />
                        </div>
                        <div class="col-sm-6">
                            <label for="inputmarketName" style={styles}>Class of word</label>
                            <input type="text" onChange={this.handelChange}  style={forminput} id="classWord" placeholder="Enter Class of word"
                            />
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-sm-6">
                            <label  style={styles}>Etymology of word</label>
                            <input type="text"  onChange={this.handelChange}  style={forminput} id="Etymology" placeholder="Enter Etymology Word"
                            
                            />
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-sm-6">
                            <label  style={styles}>Pronounce of word</label>
                            <input type="text"  onChange={this.handelChange}  style={forminput} id="pronounce" placeholder="Enter Pronouncement "
                            />
                        </div>
                    </div>
                        <div class="form-group row" style={styles}>
                            <div class="col-sm-6">
                                <label  style={styles}>Description of word</label>
                                <input type="text" onChange={this.handelChange}  style={forminput} id="description" placeholder="Enter Description"

                                />
                            </div>
                            
                        </div>
                        <div class="form-group row" style={styles}>
                            <div class="col-sm-6">
                                <label  style={styles}>Write sentence using this word</label>
                                <input type="text" onChange={this.handelChange} style={forminput} id="sentence" placeholder="Enter Sentence of Word"

                                />
                            </div>
                            <div class="col-sm-6">
                        
                            </div>
                        </div>
                        <button type="button" onClick={this.handleSubmit} class="btn btn-primary px-4 float-right">Add</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
</div>
        );
    }
}
const mapStateToProps = state => {
    return {
      auth: state.firebase.auth,
      words:state.firestore.ordered.wordBank,
    };
  };
  const mapDispatchToProps = dispatch => {
    return { addword: words => dispatch(addword(words)) };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Addword);