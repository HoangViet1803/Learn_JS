// 1. parentNode, parentElement, removeChild
// parentNode vs parentElement
const span = document.querySelector(".span");
console.log(span.parentNode);
console.log(span.parentElement);

// selector.parentNode.removeChild(selector) or selector.parentElement.removeChild(selector)
span.parentNode.removeChild(span);