import React, { Component } from "react";

import Register from "./pages/Register";
import Login from "./pages/Login";

/*
  When creating a new component you must extend 
  the Component class. In the class you must 
  have ATLEAST a render(){} function that returns
  the "HTML" that needs to be drawn to the page.

  For dynamic parts of the page we store values 
  within the "state" object.

    DO NOT UPDATE VALUES IN STATE DIRECTLY

  Values in state can be declared direclty at 
  constrtuction but after this any updates to the
  state must be made through this.setState()
*/
class App extends Component {
  /*
    The state variable contains all the data
    that the Component uses. Especially those that
    will be changed dynamically and will require the
    Component to be re-rendered.

    Using "this.setState({ object: value});" will 
    change the value in state AND will cause React 
    to re-render the page to display the changes. 
    React does this in a clever way rendering only
    what has been changed, So anything involving the
    variable that has been updated will automatically
    be re-rendered.

    More about how this.setState works in the readme.
  */
  state = {};

  /*
    The render() function returns JSX data. You can 
    think of it as a kind of HTML for now. 

    Here you can return basic HTML code you have
    seen before as well as Components. Here I have
    two React Components <Login> and <Register> 
    inside of a html <div>. Typically React Components
    will start with a capitcal letter.

    <Login/> is also the same as <Login></Login> but
    is shorthand since the body is empty and is not
    needed here. This also works for html with
    <input/> being the same as <input></input>.
  */
  render() {
    return (
      <div className="app">
        <Login />
        <Register />
      </div>
    );
  }
}

export default App;
