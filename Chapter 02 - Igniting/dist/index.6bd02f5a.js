const parent = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "child"
    }, [
        React.createElement("h1", {}, "I'am h1 Tag"),
        React.createElement("h2", {}, "I'am an h2 Tag")
    ]),
    React.createElement("div", {
        id: "child2"
    }, [
        React.createElement("h1", {}, "I'am an h1 Tag"),
        React.createElement("h2", {}, "I'am an h2 Tag")
    ])
]);
// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "abc" },
//   "Hello world from React"
// );
console.log(parent); //Objects
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

//# sourceMappingURL=index.6bd02f5a.js.map
