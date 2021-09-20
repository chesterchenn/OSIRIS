import {
  createElement,
  createElement as h,
  render,
  diff,
  nodePatchTypes,
} from "vdom";

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

function tick(element) {
  if (state.num > 20) {
    clearTimeout(timer);
    return;
  }
  const newVDOM = view();

  const pathcObj = diff(preVDom, newVDOM);

  preVDom = newVDOM;

  patch(element, pathcObj);

  console.log(pathcObj);
}

function invokedRender() {
  const vdom = view();
  preVDom = vdom;

  render(vdom, renderRoot);

  timer = setInterval(() => {
    state.num += 1;
    tick(renderRoot);
  }, 500);
}

invokedRender();

// 给 DOM 打补丁
function patch(parent, patchObj, index = 0) {
  if (!patchObj) {
    return;
  }

  if (patchObj.type === nodePatchTypes.CREATE) {
    return render(parent, pathcObj.vdom);
  }

  const element = parent.childNode[index];

  // 删除元素
  if (patchObj.type === nodePatchTypes.REMOVE) {
    return parent.removeChild(element);
  }

  // 替换元素
  if (patchObj.type === nodePatchTypes.REPLACE) {
    return parent.raplaceChild(createElement(patchObj.vdom), element);
  }

  // 更新元素
  if (patchObj.type === nodePatchTypes.UPDATE) {
    const { props, children } = patchObj;

    patchProps(element, props);

    children.forEach((patchObj, i) => {
      patch(element, patchObj, i);
    });
  }
}

function patchProps(element, props) {
  if (!props) {
    return;
  }

  props.forEach(patchObj => {
    // 删除属性
    if (patchObj.type === propsPatchTypes.REMOVE) {
      element.removeAttribute(patchObj.key);
    }

    // 更新或创建属性
    else if (patchObj.type === propsPatchTypes.UPDATE) {
      element.setAttribute(patchObj.key, patchObj.value)
    }
  })
}
