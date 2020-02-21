import React, { Component } from 'react'
import addword from  '../../store/action/addWordAction'
import {connect} from 'react-redux';
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import Navbar from '../layout/Navbar'
import { Input } from 'antd';
class Addword extends Component {
    state={
        WordName:'',
        classWord:'',
        Etymology:'',
        pronounce:'',
        description:'',
        sentence:[],
        error:''
    }
    handelChange=(e)=>{
      this.setState({
        [e.target.id]:e.target.value,
        })
    }
   handleSubmit=(e)=>{
        e.preventDefault();
        const { word } = this.props;
        console.log('from field',this.state.WordName)
        console.log('from field',this.props.word)
        this.props.word.map((item)=>{
            console.log('cdcd',item)
        })
       if(this.props.word){
        let result=this.props.word.filter((item)=>item.WordName===this.state.WordName)
       
        console.log('result',result)
        if(result.length!==0){
            this.setState({error:"word is already existed !!!!"})
            console.log('word already exist')
        } else{
            this.props.addword(this.state)
            const notification="this word is added"
            console.log("GFFFFFFFFFF",notification)
            //this.props.history.push('/homepage');
            this.setState({state:{}})
       }
       }
    }
   render() {
    const styles = {
        position:"center",
        color:'#4169E1',
        fontFamily:'Times New Roman Times serif',
        lineHeight:'1.5', 
        fontweight:'30',
        fontSize:'20px',
      }
      return (
     <div>
         <Navbar/>
         <section>
             <div class="container">
             <h2 style={styles}  style={{textAlign:"center",fontFamily:"Times New Roman Times serif",fontWeight:"bold",fontSize:"24px"}}>Insert New Words To The Dictionary</h2>
             <div class="row">{this.state.error}</div>
             <form class="card p-5 mt-4">
                <div>
                <div class="row">
                    <div class="col-sm-6 form-group">
                        <label style={styles}>Name of word</label><br/>
                        <input type="text" class="form-control form input"
                                onChange={this.handelChange.bind(this)} id="WordName" placeholder="Write the word" required/>
                    </div>
                    <div class="col-sm-6 form-group">
                        <label style={styles}>Class of word</label><br/>
                        <input type="text" class="form-control form input"
                                onChange={this.handelChange.bind(this)} id="classWord" placeholder="Enter Class of word" required/>
                    </div>
                 </div>
                 <div class="row">
                    <div class="col-sm-6 form-group">
                        <label style={styles}>Etymology of word</label><br/>
                        <input type="text" class="form-control form input"
                                onChange={this.handelChange.bind(this)} id="Etymology" placeholder="Enter Etymology Word" required/>
                    </div>
                    <div class="col-sm-6 form-group">
                        <label style={styles}>Pronounce of word</label><br/>
                        <input type="text" class="form-control form input"
                                onChange={this.handelChange.bind(this)}   id="pronounce" placeholder="Enter Pronouncement" required/>
                    </div>
                 </div>
                 <div class="row">
                    <div class="col-sm-6 form-group">
                        <label style={styles}>Description of word</label><br/>
                        <input type="text" class="form-control form input"
                                    onChange={this.handelChange.bind(this)}   id="description" placeholder="Enter Description" required/>
                    </div>
                    <div class="col-sm-6 form-group">
                        <label style={styles}>Write sentence using this word</label><br/>
                        <input type="text" class="form-control form input"
                            onChange={this.handelChange.bind(this)}  id="sentence" placeholder="Enter Sentence of Word"/>
                    </div>
                 </div>
                 <div class="row">
                     <div class="col-7"></div>
                 <button type="button" onClick={this.handleSubmit.bind(this)} class="btn btn-success px-4 mt-4">Add</button>
                 </div>
                </div>
             </form>
             </div>
         </section>   
</div>
        );
    }
}
const mapStateToProps = state => {
    console.log("state.firestore.ordered.wordBank",state.firestore.ordered.wordBank)
    return {
      auth: state.firebase.auth,
      word:state.firestore.ordered.wordBank,
    };
  };
  const mapDispatchToProps = dispatch => {
    return { addword: words => dispatch(addword(words)) };
  };
   
  export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
      {
        collection: "wordBank"
      }
    ])
  )(Addword);