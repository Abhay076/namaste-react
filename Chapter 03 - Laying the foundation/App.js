import React from "react";
import ReactDOM from "react-dom";

// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "I'am h1 Tag"),
//     React.createElement("h2", {}, "I'am an h2 Tag"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", {}, "I'am an h1 Tag"),
//     React.createElement("h2", {}, "I'am an h2 Tag"),
//   ]),
// ]);

const Title = () => <h1 className="head">Namaste React using JSX</h1>;

const headingComponents = () => (
  <div id="container">
    <Title />
    <h1 className="heading">Namaste React Functional Components</h1>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<headingComponents/>);
