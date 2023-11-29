/*FUNCION PARA QUE LAS PALABRAS ESTEN DESPLEGANDO UNA EN SEGUIDA DE LA OTRA (H3 SPAN)*/

var typed = new Typed('.text', {
strings:["FRONTEND DEVELOPER","WEB DEVELOPER"],
typeSpeed:100,
backSpeed:100,
backDelay:1000,
loop:true
});

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


//Funcion para que el ACTIVE se ponga dependiendo la section donde estamos
window.onscroll = () => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            //Activar section para animaciones en scroll
            sec.classList.add('show-animate');
        }
        else{
            sec.classList.remove('show-animate');
        }

    });


    //Esta funcion es para que el navbar permanezca en todas las sections
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);


    //REMOVER EL ICONO CUANDO SELECIONEMOS UNA SECTION
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    let footer = document.querySelector('footer');

    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
}
