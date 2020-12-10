import React from 'react';
import Header from "../../components/Header";
import { Link } from 'react-router-dom';

import SignupForm from '../../components/SignupForm';
// import SignupAlert from '../../components/Snackbar';
import { useStoreContext } from '../../utils/GlobalState';
import { LOG_IN } from '../../utils/actions';

const SignupPage = () => {
    const [state, dispatch] = useStoreContext();
    return <div>
        <Header />

        <h1>Sign Up Page</h1>

        <h3>Return to <Link to="/login">Login</Link></h3>

        <SignupForm />

        {/* <SignupAlert /> */}
    </div>
}
export default SignupPage;