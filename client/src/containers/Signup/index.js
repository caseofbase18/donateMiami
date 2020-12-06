import React from 'react';
import Header from "../../components/Header";

import SignupForm from '../../components/SignupForm';
import {useStoreContext} from '../../utils/GlobalState';
import {LOG_IN} from '../../utils/actions';


const SignupPage=()=>{
    const [state,dispatch]=useStoreContext();
    return <div>
        <Header />
        <h1>Sign Up Page</h1>

            <SignupForm 
            //     onLogIn={(account)=>{
            //     localStorage.setItem("authorization-token",account.token);
            //     dispatch({
            //         type:LOG_IN,
            //         payload:account
            //     })
            // }} 
            />
    </div>
}
export default SignupPage;