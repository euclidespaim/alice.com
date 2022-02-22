//script para rolagem horizontal das imagens
function removeScroll () {
    const item = document.getElementById("horizontal");

    let size = $(window).width()

    if (size < 800) {
        item.removeAttribute("id")
    } else {
        window.addEventListener("wheel", function (e) {
            if (e.deltaY > 0) {
                item.scrollLeft += 100;
            } else {
                item.scrollLeft -= 100;
            }
        });
    }
}
removeScroll()

// Script para acionar o botão menu
const toggleButton = document.getElementById("toggle-button");
const sideBar = document.getElementById("sidebar");

toggleButton.addEventListener('click', () => {
    sideBar.classList.toggle('active')
})



