console.log("esbuild start...");
import { recursion, createElement, createElement as h, render } from "vdom";
const root = document.getElementById("root");
const obj = recursion(root, {});
console.log(obj);

const renderRoot = document.getElementById("renderRoot");
// const hello = createElement("div", { id: 1 }, "Hello, World");
// render(hello, renderRoot);

let state = { num: 5 };
let timer;
let preVDom;

/** @jsx createElement */
const element = (
  <div>
    Hello World
    <ul>
      {[...Array(state.num).keys()].map((i) => (
        <li id={i} class={`li-${i}`}>
          第{i * state.num}
        </li>
      ))}
    </ul>
  </div>
);

console.log(element);

function tick(element) {
  if (state.num > 20) {
    clearTimeout(timer);
    return;
  }
}

render(element, renderRoot);
