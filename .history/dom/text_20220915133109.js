// 1. textContent -> lấy nội dung của thẻ, bao gồm nội dung các thẻ con của thẻ đó và các khoảng trắng
// lấy được nội dung của thẻ có thuộc tính display: none
const spinner = document.querySelector("#spinner");
console.log(spinner.textContent);
// thay đổi text content
// spinner.textContent = "New Content";
console.log(spinner.textContent);

// 2. innerText -> lấy nội dung của thẻ, bao gồm nội dung các thẻ con của thẻ đó, trừ các thẻ có display: none, không lấy các khoảng trắng 
console.log(spinner.innerText);

// 3. innerHTML -> lấy ra nội dung của selector bao gồm cả HTML
console.log(spinner.innerHTML);
spinner.innerHTML = `<div class="test">HELLO innerHTML</div>`