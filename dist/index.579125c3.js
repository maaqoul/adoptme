/* global React ReactDOM */ const { createElement  } = React;
function App() {
    return createElement("div", null, [
        createElement("h1", {}, "Adopt Me"),
        createElement(Pet),
        createElement(Pet),
        createElement(Pet), 
    ]);
}
_c = App;
//TODO:
function Pet() {
    return createElement("div", {}, [
        createElement("h2", {}, "Luna"),
        createElement("h3", {}, "Dog"),
        createElement("h3", {}, "not havanese >>>>>>>>>"), 
    ]);
}
_c1 = Pet;
ReactDOM.render(React.createElement(App), document.getElementById("root"));
var _c, _c1;
$RefreshReg$(_c, "App");
$RefreshReg$(_c1, "Pet");

//# sourceMappingURL=index.579125c3.js.map
