import React from 'react';

// materialize
function Signin() {
    return (
        // logo
        <body>
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="email" type="email" className="validate">
                                <label for="email">Email</label>
                            </input>
                        </div>

                        <div className="row">
                            <div className="input-field col s12">
                                <input id="password" type="password" className="validate">
                                    <label for="password">Password</label>
                                </input>
                            </div>
                        </div>

                        <div className="row">
                            <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                            <i className="material-icons right">send</i>
                            </button>
                            <a className="waves-effect waves-light btn">Sign-up Here!</a>
                        </div>
                    </div>
                </form>
            </div>
        </body>
    )
}

export default Signin;