function calcular(n1, n2) {
    n1 = parseFloat(document.getElementById("n1").value);
    n2 = parseFloat(document.getElementById("n2").value);
    informacao = document.getElementById("resultado");
    selector = document.getElementById("selector").value;

    const numeroNaoInformado = n1 === `` || n2 === ``;

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
                document.getElementById("resultado").innerHTML = "Insira um divisível válido!";
            }
            break;
    }

    document.getElementById("resultado").innerHTML = `Resultado = ${calculo}`;
}