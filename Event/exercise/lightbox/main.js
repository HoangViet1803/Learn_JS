const images = document.querySelectorAll(".content img");
[...images].forEach(item => item.addEventListener('click', handelZoomImage));
console.log([...images]);

function handelZoomImage(e) {
    // console.log(e.target);
    const imgSrc = e.target.getAttribute("src");
    const template = `<div class="lightbox">
    <div class="lightbox-content">
        <i class="fa fa-angle-left lightbox-prev"></i>
        <img src="${imgSrc}" alt="img" class="lightbox-img">
        <i class="fa fa-angle-right lightbox-next"></i>
    </div>
</div>`;
    document.body.insertAdjacentHTML("beforeend", template)
}
// let index = 0;
document.body.addEventListener('click', function(e) {
    let lightImg = document.querySelector(".lightbox-img");
    if (!lightImg) return;
    let lightImgSrc = lightImg.getAttribute("src");
    let index = [...images].findIndex(item => item.src === lightImgSrc);
    if (e.target.matches(".lightbox")) {
        e.target.parentNode.removeChild(e.target)
    } else if (e.target.matches(".lightbox-next")) {
        index += 1;
        if (index > [...images].length - 1) {
            index = 0;
        };
        displayLightimg(index, lightImg);
    } else if (e.target.matches(".lightbox-prev")) {
        index -= 1;
        if (index < 0) {
            index = [...images].length - 1;
        };
        displayLightimg(index, lightImg);
    }
})

function displayLightimg(index, lightImg) {
    let newSrc = [...images][index].src;
    lightImg.setAttribute("src", newSrc)
}