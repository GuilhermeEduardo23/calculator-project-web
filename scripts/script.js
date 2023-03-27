function calcular(n1, n2) {
    n1 = parseFloat(document.querySelector("#n1").value);
    n2 = parseFloat(document.querySelector("#n2").value);
    selector = document.querySelector("#selector").value;

    switch(selector) {
        case '+':
            calculo = (n1 + n2);
            break;
        case '-':
            calculo = (n1 - n2);
            break;
        case '*':
            calculo = (n1 * n2);
            break;
        case '/':
            calculo = Math.round((n1 / n2));
            if(Number.isNaN(calculo)) {
                document.querySelector("#resultado").innerText = "Insira um divisível válido!";
            }
            break;
    }

    document.querySelector("#resultado").innerText = `Resultado = ${calculo}`;
}

window.addEventListener(`load`, () => {
    const fundo = document.querySelector(`#imagem`);

    fundo.setAttribute(`src`, `https://source.unsplash.com/2000x1300/?calculator`);

    const calculadora = document.querySelector(`main`);

    calculadora.classList.add(`active`);

    const principal = document.querySelector(`body`);
    principal.classList.add(`responsive`);

    if(principal.classList.value === `responsive`)
        fundo.setAttribute(`src`, `https://source.unsplash.com/375x667/?calculator`);
});