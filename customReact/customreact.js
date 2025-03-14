const reactElement = {
    type: "a",
    props: {
        href: "https://www.google.com",
        target: "_blank",
    },
    children: "go to google.com",
};

const mainContainer = document.getElementById("root");
/*
const customRender = (reactElement, container) => {
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    domElement.setAttribute("href", reactElement.props.href);
    domElement.setAttribute("target", reactElement.props.target);
    container.appendChild(domElement);
};
*/

const customRender = (reactElement, container) => {
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;

    for (const prop in reactElement.props) {
        if (prop == "children") continue;
        domElement.setAttribute(prop, reactElement.props[prop]);
    }
    container.appendChild(domElement);
};

customRender(reactElement, mainContainer);
