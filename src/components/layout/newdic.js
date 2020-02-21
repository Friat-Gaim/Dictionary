import React, { Component } from "react";
//import dic from "../dic";
import { Typography, Tag } from "antd";
import {Card} from 'react-bootstrap'
import { Row, Col, Button, Icon,Input } from "antd";
import {connect} from 'react-redux'
import {compose} from 'redux'
import {firestoreConnect} from 'react-redux-firebase'
class Dic extends Component {
    state={
        //dic:dic,
        searchvalue:'',
        result:''
    }
    searchinput=(e)=>{
        console.log('what do you do?',e.target.value)
        this.setState({searchvalue:e.target.value})
        if (e.key === 'Enter') {
            console.log('handle enterrrrrrrrrrrr',this.state.searchvalue)
       if(this.state.searchvalue){
        //  let  temp=
       //let wordbank=this.state.firestore.ordered.wordBank
       const {wordbank}=this.props;
         this.setState({result:wordbank.filter((item)=>item.WordName
          ===this.state.searchvalue)})
         console.log('result',this.state.result)
       }
       else{
        console.log('resultgggg')
       }
      
    }
    }
    render() 
    {
      console.log(this.props)
      const {wordbank}=this.props;
      if(wordbank)
        console.log('word',wordbank)
      return(
      <div>
      
      
          
            <div>        
   <div className="mt-2" style={{marginLeft:"5%",marginRight:"60%", pointer:'cursur',listStyleType: "none", overflowY: "scroll", height: 500}}>
<input 
    type="text" 
    placeholder="Enter word" 
    prefix={<Icon type="search" style={{ color: "#f57b25" }} />}
    // value={this.state.value}
    // onChange={this.handleChange} 
    onChange={this.searchinput}
    onKeyPress={this.searchinput}
/>

{this.state.result?
<div> {this.state.result.length===0?<p>Ooops...No Such Word Found!!!! </p>:<div>
    detail
    {console.log('this.state.resultthis.state.result',this.state.result)}
    {console.log('this.state.resultthis.state.result',this.state.result[0].WordName)}

<Card.Body>
    <div>
      
      <Card style={{backgroundColor:'#EEEEEE',margin:'10px',borderRadius:0}} onClick={this.clicked} >
      <Col lg={{span:6}}> <Card.Title style={{color:"red"}}>{this.state.result[0].WordName} </Card.Title> </Col>
      
     <Card.Footer style={{backgroundColor: 'grey',font:"pink"}}>
      <Row>
      <Col lg={{span:6}}><span style={{color: "pink"}} >type :</span> [{this.state.result[0].classWord}]</Col>
      </Row>
      <Row><Col lg={{span:6}}> <span style={{color: "pink"}} > discribtion :</span> {this.state.result[0].description}</Col></Row>
      <Row><Col lg={{span:6}}> <span style={{color: "pink"}}> Etymology : </span>{this.state.result[0].Etymology}</Col></Row>
      <Row><Col lg={{span:6}}> <span style={{color: "pink"}}> pronounce :</span> {this.state.result[0].pronounce}</Col></Row>
      <Row><Col lg={{span:6}}> <span style={{color: "pink"}}> Sentence :</span> {this.state.result[0].sentence}</Col></Row>
       </Card.Footer>
      </Card> 
    
  
      </div> 
      </Card.Body>}
   

    </div>
    }</div>
:
<Card.Body>
    <div>
      {wordbank && wordbank.map(item=>(
      <Card style={{backgroundColor:'#EEEEEE',margin:'10px',borderRadius:0}} onClick={this.clicked} >
      <Col lg={{span:6}}> <Card.Title style={{color:"red"}}>{item.WordName} </Card.Title> [{item.classWord}]</Col>
      
     {/* <Card.Footer>
      <Row>
      <Col lg={{span:6}}>type : {item.classWord}</Col>
      </Row>
      <Row><Col> <p> discribtion : {item.description}</p></Col>
      </Row>
       </Card.Footer>} */}
      </Card> 
    ))
  }
      </div> 
      </Card.Body>
      }
   
    </div> 
  </div>
        )
    
      
  
  </div>
      )
    }
}
const mapStateToProps=state=>{
  console.log(state);
  return{
  wordbank:  state.firestore.ordered.wordBank
}
}
export default compose(connect(mapStateToProps),
firestoreConnect([{
  collection:"wordBank",  orderBy: ['WordName', 'asc']}
  
]))(Dic);
