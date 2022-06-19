let num1 = Number(prompt("Primeiro número"));
let num2 = Number(prompt("Segundo número"));

function iguais(){
    if (num1 == num2) {
        return true;
    }else{
        return false;
    }
}

function soma(){
    if (num1 + num2 > 10 && num1 + num2 < 20) {
        return "maior que 10 e menor que 20";
    }
    if (num1 + num2 > 10) {
        return "maior que 10";
    }
    if (num1 + num2 < 10) {
        return "menor que 10";
    }
}

function resultado(){
    //Os números num1 e num2 não/são iguais. Sua soma é soma, que é maior/menor que 10 e maior/menor que 20".
    if (!iguais()) {
        console.log(`Os número ${num1} e ${num2} não são iguais. Sua soma é = ${num1+num2}, que é ${soma()}`);
    }else{
        console.log(`Os número ${num1} e ${num2} são iguais. Sua soma é = ${num1+num2}, que é ${soma()}`);
    }
}

resultado();