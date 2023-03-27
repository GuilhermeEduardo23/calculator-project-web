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
    const largura = document.querySelector(`body`).clientWidth,
        altura = document.querySelector(`body`).clientHeight;
    
    const fundo = document.querySelector(`#imagem`);

    fundo.setAttribute(`src`, `https://source.unsplash.com/${largura}x${altura}/?calculator`);

    const calculadora = document.querySelector(`main`);
    calculadora.classList.add(`active`);

    console.log(`Largura da Main: ${calculadora.clientWidth}px`);
});