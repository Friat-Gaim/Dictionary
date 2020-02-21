import React, { Component } from "react";
//import {Header} from '../LandingPage/pages'
// import Navbar from "./components/layout/Navbar";
import { Typography, Tag } from "antd";
import {Card} from 'react-bootstrap'
import { Row, Col, Button, Icon,Input } from "antd";
//import users from "./usr";
import dic from "./dic";
// import { blue } from "@material-ui/core/colors";
const { Text, Title } = Typography;

class dictionary extends Component {
  state={
    dic:dic,
    selectedDic:null,
    search:'',flag:0,
    searcvalue:'',
    result:''
}
  clicked=()=>{
    console.log('object')
    if(this.state.selectedUser){
      this.setState({selectedDic:null})}
      else{
        this.setState({selectedDic:dic})
      
      }
    this.setState({flag:1})

  }
  Search=(event)=>{
      console.log('jkknkjnkjk',event.target.value)
    this.setState({search:event.target.value})
    
  }
  pressed=()=>{
       console.log('this.state.search',this.state.search)
       if(this.state.searcvalue){
         let  temp=this.state.dic.filter((item)=>item.word===this.state.searcvalue)
         this.setState({result:temp})
         console.log('result',this.state.result)
       }
      
   }
  pressedinput=()=>{
     console.log('gdfgfdh')
 }
  searchinput=(e)=>{
      console.log('what do you do?',e.target.value)
      // this.setState({searcvalue:e.target.value})
  }
  ///
  handleChange(e) {
    // this.setState({value: event.target.value});
    console.log('handlechangeeee')
    this.setState({searcvalue:e.target.value})
}

handleEnter(event) {
    if (event.key === 'Enter') {
        // this.setState({value: event.target.value},function(){
            // this.props.theFunction(this.state.value);
            console.log('handle enterrrrrrrrrrrr')
            // console.log('this.state.search',this.state.search)
       if(this.state.searcvalue){
         let  temp=this.state.dic.filter((item)=>item.word===this.state.searcvalue)
         this.setState({result:temp})
         console.log('result',this.state.result)
       }
       console.log('resultgggg')
        // }
        // );
    }
}
  render(){
     console.log('render',this.state.dic.word)
  return (<div>
      
     
   <div className="mt-2" style={{marginLeft:"5%",marginRight:"60%", pointer:'cursur',listStyleType: "none", overflowY: "scroll", height: 500}}>
    
   {/* <Input
          placeholder='Search' style={{ color: 'white' } }
          prefix={<Icon type='search' style={{ color: 'black' }}
          value={this.state.search}
          onChange={()=>this.searchinput()}
          onPressEnter={this.pressed}
          />}
          style={{ width: '90%',backgroundColor:'white' }}
/> */}
{/* <input
placeholder='enter word'
onPressEnter={this.pressed}
onChange={this.searchinput}
/> */}
<input 
    type="text" 
    placeholder="Enter key words" 
    value={this.state.value}
    // onChange={this.handleChange} 
    onChange={this.searchinput}
onKeyPress={this.handleEnter}
/>

   <Card.Body>
    <div>
      {this.state.dic && this.state.dic.map(dic=>(
      <Card style={{backgroundColor:'#EEEEEE',margin:'10px',borderRadius:0}} onClick={this.clicked} >

  
      <Col lg={{span:6}}> <Card.Title >{dic.word} </Card.Title> [{dic.type}]</Col>
      
    {this.state.selectedDic && this.state.selectedDic.word==dic.word ? <Card.Footer>
      <Row>
      <Col lg={{span:6}}>type : {this.state.selectedDic.type}</Col>
      </Row>
      <Row><Col> <p> discribtion : {this.state.selectedDic.discribtion}</p></Col>
      </Row>
       </Card.Footer>:null}
  
    
  
      </Card>
      
    ))
  }
      </div> 
      </Card.Body>
    </div> 
   
    
     
  </div>)
  }
};

const mapStateToProps=state=>{
  console.log(state);
}
export default compose(connect(mapStateToProps),
firestoreConnect([{
  collection:"Grantedresume"},
  
]))(dictionary);