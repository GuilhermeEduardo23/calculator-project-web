//Botão Calcular
const calc = document.getElementById(`calculate`);

function calcular() {
    const n1 = parseFloat(document.getElementById(`n1`).value);
    const n2 = parseFloat(document.getElementById(`n2`).value);
    const selector = document.getElementById(`selector`).value;
    const result = document.getElementById(`result`);

        switch(selector) {
            case '+':
                calculo = (n1 + n2).toFixed(2);
                break;
            case '-':
                calculo = (n1 - n2).toFixed(2);
                break;
            case '*':
                calculo = (n1 * n2).toFixed(2);
                break;
            case '/':
                calculo = Math.round((n1 / n2)).toFixed(2);
                if(Number.isNaN(calculo)) {
                    document.getElementById("resultado").innerHTML = "Insira um divisível válido!";
                }
                break;
        }
        result.textContent = `Resultado = ${calculo}`;
}

calc.addEventListener(`click`, calcular);

//Botão Limpar

const clean = document.getElementById(`clean`);

function limpar() {
    let n1 = document.getElementById(`n1`);
    let n2 = document.getElementById(`n2`);
    let resultado = document.getElementById(`result`);

    n1.value = ``;
    n2.value = ``;
    resultado.textContent = ``;
}

clean.addEventListener(`click`, limpar);