import { createElement, createElement as h, render, diff, patch } from "vdom";

let state = { num: 5 };
let timer;
let preVDom;

/** @jsx createElement */
function view() {
  return (
    <div>
      <ul>
        {[...Array(state.num).keys()].map((i) => (
          <li id={i} class={`li-${i}`}>
            第{i * state.num}
          </li>
        ))}
      </ul>
    </div>
  );
}

function tick() {
  if (state.num > 20) {
    clearTimeout(timer);
    return;
  }
  const newVDOM = view();

  // render(newVDOM, renderRoot)
  const patchObj = diff(preVDom, newVDOM);
  console.log(patchObj);

  preVDom = newVDOM;

  patch(renderRoot, patchObj);
}

function invokedRender() {
  const vdom = view();
  preVDom = vdom;

  render(vdom, renderRoot);

  timer = setInterval(() => {
    state.num += 1;
    tick();
  }, 500);
}

invokedRender();
