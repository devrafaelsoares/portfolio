const spanName = document.querySelector('#nome');
const valueName = spanName.innerHTML;

const typeWriter = (name, span) => {
    const arrayName = [...name];
    span.innerHTML = '';
    return arrayName.forEach((letter, index) => {
        setTimeout(() => {
            span.innerHTML += letter;
        }, 100 * index);
    });
};

typeWriter(valueName, spanName);
