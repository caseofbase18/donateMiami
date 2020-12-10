import React from 'react';
import Header from "../../components/Header";
import LoginForm from '../../components/LoginForm';
import {useStoreContext} from '../../utils/GlobalState';
import {LOG_IN} from '../../utils/actions';


const LoginPage=()=>{
    const [state,dispatch]=useStoreContext();
    return <div>
        <Header />
        <div className="row">
            <div className="col-4">
            <h2 id="logintitle">Login Page</h2>
            </div>
            <div className="col-8"></div>
       
        </div>
        

            <LoginForm onLogIn={(account)=>{
                localStorage.setItem("authorization-token",account.token);
                dispatch({
                    type:LOG_IN,
                    payload:account
                })
            }} />
    </div>
}
export default LoginPage;