import React, { useState, useEffect } from 'react';
import API from '../../utils/API';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginForm = (props) => {

    // When component mounts, load non Profits from db
    useEffect(() => {
        checkNewAccount()
    }, []);

    function checkNewAccount() {

        // console.log(window.location.href);

        if (window.location.href.includes("newaccount=true")) {
            toast("New account created successfully!");
        }
    }

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function onKeyUp(e) {
        if (e.key === "Enter") {
            // this.setState({ inputValue: e.target.value });
            logIn();
        }
    }

    const logIn = async () => {
        if (!email) {
            toast("Please enter your email address");
        } else if (!password) {
            toast("Please enter your account password");
        } else {
            try {
                const response = await API.logIn(email, password);
                props.onLogIn(response.data);
            } catch (error) {
                console.log(error);
                toast("Invalid credentials!");
            }
        }
    }

    return (

        <div>
            <div className="form-group">
                <label>Email Address:</label>
                <input value={email} onKeyPress={e => {onKeyUp(e)}} onChange={e => {
                    setEmail(e.target.value);
                }}
                    type="email" className="form-control" id="email" aria-describedby="emailHelp"></input>
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>

            <div className="form-group">
                <label>Password:</label>
                <input value={password} onKeyPress={e => {onKeyUp(e)}} onChange={e => {
                    setPassword(e.target.value);
                }}
                    type="password" className="form-control" id="password"></input>
            </div>

            <button onClick={logIn} className="btn btn-primary shadow">Log in</button>

            <ToastContainer />
        </div>
    )
}

export default LoginForm;