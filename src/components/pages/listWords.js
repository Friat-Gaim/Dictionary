import React, { Component } from "react";
import { Redirect,Link } from "react-router-dom";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import Navbar from '../layout/Navbar'
import moment from 'moment'
import { Avatar, Typography, Button, Col, Row, Tag } from "antd";
const { Title } = Typography;
class listWords extends Component{
  state={};
  render(){
    const { word } = this.props;
    console.log(word)
    return(
      <div className="App">
    <Navbar />
    <div class="row" >
        <div class="col-2 card">
            <ul>
                <scroll>
                    <li>
                        A<button>list</button>
                        <scrollY>
                            {word&&word.map((item)=>{
                                return(
                                    <div>
                                        <ul>
                                            <li>{item.WordName}</li>
                                        </ul>
                                    </div>
                                )
                            })}
                        </scrollY>
                    </li>
                    <li>
                        B<button>list</button>
                    </li>
                    <li>
                        C<button>list</button>
                    </li>
                </scroll>
            </ul>
        </div>
        <div class="col-2"></div>
      <div className="col-4"style={{ backgroundColor:"#FFFAF0"}}>
        {word&&word.map((item)=>{
           return (
            <div className="card z-depth-0 px-3 mb-1" backgroundColor="#FFFFE0" >
              <ul class="list-group" style={{listStyle:"none"}}>
                {/* <scrollbars> */}
                    <li className="font-weight-bold text-primary">Word Name:
                    <p >{item.WordName}</p></li>
                    <li className="font-weight-bold text-primary" >word class:
                    <p>{item.classWord}</p> </li>
                    <li className="font-weight-bold text-primary">Etymology of word:
                    <p>{item.Etymology}</p></li>
                    <li className="font-weight-bold text-primary">pronounce :
                    <p>{item.pronounce}</p></li>
                    <li className="font-weight-bold text-primary">Description: 
                    <p> {item.description}</p></li>
                    <li className="font-weight-bold text-primary">Sentence:
                    <p>{item.sentence}</p></li>
                {/* </scrollbars> */}
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
    { collection: "wordBank", orderBy: ['createdAt', 'desc'] }
  ])
)(listWords);
