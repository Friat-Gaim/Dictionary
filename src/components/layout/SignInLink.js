import React  from 'react';
import { connect } from 'react-redux'
import {NavLink} from 'react-router-dom';
// import { signOut } from '../../store/actions/authActions';
 const SignedInLink=(props)=>{
    return(
        <ul className="right">
            <li><NavLink to='/create'>New Project</NavLink></li>
            <li><a onClick={props.signOut}>Logout</a></li>
            <li><NavLink to='/' className="btn btn-floating pink light">{props.profile.initials}</NavLink></li>
        </ul>
    )
}
// const mapDispatchToProps = (dispatch) => {
//     return {
//       signOut: (creds) => dispatch(signOut())
//     }
//   }
// export default connect(null, mapDispatchToProps)(SignedInLink)
export default SignedInLink