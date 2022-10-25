// 1. textContent -> lấy nội dung của thẻ, bao gồm nội dung các thẻ con của thẻ đó và các khoảng trắng
const spinner = document.querySelector("#spinner");
console.log(spinner.textContent);
// thay đổi text content
spinner.textContent = "New Content";
console.log(spinner.textContent);