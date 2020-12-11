import React from 'react';
import Header from "../../components/Header";
import LoginForm from '../../components/LoginForm';
import {useStoreContext} from '../../utils/GlobalState';
import {LOG_IN} from '../../utils/actions';
import FooterSmall from '../../components/FooterSmall';



const LoginPage=()=>{
    const [state,dispatch]=useStoreContext();
    return <div>
        <Header />
    
            <h2 id="logintitle">Login Page</h2>
        
            <LoginForm onLogIn={(account)=>{
                localStorage.setItem("authorization-token",account.token);
                dispatch({
                    type:LOG_IN,
                    payload:account
                })
            }} />

            <FooterSmall />

            
    </div>
}
export default LoginPage;