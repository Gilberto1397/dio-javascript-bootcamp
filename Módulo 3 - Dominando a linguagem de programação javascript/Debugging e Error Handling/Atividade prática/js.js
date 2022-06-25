//Crie uma função que recebe um array e um número
//Realize as seguintes validações:
//Se os parâmetros não forem enviados, lance um erro do tipo ReferenceError
//Se o array não for do tipo 'object', lance um erro do tipo TypeError
//Se o número não for do tipo 'number', lance um erro do tipo TypeError
//Se o tamanho do array for diferente do número enviado como parâmetro, lance um erro do tipo RangeError
//Utilize a declaração try...catch
//Filtre as chamadas de catch por cada tipo de erro utilizando o operador instanceof

/* const PARAM_ERROR = new Error("Falta de parâmetros");
PARAM_ERROR.ReferenceError = "ERROOOOU";

const OBJ_ERROR = new Error("Tipo object não identificado");
OBJ_ERROR.TypeError = "Tipo object não identificado";

const NUMBER_ERROR = new Error("Tipo NUMBER não identificado");
NUMBER_ERROR.TypeError = "Tipo NUMBER não identificado";

const RANGE_ERROR = new Error("tamanho do array diferente do número enviado");
RANGE_ERROR.RangeError = "tamanho do array diferente do número enviado";

function teste(array, number){
    try {
        if (!array || !number) {
            throw PARAM_ERROR;
        }
        if (typeof(array) !== "object") {
            throw OBJ_ERROR;
        }
        if (typeof(number) !== "number") {
            throw NUMBER_ERROR;
        }
        if (array.length != number) {
            throw RANGE_ERROR;
        }else{
            console.log(array);
        }
    } catch (error) {
        console.log(error);
    }
} */


function teste2(array, number){
    try {
        if (!array || !array.length || !number) {
            throw new ReferenceError("Falta de parâmetros ou number = 0");
        }
        if (typeof(array) !== "object") {
            throw new TypeError("Tipo object não identificado");
        }
        if (typeof(number) !== "number") {
            throw new TypeError("Tipo NUMBER não identificado");
        }
        if (array.length != number) {
            throw new RangeError("tamanho do array diferente do número enviado");
        }else{
            console.log(array);
        }
    } catch (error) {
        if (error instanceof ReferenceError) {
            console.log("Erro do tipo ReferenceError");
            console.log(error.message); //APENAS A MENSAGEM
        };
        if (error instanceof TypeError) {
            console.log("Erro do tipo TypeError");
            console.log(error.message); //APENAS A MENSAGEM
        };
        if (error instanceof RangeError) {
            console.log("Erro do tipo RangeError");
            console.log(error.message); //APENAS A MENSAGEM
        };
    }
}

let arr = [1, 2, 3];
let arr2 = [];

teste2(arr, 3 );

