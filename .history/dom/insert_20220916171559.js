// 1. selector.insertAdjacentText("positon","text")
const h3 = document.querySelector('h3');
// h3.insertAdjacentText("positon","text")
// position: beforebegin, afterbegin, beforeend, afterend
// text: nội dung thêm vào
h3.insertAdjacentText("beforebegin", "begin");
h3.insertAdjacentText("afterbegin", "afterbegin");
h3.insertAdjacentText("beforeend", "beforeend");
h3.insertAdjacentText("afterend", "afterend");

// 2. selector.insertAdjacentElement("position",node)
const brNode = document.createElement("br");
h3.insertAdjacentElement("beforeend", brNode);

const strong = document.createElement("strong");
strong.textContent = "Bold"
strong.classList.add("bold");
h3.insertAdjacentElement("beforeend", strong);

// 3. selector.insertAdjacentHTML
const template = `<ul class="menu">
<li class="menu-item">1</li>
<li class="menu-item">2</li>
<li class="menu-item">3</li>
<li class="menu-item">4</li>
<li class="menu-item">5</li>
</ul>`;
document.body.insertAdjacentHTML("beforeend", template);

// 4. selector.insertBefore(newnode, existingnode)