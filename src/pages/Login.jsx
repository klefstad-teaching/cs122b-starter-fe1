import React, { Component } from "react";

import Idm from "../services/Idm";

import "../css/form.css";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  /* 
    buttons have default behavior which will cause
    the entire page to refresh, this isnt what
    we want in React as everything updates according
    to the state. So we prevent that action by 
    using "e.preventDefault();"
  */
  handleSubmit = e => {
    e.preventDefault();

    const { email, password } = this.state;

    Idm.login(email, password)
      .then(response => alert(JSON.stringify(response.data, null, 4)))
      .catch(error => alert(error));
  };

  updateField = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  /*
    For all "code" inside of JSX you must use {code}.

    if you have a variable called divClassName

    and you enter in <div className=divClassName> 
    this will give an error as divClassName is not valid
    JSX. but once you wrap in in {} to make it
    <div className={divClassName}> it will work and treat
    the contents inside the brackets as normal javascript
    code. This is very useful for creating dynamic content.
  */
  render() {
    const { email, password } = this.state;

    return (
      <div className="form-box">
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <label className="form-label">Email</label>
          <input
            className="form-input"
            type="email"
            name="email"
            value={email}
            onChange={this.updateField}
          />
          <label className="form-label">Password</label>
          <input
            className="form-input"
            type="password"
            name="password"
            value={password}
            onChange={this.updateField}
          />
          <button className="form-button">Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
