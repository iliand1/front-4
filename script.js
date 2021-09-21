
//"#48556A"
const test = window.screen.availWidth;
console.log(test)
if (test<1000){
    const button = document.querySelector("#button")
button.addEventListener("mouseenter",enter)
button.addEventListener("mouseleave",leave)
}

function enter() {
    const hide =document.querySelector(".to-hide")
    const footer = document.querySelector(".card__footer")
    footer.style.backgroundColor= "#48556A"
    hide.style.visibility = "hidden"
    const hide_text = document.querySelector(".card__footer__text")
    hide_text.style.visibility = "hidden"
}
function leave() {
    const footer = document.querySelector(".card__footer")
    footer.style.backgroundColor= "white"

    const hide =document.querySelector(".to-hide")
    hide.style.visibility = "visible"
    const hide_text = document.querySelector(".card__footer__text")
    hide_text.style.visibility = "visible"
}