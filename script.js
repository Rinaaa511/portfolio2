const savedTheme = localStorage.getItem("theme")

if(savedTheme === "dark"){
document.documentElement.setAttribute("data-theme","dark")
}

const toggle = document.getElementById("themeToggle")

if(toggle){
toggle.addEventListener("click", () => {

let current = document.documentElement.getAttribute("data-theme")

if(current === "dark"){
document.documentElement.removeAttribute("data-theme")
localStorage.setItem("theme","light")
}else{
document.documentElement.setAttribute("data-theme","dark")
localStorage.setItem("theme","dark")
}

})
}