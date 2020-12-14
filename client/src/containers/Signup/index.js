import React from 'react';
import Header from "../../components/Header";
import { Link } from 'react-router-dom';

import SignupForm from '../../components/SignupForm';

import { useStoreContext } from '../../utils/GlobalState';
// import { LOG_IN } from '../../utils/actions';
// import FooterSmall from '../../components/FooterSmall';

const SignupPage = () => {
    const [state, dispatch] = useStoreContext();
    return <div>
        <Header />

        <p id="signuppage">Return to <Link to="/login">Login Page</Link></p>

        <SignupForm />

    </div>

}
export default SignupPage;