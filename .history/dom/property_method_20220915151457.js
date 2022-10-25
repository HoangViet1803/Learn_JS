// 1. selector.getAttribute("attribute") 
const link = document.querySelector(".link");
console.log(link.getAttribute("href"));

const li = document.querySelectorAll(".item");
li.forEach(item => {
    console.log(item.getAttribute("class"));
});

// 2. selector.setAttribute("attribute", value) -> set giá trị cho attribute nào đó của selector
link.setAttribute("target", "_blank");

// 3. selector.removeAttribute("attribute") -> xóa attribute của selector
const p = document.getElementById("spinner");
p.removeAttribute("style");

// 4. selector.hasAttribute("attribute") -> kiểm tra selector có attribute nào đó hay không, trả về giá trị boolean
console.log(p.hasAttribute("class"));
console.log(p.hasAttribute("id"));