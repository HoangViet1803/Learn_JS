// Active modal
const template = `<div class="modal">
<div class="modal-content">
    <i class="fa fa-times modal-close"></i>
    <div class="modal-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic facere aliquam commodi aspernatur quasi deserunt, error, dolorem alias deleniti ipsam laudantium. Autem odit dolore minus, suscipit ad quisquam aperiam? Temporibus.</div>
    <div class="modal-action">
        <button class="button-cancel">Cancel</button>
        <button class="button-submit">Comfirm</button>
    </div>
</div>
</div>`
const modal = document.querySelector(".modal");
if (modal) {
    setTimeout(function() {
        modal.classList.add("is-show")
    }, 3000)
}