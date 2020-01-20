import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import Socket from "./services/Socket";

import "./index.css";

Socket.initSocket();

/*
  This Function connects Our Main <App> to our HTML file
  by connecting <App> to <div id="root"></div>. <App>'s render
  function then gets called and any component within <App> will
  also get called.
*/
ReactDOM.render(<App />, document.getElementById("root"));
