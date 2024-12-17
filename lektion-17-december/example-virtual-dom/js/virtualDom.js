function createElement(tag, props = {}, ...children) {
  return { tag, props, children };
}

function render(vdom) {
  if (typeof vdom === "string") {
    return document.createTextNode(vdom);
  }

  const element = document.createElement(vdom.tag);

  for (const [key, value] of Object.entries(vdom.props)) {
    element.setAttribute(key, value);
  }

  vdom.children.forEach((child) => {
    element.appendChild(render(child));
  });

  return element;
}

export { createElement, render };
