import React from 'react';
import Header from "../../components/Header";
import SigninForm from '../../components/SigninForm';
import {useStoreContext} from '../../utils/GlobalState';
import {LOG_IN} from '../../utils/actions';


const LoginPage=()=>{
    const [state,dispatch]=useStoreContext();
    return <div>
        <Header />
        <h1>Sign In Page</h1>

            <SigninForm onLogIn={(account)=>{
                localStorage.setItem("authorization-token",account.token);
                dispatch({
                    type:LOG_IN,
                    payload:account
                })
            }} />
    </div>
}
export default LoginPage;