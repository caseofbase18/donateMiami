import React from 'react';
import Header from "../../components/Header";
import LoginForm from '../../components/LoginForm';
import { useStoreContext } from '../../utils/GlobalState';
import { LOG_IN } from '../../utils/actions';
import FooterSmall from '../../components/FooterSmall';



const LoginPage = () => {
    const [state, dispatch] = useStoreContext();
    return <div>
        <Header />

        <LoginForm onLogIn={(account) => {
            localStorage.setItem("authorization-token", account.token);
            dispatch({
                type: LOG_IN,
                payload: account
            })
        }} />

        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <FooterSmall />
        </div>

    </div>
}
export default LoginPage;