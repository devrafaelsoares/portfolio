const links = document.querySelectorAll('.navegation-pages a');

links.forEach((link) => {
    link.addEventListener('click', scroolLink);
});

function scroolLink(event) {
    event.preventDefault();
    const go = getIdLink(event.target);
    configScroll(go);
}

function getIdLink(element) {
    const id = element.getAttribute('href');
    return document.querySelector(id).offsetTop;
}

function configScroll(go) {
    window.scroll({
        top: go,
        behavior: 'smooth',
    });
}
