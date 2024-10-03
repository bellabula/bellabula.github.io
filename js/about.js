// screen size change
if (window.innerWidth >= 768) {
    document.querySelectorAll("#toptitle p")[0].style.display = "none"
    document.querySelectorAll("#toptitle p")[1].style.display = "block"
    document.querySelectorAll("#toptitle p")[1].style.fontSize = `${window.innerWidth/12}px`
    document.querySelectorAll("#toptitle+div p")[0].style.fontSize = `${window.innerWidth/30}px`
    toptitle.nextElementSibling.lastElementChild.style.fontSize = `${window.innerWidth*0.0134}px`
} else {
    document.querySelectorAll("#toptitle p")[0].style.display = "block"
    document.querySelectorAll("#toptitle p")[1].style.display = "none"
    document.querySelectorAll("#toptitle+div p")[0].style.fontSize = `${window.innerWidth*0.063}px`
    toptitle.nextElementSibling.lastElementChild.style.fontSize = `${window.innerWidth*0.0235}px`
}

let mdScreen = window.matchMedia("(max-width: 768px)")

mdScreen.onchange = () => {
    if (window.innerWidth > 768) {
        document.querySelectorAll("#toptitle p")[0].style.display = "none"
        document.querySelectorAll("#toptitle p")[1].style.display = "block"
    } else {
        document.querySelectorAll("#toptitle p")[0].style.display = "block"
        document.querySelectorAll("#toptitle p")[1].style.display = "none"
    }
}

window.onresize = () => {
    if (window.innerWidth >= 768) {
        document.querySelectorAll("#toptitle p")[1].style.fontSize = `${window.innerWidth/12}px`
        document.querySelectorAll("#toptitle+div p")[0].style.fontSize = `${window.innerWidth/30}px`
        toptitle.nextElementSibling.lastElementChild.style.fontSize = `${window.innerWidth*0.0134}px`
    } else {
        document.querySelectorAll("#toptitle+div p")[0].style.fontSize = `${window.innerWidth*0.063}px`
        toptitle.nextElementSibling.lastElementChild.style.fontSize = `${window.innerWidth*0.0235}px`
    }
}

if (team.offsetTop > window.innerHeight) {
    document.addEventListener('scroll',() => {
        if (window.scrollY=team.offsetTop) {
            team.classList.add("showAnimate")
        }
    })
}
