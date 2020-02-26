import React  from 'react';
import {NavLink} from 'react-router-dom';
 const SignedOutLink=()=>{
    return(
        <ul className="right">
            <li><NavLink to='/signUp'>About us</NavLink></li>
            <li><NavLink to='/signin'>Add word</NavLink></li>
        </ul>
    )
}
export default SignedOutLink