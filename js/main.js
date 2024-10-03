document.querySelectorAll("#mainContent .squareBox").forEach(ele => ele.style.height = `${ele.offsetWidth}px`)

if (window.innerWidth < 768) {
    document.querySelectorAll("#mainContent div div")[0].style.height = "600px"
    document.querySelector("#natureVideo h1").style.fontSize = `${window.innerWidth*0.065}px`
    document.querySelector("#natureVideo p").style.fontSize = `${window.innerWidth*0.031}px`
    document.querySelectorAll("#activity p").forEach(ele => ele.style.fontSize = `36px`)
    document.querySelector("#activity h1").style.fontSize = "48px"
} else {
    document.querySelectorAll("#activity p").forEach(ele => ele.style.fontSize = `${window.innerWidth*0.03}px`)
}

window.onresize = () => {
    document.querySelectorAll("#mainContent .squareBox").forEach(ele => ele.style.height = `${ele.offsetWidth}px`)
    
    if (window.innerWidth < 768) {
        document.querySelectorAll("#mainContent div div")[0].style.height = "600px"
        document.querySelector("#natureVideo h1").style.fontSize = `${window.innerWidth*0.065}px`
        document.querySelector("#natureVideo p").style.fontSize = `${window.innerWidth*0.031}px`
        document.querySelectorAll("#activity p").forEach(ele => ele.style.fontSize = `36px`)
        document.querySelector("#activity h1").style.fontSize = "48px"
    } else {
        document.querySelectorAll("#mainContent div div")[0].style.height = "800px"
        document.querySelector("#natureVideo h1").style.fontSize = "56px"
        document.querySelector("#natureVideo p").style.fontSize = "35px"
        document.querySelectorAll("#activity p").forEach(ele => ele.style.fontSize = `${window.innerWidth*0.033}px`)
        document.querySelector("#activity h1").style.fontSize = "56px"
    }
}

document.querySelectorAll("#activity p").forEach((ele) => {
    ele.parentElement.onmouseover = () => {ele.classList.add("visible")}
    ele.parentElement.onmouseleave = () => {ele.classList.remove("visible")}

    ele.parentElement.ontouchstart = () => {ele.classList.add("visible")}
    ele.parentElement.ontouchend = () => {ele.classList.remove("visible")}
})