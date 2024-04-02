const handburger = document.querySelector(".handburger")
const navbar = document.querySelector(".navbar");


handburger.addEventListener("click", (e) => {
    e.preventDefault()
    handburger.classList.toggle("active");
    navbar.classList.toggle("active")
});



document.querySelectorAll(".navbar li").forEach(n => n.addEventListener("click", ()=>{
    handburger.classList.remove("active");
    navbar.classList.remove("active");
}))