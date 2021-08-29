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
        child: [val],
      });
    }
  }
  if (node && node.nodeType === ELEMENT_NODE) {
    obj = Object.assign({}, obj, {
      type: node.tagName.toLowerCase(),
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
          child: obj.child ? obj.child.concat(result) : [result],
        }
      );
    }
  }
  if (Object.keys(obj).length !== 0) {
    return obj;
  }
}
