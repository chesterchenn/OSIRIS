// export const createElement = function (type, props, child) {
//   if (child === null && child === undefined) return document.createTextNode(type)
//   const element = document.createElement(type);
//
//   setProps(element, props);
//
//   child.map(createElement).forEach(element.appendChild.bind(ele.type, ele.props, ele.child))
//
//   return element;
// };

export const createElement = function (type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.map((child) =>
        typeof child === "object" ? child : createTextElement
      ),
    },
  };
};

const createTextElement = function (text) {
  return {
    type: "TEXT_ELEMENT",
    props: {
      nodeValue: text,
      children: [],
    },
  };
};

// 自定义的 createTextElement
// const createTextElement = function (text) {
//   return document.createTextNode(text);
// }

