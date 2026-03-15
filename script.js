function scrollToSection(){
document.getElementById("productos").scrollIntoView({
behavior:"smooth"
});
}


document.querySelector("form").addEventListener("submit",function(e){

e.preventDefault();

alert("Gracias por contactar con ECOCAJAS 🌱");

});