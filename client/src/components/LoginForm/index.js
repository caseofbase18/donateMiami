import React, { useState } from 'react';
import API from '../../utils/API';

const LoginForm = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const logIn = async () => {
        if (!email) {
            alert("Please enter your email address");
        } else if (!password) {
            alert("Please enter your account password");
        } else {
            try {
                const response = await API.logIn(email, password);
                props.onLogIn(response.data);
            } catch (error) {
                alert("Invalid credentials!");
            }
        }
    }

    return (

        <div>
            <div className="form-group">
                <label>Email Address:</label>
                <input value={email} onChange={e => {
                    setEmail(e.target.value);
                }}
                    type="email" className="form-control" id="email" aria-describedby="emailHelp"></input>
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>

            <div className="form-group">
                <label>Password:</label>
                <input value={password} onChange={e => {
                    setPassword(e.target.value);
                }}
                    type="password" className="form-control" id="password"></input>
            </div>

            <button onClick={logIn} className="btn btn-primary shadow">Log in</button>
        </div>
    )
}

export default LoginForm;