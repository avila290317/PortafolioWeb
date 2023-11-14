/*FUNCION PARA QUE LAS PALABRAS ESTEN DESPLEGANDO UNA EN SEGUIDA DE LA OTRA (H3 SPAN)*/

var typed = new Typed('.text', {
strings:["FRONTEND DEVELOPER","WEB DEVELOPER"],
typeSpeed:100,
backSpeed:100,
backDelay:1000,
loop:true
});

/*FUNCION PARA EL MENU-ICON*/
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open')
    console.log("HOLA")
};
