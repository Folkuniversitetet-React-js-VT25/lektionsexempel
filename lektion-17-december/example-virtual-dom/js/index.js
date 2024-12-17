import { createElement, render } from "./virtualDom.js";

const vdom = createElement(
  "main",
  { class: "App" },
  createElement("h1", {}, "Välkommen till den virtuella DOM!"),
  createElement(
    "p",
    {},
    "Detta är ett exempel på hur en virtuell DOM kan implementeras."
  )
);

console.log(vdom);

const root = document.getElementById("root");
root.appendChild(render(vdom));
