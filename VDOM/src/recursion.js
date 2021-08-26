/**
 * 使用递归方式先序遍历 DOM 树
 */
import { trimNode } from "./utils";
import { NODE_TYPE } from "./constants";

export function recursion(node, obj) {
  console.log('sssssssssss')
  const { ELEMENT_NODE, TEXT_NODE  } = NODE_TYPE;
  var flag = true;
  if (node && node.nodeType === ELEMENT_NODE) {
    console.log(node.tagName.toLowerCase());
    obj = Object.assign({}, obj, {
      type: node.tagName.toLowerCase(),
    });
  }
  if (node && node.nodeType === TEXT_NODE) {
    const val = trimNode(node);
    if (val) {
      console.log(val);
    }
  }
  var childNodes = node.childNodes;
  if (childNodes.length > 0) {
    flag = false;
  }
  for (var i = 0; i < childNodes.length; i++) {
    var item = childNodes[i];
    if (
      item.nodeType === ELEMENT_NODE ||
      item.nodeType === TEXT_NODE
    ) {
      return traversal(item, obj);
    }

  }
  if (flag) {
    return obj;
  }
}


