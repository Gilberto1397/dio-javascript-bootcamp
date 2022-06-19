let valor1 = Number(prompt("Primeiro Valor"));
let operador = prompt("Operação");
let valor2 = Number(prompt("Segundo Valor"));

function operacao() {
    switch (operador) {
        case '+':
            somar()
            break;

        case '-':
            subtrair()
            break;

        case '/':
            dividir()
            break;

        case '*':
            multiplicar()
            break;
        default:
            console.log(`Sorry, we are out of ${expr}.`);

    }
}

function somar(){
    console.log(valor1 + valor2);
}

function subtrair(){
    console.log(valor1 - valor2);
}

function dividir(){
    console.log(valor1 / valor2);
}

function multiplicar(){
    console.log(valor1 * valor2);
}

operacao()