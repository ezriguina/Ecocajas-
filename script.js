function scrollToSection(){
document.getElementById("productos").scrollIntoView({
behavior:"smooth"
});
}


document.querySelector("form").addEventListener("submit",function(e){

e.preventDefault();

alert("Gracias por contactar con ECOCAJAS 🌱");

});
document.querySelector(".contact-form").addEventListener("submit", function(e){

e.preventDefault()

alert("Gracias por contactar con ECOCAJAS 🌱")

})


const sections = document.querySelectorAll(".section")

window.addEventListener("scroll",()=>{

sections.forEach(section=>{

const top = section.getBoundingClientRect().top

if(top < window.innerHeight - 100){

section.style.opacity = 1
section.style.transform = "translateY(0)"

}

})

})