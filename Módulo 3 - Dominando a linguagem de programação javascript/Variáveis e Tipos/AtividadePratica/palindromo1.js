//Atividade 1

//Solução 1
function verificaPalindromo(string){
    if (!string) return;

    return string.split(" ").reverse().join(" ") // separou as letras da palavra em um array / reverteu a ordem / juntou tudo
        // por ultimo verificou se era igual
}

//console.log(verificaPalindromo("Apos a sopa"));

//Solução 2

function verificaPalindromo2(string){
    if (!string) return "string inexistente";

        //verifica se é palindromo através dos extremos correspondentes.
        for (let index = 0; index < string.length; index++) {
            if (string[index] !== string[string.length - 1 - index]) { // irá verifica se o primeiro é igual ao último e sucessivamente
                return false;
            }        
        }
        return true;
}

//console.log(verificaPalindromo2("abba"));