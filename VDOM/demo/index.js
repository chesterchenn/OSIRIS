console.log("esbuild start...");
import { recursion, createElement, render } from "vdom";
const root = document.getElementById("root");
const obj = recursion(root, {});
console.log(obj);

const renderRoot = document.getElementById("renderRoot");
const hello = createElement("div", { id: 1 }, "Hello, World");
console.log(hello)
render(hello, renderRoot);
