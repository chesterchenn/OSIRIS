/**
 * 使用递归方式先序遍历 DOM 树
 */
import { trimNode } from "./utils";
import { NODE_TYPE } from "./constants";
const { ELEMENT_NODE, TEXT_NODE } = NODE_TYPE;

export function recursion(node) {
  let obj = {};
  if (node && node.nodeType === TEXT_NODE) {
    const val = trimNode(node);
    if (val) {
      obj = Object.assign({}, obj, {
        children: [val],
      });
    }
  }
  if (node && node.nodeType === ELEMENT_NODE) {
    let props = {}
    for (i = 0; i < node.attributes.length; i++) {
      props[node.attributes[i].name] = node.attributes[i].value;
    }
    obj = Object.assign({}, obj, {
      type: node.tagName.toLowerCase(),
    }, Object.keys(props).length !== 0 && {
      props: props
    });
  }
  let childNodes = node.childNodes;
  for (var i = 0; i < childNodes.length; i++) {
    var item = childNodes[i];
    if (item.nodeType === ELEMENT_NODE || item.nodeType === TEXT_NODE) {
      const result = recursion(item);
      obj = Object.assign(
        {},
        obj,
        result && {
          children: obj.children ? obj.children.concat(result) : [result],
        }
      );
    }
  }
  if (Object.keys(obj).length !== 0) {
    return obj;
  }
}
