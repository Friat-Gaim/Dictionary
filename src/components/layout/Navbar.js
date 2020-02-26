import React  from 'react';
import {Link} from 'react-router-dom';
import SignedInLink from './SignInLink';
import { connect } from 'react-redux'
import SignedOutLink from './SignOutLink'
import Modal from "react-bootstrap/Modal";
const App = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };
  return (
    <>
    <Link onClick={showModal} class="nav-link">Add Word</Link>
    <Modal show={isOpen} onHide={hideModal}>
      <Modal.Header>
        <Modal.Title> Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
  <div class="form-group">
    <label for="email">Email address:</label>
    <input type="email" class="form-control" id="email"/>
  </div>
  <div class="form-group">
    <label for="pwd">Password:</label>
    <input type="password" class="form-control" id="pwd"/>
  </div>
      </Modal.Body>
      <Modal.Footer>
        <button onClick={hideModal} type="submit" class="btn btn-danger">Cancel</button>
        <button  onClick={hideModal} type="submit" class="btn btn-primary">Submit</button> 
      </Modal.Footer>
    </Modal>
  </>
  );
};
class Navbar extends React.Component {
  render(){
    
    const { auth,profile } = this.props;
    const links=auth.uid?<SignedInLink profile={profile}/>:<SignedOutLink/>;
    return(
        <nav class="navbar navbar-expand-md bg-dark navbar-dark">
        {/* <!-- Brand --> */}
        <Link to='/' class="navbar-brand" href="#">Home</Link>
        {/* <!-- Toggler/collapsibe Button --> */}
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          <span class="navbar-toggler-icon"></span>
        </button>
{/*       
        <!-- Navbar links --> */}
        <div class="collapse navbar-collapse" id="collapsibleNavbar">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <Link to='/' class="nav-link" href="#">About us</Link>
            </li>
            <li class="nav-item">
               <App/> 
            </li>
          </ul>
        </div>
      </nav> 
    )
      }
}
const mapStateToProps = (state) => {
     console.log(state);
    return{
      auth: state.firebase.auth,
      profile:state.firebase.profile
    }
  }
  
  export default connect(mapStateToProps)(Navbar)