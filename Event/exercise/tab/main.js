const tabItems = document.querySelectorAll('.tab-item');
const tabContent = document.querySelectorAll('.tab-content');
[...tabItems].forEach(item => item.addEventListener('click', handleTabClick));

function handleTabClick(event) {
    // xóa hết tất cả các class active ở các tab-item
    [...tabItems].forEach(item => item.classList.remove('active'));
    // sau đó add class active vào tab hiện tại
    event.target.classList.add('active');
    const tabNumber = event.target.dataset.tab;
    console.log(tabNumber);
    [...tabContent].forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute("data-tab") === tabNumber) {
            item.classList.add('active')
        };

    });
    // [...tabContent][tabNumber - 1].classList.add('active')
}