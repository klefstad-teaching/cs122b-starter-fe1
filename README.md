# CS122B - Frontend 1

### Pre-Setup (Optional but strongly recommended)

1. Install Visual Studio Code
2. Install the following addons (and any other addons you would like)
- Prettier - Code formatter (This will automatically format your code as you write)
- React Native Tools - Helps with writing some repetitive code
4. Create a Chrome Shortcut with no security, follow instructions here: [Chrome Instructions](#Using-Chrome-Without-CORS)

### Setup instructions

1. Download and install node.js - Current version: 13.1.0
2. Type `npm` in your terminal to ensure you correctly installed node
3. Type `npm install` within the root of this repo to install all the dependencies (This will take a while)
4. Type `npm start` to start the server and you should have a window open with the front end
5. [In case of error] If you run into a missing dependency error try `npm install` again then `npm start` if the problem persists manually install the dependency it is asking for.

### Using Chrome Without CORS

1. Create a folder to have your testing Chrome
2. Make a folder named temp
3. Create a new shortcut with the location
~~~
"C:\Program Files (x86)\Google\Chrome\Application" --disable-web-security --user-data-dir="<full path to your temp folder>"
~~~
4. Install React Developer Tools
5. Make localhost:3000 your homepage for ease of use

### Dependencies

In case you get an error for a missing dependency just enter in these commands to download the respective dependency:

| Package          | Command                  | Site                                           |
| :--------------- | :----------------------- | :--------------------------------------------- |
| Axios            | `npm i axios`            | https://www.npmjs.com/package/axios            |
| js Cookie        | `npm i js-cookie`        | https://www.npmjs.com/package/js-cookie        |
| Create React App | `npm i create-react-app` | https://www.npmjs.com/package/create-react-app |
| React            | `npm i react`            | https://www.npmjs.com/package/react            |
| React DOM        | `npm i react-dom`        | https://www.npmjs.com/package/react-dom        |
| React Scripts    | `npm i react-scripts`    | https://www.npmjs.com/package/react-scripts    |
| React Router DOM | `npm i react-router-dom` | https://www.npmjs.com/package/react-router-dom |

### Notes

##### this.setState()

The way setState works is by taking an object and
comparing the values in the new object and updateing
any overlap in the state value

```javascript
// Starting state
state = { 
    loggedIn: true 
  };

// Function Called
this.setState({ loggedIn: false });

// New State
state = { 
    loggedIn: true 
  };
```

if there are more values in state like this:

```javascript
// Starting state
state = {
    loggedIn: true,
    email: "user@uci.edu"
  };

// Function Called
this.setState({ loggedIn: false });

// New State
state = {
    loggedIn: false,
    email: "user@uci.edu"   // Notice that email does not change
  };
```


#### functions

There are two ways of declaring functions

```javascript
// without "this" binding
func() {}

// with "this" binding
func = () => {}
```

the latter, func = () => {} will automatically
bind "this" to it. In these functions you can
call this, however in the first declaration
this will be undefined.

```javascript
// without "this" binding
func() {
    this.setState() // throws error, this is undefined.
  }

// with "this" binding
func = () => {
    this.setState() // This is fine.
  }
```
