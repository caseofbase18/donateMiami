import React from 'react';

// bootstrap
function Signin() {
    return (
        // logo
        <form>
            <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1"></input>
            </div>
            <button type="submit" className="btn btn-primary">Submit!</button>
        </form>
    )
}

export default Signin;