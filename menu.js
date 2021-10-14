//js menu

const iconoMenu = document.querySelector('#icono-menu'),
    menu = document.querySelector('#menu');

iconoMenu.addEventListener('click', (e) => {
    menu.classList.toggle('active');
    document.body.classList.toggle('opaciti');

    const rutaActual = e.target.getAttribute('src');

    if(rutaActual == '/Css/Imagenes/open-menu.png'){
        e.target.setAttribute('src', '/Css/Imagenes/open-menu2.png');
    }
    else {
        e.target.setAttribute('src', '/Css/Imagenes/open-menu.png');
    }
});