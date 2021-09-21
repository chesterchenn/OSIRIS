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

function tick() {
  if (state.num > 20) {
    clearTimeout(timer);
    return;
  }
  const newVDOM = view();

  // render(newVDOM, renderRoot)
  const patchObj = diff(preVDom, newVDOM);
  console.log(patchObj)

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

// 给 DOM 打补丁
function patch(parent, patchObj, index = 0) {
  if (!patchObj) {
    return;
  }

  if (patchObj.type === nodePatchTypes.CREATE) {
    return render(patchObj.vdom, parent);
  }

  if (!parent) return
  const element = parent.childNodes[index];

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
    const { children } = patchObj.props;

    const props = children.props;
    patchProps(element, props);

    children.forEach((p, i) => {
      if (!p) return;

      patch(element, p, i);
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
