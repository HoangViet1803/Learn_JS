const accordionHeader = document.querySelectorAll(".accordion-header");
[...accordionHeader].forEach(item => item.addEventListener('click', handleClickAccordion));

function handleClickAccordion(e) {
    // console.log(e.target);
    const content = e.target.nextElementSibling;
    content.style.height = `${content.scrollHeight}px`; // scrollHeight: chiều cao của phần tử bao gồm padding
    content.classList.toggle('is-active');
    if (!content.classList.contains("is-active")) {
        content.style.height = 0;
    }
    const icon = e.target.querySelector('.icon');
    // console.log(icon);
    icon.classList.toggle("fa-angle-down");
    icon.classList.toggle("fa-angle-up");

}