console.log(mainContent.getBoundingClientRect().y)

document.addEventListener('scroll', () => {
    if (window.scrollY > mainContent.getBoundingClientRect().y-300) {
        mainContent.firstElementChild.classList.add("animate__animated")
        mainContent.firstElementChild.classList.add("animate__slideInUp")
        mainContent.firstElementChild.classList.add("show-visible")
    }
})

if (window.innerWidth < 768) {
    document.querySelector("#mainContact h1").style.fontSize = "48px"
    document.querySelector("#mainContact img").style.display = "none"
} else {
    document.querySelector("#mainContact h1").style.fontSize = `${window.innerWidth*0.044}px`
}

window.onresize = () => {
    if (window.innerWidth < 768) {
        document.querySelector("#mainContact h1").style.fontSize = "48px"
        document.querySelector("#mainContact img").style.display = "none"
    } else {
        document.querySelector("#mainContact h1").style.fontSize = `${window.innerWidth*0.044}px`
        document.querySelector("#mainContact img").style.display = "inline"
    }
}