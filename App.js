const parent = React.createElement(
  "div",
  { id: "parent" },
  [React.createElement("div", { id: "child1", key:"child1" }, [
    React.createElement("h1", { key: "h1" }, "Hi i am H1"),
    React.createElement("h2", { key: "h2" }, "I'm H2"),
  ]),
  React.createElement("div", { id: "child2", key:"child2" }, [
    React.createElement("h1", { key: "h3" }, "Hi i am H1"),
    React.createElement("h2", { key: "h4" }, "I'm H2"),
  ])]
);

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React!"
);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
