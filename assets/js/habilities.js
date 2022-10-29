const skillDivs = document.querySelectorAll('.skill');
const textSkill = document.querySelector('.text-skill');
const skill = {
    html: 'HTML é uma linguagem de marcação de hipertexto, utilizada na construção de páginas webs por meio da estruturação de tags.',
    css: 'CSS é uma folha de estilo em cascatas, utilizada na estilização do conteúdo web.',
    js: 'JavaScript é uma linguagem de programação de alto nível, que permite a manipulação dos elementos HTML (por meio do DOM) e CSS, junto com a possibilidade da implementação de elementos dinâmicos.',
    mysql: 'MySQL é uma software responsável pelo gerenciamento de banco de dados relacional.',
    git: 'Git é um software que permite o controle de versão de arquivos. Usado principalmete para o desenvolvimento de softwares.',
    nodejs: 'NodeJS é uma plataforma de desenvolvimento (runtime), que permite a interpretação do código JavaScript dentro do ambiente do servidor.',
};

const initialDiv = (element, text, opacity) => {
    textSkill.innerHTML = text;
    element.style.opacity = opacity;
};

const activeDiv = (element, text) => {
    element.addEventListener('mouseover', () => {
        element.style.opacity = 1;
        textSkill.innerHTML = skill[text];
    });
};

const disableDiv = (element) => {
    element.addEventListener('mouseout', () => {
        element.style.opacity = 0.5;
        textSkill.innerHTML = '';
    });
};

skillDivs.forEach((div) => {
    const idSkill = div.id;
    const initialText = '# Passe o mouse ou clique em cima para mais informações #';
    const initialOpacity = 0.5;

    initialDiv(div, initialText, initialOpacity);
    activeDiv(div, idSkill);
    disableDiv(div);
});
