import React from "react";
import { render } from "react-dom";
import HelloWorld from "./HelloWorld";

var node = document.createElement("div");
document.body.appendChild(node);

render(React.createElement(HelloWorld, null), node);