const share = document.getElementById("share");
const socialMedia = document.querySelector(".social-media");
const shareBackGround = document.querySelector(".share");
// 
share.addEventListener("click", () => {
    socialMedia.classList.toggle("hidden");
    share.classList.toggle("btnBackgound");
    iconColor();
})
// Change share icon to white on click
function iconColor() {
    if (socialMedia.classList.contains("hidden")) {
        shareBackGround.setAttribute("src", "./images/icon-share.svg");
    } else {
        shareBackGround.setAttribute("src", "./images/icon-backGround-share.svg");
    }
}