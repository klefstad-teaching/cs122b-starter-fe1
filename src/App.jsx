import React from "react";

import Register from "./pages/Register";
import Login from "./pages/Login";

/**
 * When creating a new component you must be sure
 * that it returns some "HTML" that needs to be
 * drawn to the page.
 *
 * For dynamic parts of the page we store values
 * within the variables that comes from "useState"
 *
 *   DO NOT UPDATE STATE VALUES DIRECTLY!
 *
 * Values in state can be declared be given a default
 * value at the supplying the useState function with a
 * value such like this:
 *
 *     const [ total, setTotal ] = useState(1);
 *
 *   ALWAYS USE THE SETTER TO MODIFY THE VALUE!
 */
const App = () => {
    return (
        <div className="app">
            <Login/>
            <Register/>
        </div>
    );
}

export default App;
