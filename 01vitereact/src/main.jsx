import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

function MyApp() {
    return <h1>hello there</h1>;
}

// const reactElement = {
//     type: "a",
//     props: {
//         href: "https://www.google.com",
//         target: "_blank",
//     },
//     children: "go to google.com",
// };

const anotherElement = <a href="https://google.com">google.com</a>;

const reactElement = React.createElement(
    "a",
    { href: "www.google.com", target: "_blank" },
    "click me to visit google",
    anotherElement
);

const username = "rohan";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
  {reactElement}
  <h1>Hello, {username}</h1>
  </>
);


// ReactDom.createRoot(document.getElementById("root")).render(
//     <>
//         {/* <App /> */}
//         {/* <MyApp /> */}
//         <MyApp />
//         {/* MyApp() */}
//         {reactElement}
//     </>
// );
