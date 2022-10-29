const nav = document.querySelector('nav');
const linksMenu = nav.querySelectorAll('.navegation-pages li a');
const button = document.querySelector('.navegation-menu-mobile');
const html = document.documentElement;

const toogleMenu = (event) => {
    if (event.type === 'touchstart') event.preventDefault();
    nav.classList.toggle('active');
    html.classList.toggle('active');

    handleClickMenu();
};

const handleClickMenu = () => {
    linksMenu.forEach((link) => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            html.classList.remove('active');
        });
    });
};

button.addEventListener('click', toogleMenu);
