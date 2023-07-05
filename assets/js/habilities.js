const skillDivs = document.querySelectorAll(".skill");
const textSkill = document.querySelector(".text-skill");
const skill = {
    typescript:
        "O TypeScript é uma linguagem de programação que estende o JavaScript, adicionando recursos de tipagem estática e programação orientada a objetos. Ele permite especificar tipos de dados para variáveis, objetos e funções, melhorando a segurança e detectando erros em tempo de compilação.",
    mysql: "MySQL é um sistema de gerenciamento de banco de dados relacional (SGBDR) de código aberto desenvolvido pela Oracle Corporation. É um dos SGBDR mais famoso na área de desenvolvimento.",
    postgresql:
        "O PostgreSQL é um sistema de gerenciamento de banco de dados relacional (SGBDR) de código aberto e altamente avançado. Ele é conhecido por sua confiabilidade, flexibilidade e recursos robustos, e é amplamente utilizado em uma variedade de aplicativos, desde pequenos projetos até grandes empresa",
    java: "Java é uma linguagem de programação de alto nível e orientada a objetos, desenvolvida pela Sun Microsystems (adquirida pela Oracle Corporation)",
    git: "Git é um software que permite o controle de versão de arquivos. Usado principalmete para o desenvolvimento de softwares.",
    nodejs: "NodeJS é uma plataforma de desenvolvimento (runtime), que permite a interpretação do código JavaScript dentro do ambiente do servidor.",
};

const initialDiv = (element, text, opacity) => {
    textSkill.innerHTML = text;
    element.style.opacity = opacity;
};

const activeDiv = (element, text) => {
    element.addEventListener("mouseover", () => {
        element.style.opacity = 1;
        textSkill.innerHTML = skill[text];
    });
};

const disableDiv = (element) => {
    element.addEventListener("mouseout", () => {
        element.style.opacity = 0.5;
        textSkill.innerHTML = "";
    });
};

skillDivs.forEach((div) => {
    const idSkill = div.id;
    const initialText = "# Passe o mouse ou clique em cima para mais informações #";
    const initialOpacity = 0.5;

    initialDiv(div, initialText, initialOpacity);
    activeDiv(div, idSkill);
    disableDiv(div);
});
