import React, { Component } from "react";

import Idm from "../services/Idm";

import "./pages.css";

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
      .then(response => alert(response))
      .catch(error => alert(error));
  };

  updateField = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

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
