import React, { Component } from "react";
import { Redirect,Link } from "react-router-dom";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import Navbar from '../layout/Navbar'
import { IconContext } from "react-icons";
import { Avatar, Typography, Button, Col, Row, Tag } from "antd";
const { Title } = Typography;
class listWords extends Component{
  state={
    inputLetter:'',
    outputWords:[]
  };
  displayWordDetail=(e)=>{
    
  }
  handelChange=(e)=>{
    this.setState({
      [e.target.id]:e.target.value,
      inputLetter:e.target.value
      })
      if(this.state.inputLetter){
        const { word } = this.props;
        if(this.props.word){
          this.setState({[this.state.outputWords]:word.filter((item)=>item.WordName.indexOf(0)===this.state.inputLetter)})
          console.log('result',this.state.outputWords)
          if(this.state.outputWords=!null){
            {this.state.outputWords&&this.state.outputWords.map((item)=>{
              return(
                <div style={{overflow:'auto',height:'400px'}}>
                  <ul>
                    <li>
                      <a id="eachword" href="#" class="" onClick={this.state.displayWordDetail}>
                        {item.WordName}
                      </a>
                    </li>
                  </ul>
                </div>
              )
            })}
          }
        }
      }
  }
  render(){
    const { word } = this.props;
    console.log(word)
    return(
      <div className="App">
    <Navbar />
    <div class="row ml-2" >
        <div class="col-2 card"  style={{overflow:'auto',height:'550px'}}>
          <p>Listed words</p>
        <scrollbars>
            <ul>
              <li>
                A<button id="a" value="A" 
                onClick={this.state.handelChange}>
                 list
                </button>           
                    {word&&word.map((item)=>{
                      return(
                        <div>
                          <ul>
                            <li>{item.WordName}</li>
                          </ul>
                        </div>
                      )
                    })}
                    </li>
                    <li class='my-2 pl-1 doc-none'>
                        B<button id="b" value="B" class="ml-1"
                        onClick={this.state.handelChange}>
                          list
                          </button>
                    </li>
                    <li class='my-2 pl-1 doc-none'>
                        C<button id="c" value="C" class="ml-1"
                        onClick={this.state.handelChange}>
                          list
                          </button>
                    </li>
                    <li class='my-2 pl-1 doc-none'>
                        D<button id="d" value="D" class="ml-1"
                        onClick={this.state.handelChange}>
                          list
                          </button>
                    </li>
                    <li class='my-2 pl-1 doc-none'>
                        E<button id="e" value="e" class="ml-1"
                        onClick={this.state.handelChange}>
                          list
                          </button>
                    </li>
                    <li class='my-2 pl-1 doc-none'>
                      G<button id="g" value="g" class="ml-1"
                      onClick={this.state.handelChange}>
                        list
                      </button>
                    </li>
                    <li class='my-2 pl-1 doc-none'>
                      H<button id="h" value="h" class="ml-1"
                      onClick={this.state.handelChange}>
                        list
                      </button>
                    </li>
                    <li class='my-2 pl-1 doc-none'>
                      I<button id="i" value="i" class="ml-1"
                      onClick={this.state.handelChange}>
                        list
                      </button>
                    </li>
                    <li class='my-2 pl-1 doc-none'>
                      J<button id="j" value="j" class="ml-1"
                      onClick={this.state.handelChange}>
                        list
                      </button>
                    </li>
                    <li class='my-2 pl-1 doc-none'>
                      K<button id="k" value="k" class="ml-1"
                      onClick={this.state.handelChange}>
                        list
                      </button>
                    </li>
                    <li class='my-2 pl-1 doc-none'>
                      L<button id="l" value="l" class="ml-1"
                      onClick={this.state.handelChange}>
                        list
                      </button>
                    </li>
                    <li class='my-2 pl-1 doc-none'>
                      M<button id="m" value="m" class="ml-1"
                      onClick={this.state.handelChange}>
                        list
                      </button>
                    </li>
                    <li class='my-2 pl-1 doc-none'>
                      N<button id="n" value="n" class="ml-1"
                      onClick={this.state.handelChange}>
                        list
                      </button>
                    </li>
                    <li class='my-2 pl-1 doc-none'>
                      O<button id="o" value="o" class="ml-1"
                      onClick={this.state.handelChange}>
                        list
                      </button>
                    </li>
                    <li class='my-2 pl-1 doc-none'>
                      P<button id="p" value="p" class="ml-1"
                      onClick={this.state.handelChange}>
                        list
                      </button>
                    </li>
                    <li class='my-2 pl-1 doc-none'>
                      Q<button id="q" value="q" class="ml-1"
                      onClick={this.state.handelChange}>
                        list
                      </button>
                    </li>
                    <li class='my-2 pl-1 doc-none'>
                      R<button id="r" value="r" class="ml-1"
                      onClick={this.state.handelChange}>
                        list
                      </button>
                    </li>
                    <li class='my-2 pl-1 doc-none'>
                      S<button id="s" value="s" class="ml-1"
                      onClick={this.state.handelChange}>
                        list
                      </button>
                    </li>
                    <li class='my-2 pl-1 doc-none'>
                      T<button id="t" value="t" class="ml-1"
                      onClick={this.state.handelChange}>
                        list
                      </button>
                    </li>
                    <li class='my-2 pl-1 doc-none'>
                      U<button id="u" value="u" class="ml-1"
                      onClick={this.state.handelChange}>
                        list
                      </button>
                    </li>
                    <li class='my-2 pl-1 doc-none'>
                      V<button id="v" value="v" class="ml-1"
                      onClick={this.state.handelChange}>
                        list
                      </button>
                    </li>
                    <li class='my-2 pl-1 doc-none'>
                      W<button id="w" value="w" class="ml-1"
                      onClick={this.state.handelChange}>
                        list
                      </button>
                    </li>
                    <li class='my-2 pl-1 doc-none'>
                      X<button id="x" value="x" class="ml-1"
                      onClick={this.state.handelChange}>
                        list
                      </button>
                    </li>
                    <li class='my-2 pl-1 doc-none'>
                      Y<button id="y" value="y" class="ml-1"
                      onClick={this.state.handelChange}>
                        list
                      </button>
                    </li>
                    <li class='my-2 pl-1 doc-none'>
                      Z<button id="z" value="z" class="ml-1"
                      onClick={this.state.handelChange}>
                        list
                      </button>
                    </li>
            </ul>
            </scrollbars>
        </div>
        <div class="col-2"></div>
      <div className="col-4"style={{ backgroundColor:"#FFFAF0"}}>
        {word&&word.map((item)=>{
           return (
            <div className="card z-depth-0 px-3 mb-1" backgroundColor="#FFFFE0" >
              <ul class="list-group" style={{listStyle:"none"}}>
                    <li className="font-weight-bold text-primary">Word Name:
                    {item.WordName}</li>
                    <li className="font-weight-bold text-primary" >word class:
                    {item.classWord} </li>
                    <li className="font-weight-bold text-primary">Etymology of word:
                    {item.Etymology}</li>
                    <li className="font-weight-bold text-primary">pronounce :
                    {item.pronounce}</li>
                    <li className="font-weight-bold text-primary">Description: 
                    {item.description}</li>
                    <li className="font-weight-bold text-primary">Sentence:
                    {item.sentence}</li>
              </ul>
            </div>
           )
          })}
      </div>
    </div>
  </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    word:state.firestore.ordered.wordBank,
  };
};
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: "wordBank", orderBy: ['WordName', 'asc'] }
  ])
)(listWords);
