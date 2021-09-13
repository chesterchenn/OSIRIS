export const createElement = function (type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.flat().map((child) =>
        typeof child === "object" ? child : createTextElement(child)
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

