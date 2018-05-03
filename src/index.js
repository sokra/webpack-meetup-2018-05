import React from "react";
import { render } from "react-dom";
import HelloWorld from "./HelloWorld";

const node = document.createElement("div");
document.body.appendChild(node);

render(<HelloWorld />, node);