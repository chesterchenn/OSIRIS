import { createElement, createElement as h, render } from "vdom";

const renderRoot = document.getElementById("renderRoot");
const renderRoot1 = document.getElementById("renderRoot1");
// const hello = createElement("div", { id: 1 }, "Hello, World");
// render(hello, renderRoot);

let state = { num: 5 };

/** @jsx createElement */
const element = (
  <div>
    Hello World
    <ul>
      <li>1234</li>
    </ul>
  </div>
);

const ele = (
  <div>
    <ul>
      {[1, 2, 3].map(i => (
        <li>{i}</li>
      ))}
    </ul>
  </div>
);
console.log(element);
console.log(ele);
render(element, renderRoot);
render(ele, renderRoot1);

let timer;
let preVDom;

function tick(element) {
  if (state.num > 20) {
    clearTimeout(timer);
    return;
  }
}
