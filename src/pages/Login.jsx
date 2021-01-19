import React, { useState } from "react";

import Idm from "../services/Idm";

import "../css/form.css";

const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    /**
     * Buttons have default behavior which will cause
     * the entire page to refresh, this isn't what
     * we want in React as everything updates according
     * to the state. So we prevent that action by
     * using "e.preventDefault();"
     *
     * @param e Event
     */
    const handleSubmit = (e) => {
        e.preventDefault();

        Idm.login(email, password)
            .then(response => alert(JSON.stringify(response.data, null, 4)))
            .catch(error => alert(error));
    };

    /*
     * For all "code" inside of JSX you must use {code}.
     * if you have a variable called divClassName
     * and you enter in <div className=divClassName>
     * this will give an error as divClassName is not valid
     * JSX. but once you wrap in in {} to make it
     * <div className={divClassName}> it will work and treat
     * the contents inside the brackets as normal javascript
     * code. This is very useful for creating dynamic content.
     *
     */
    return (
        <div className="form-box">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label className="form-label">Email</label>
                <input
                    className="form-input"
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label className="form-label">Password</label>
                <input
                    className="form-input"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className="form-button">Login</button>
            </form>
        </div>
    );
}

export default Login;
