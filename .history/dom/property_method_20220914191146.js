// 1. selector.getAttribute("attribute") 
const link = document.querySelector(".link");
console.log(link.getAttribute("href"));

const li = document.querySelectorAll(".item");
li.forEach(item => {
    item.getAttribute("class")
})