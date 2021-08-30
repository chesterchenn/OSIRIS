export const createElement = function (type, props, child) {
  if (child === null && child === undefined) return document.createTextNode(type)
  const element = document.createElement(type);

  setProps(element, props);

  child.map(createElement).forEach(element.appendChild.bind(ele.type, ele.props, ele.child))

  return element;
};

const setProps = function (element, props) {
  for (key in props) {
    element.setAttribute(key, props[key]);
  }
};

