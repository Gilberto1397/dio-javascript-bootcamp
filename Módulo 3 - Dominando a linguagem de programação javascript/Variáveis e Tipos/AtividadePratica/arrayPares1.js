function substituiPares(array){
    if (!array) return -1; //caso de null e undefined
    if (!array.length) return -1; // se for vazio
    
    for (let i = 0; i < array.length; i++) {
        if (typeof(array[i]) === "string") {
            return "TEM LETRA AQUI"
        }
        if (array[i] === 0) {
            console.log("Você já é zero!!!");
        }else if (array[i] % 2 === 0) {
            console.log(`Substituindo ${array[i]} por 0...`);
            array[i] = 0;
        }
    }
    return array;
}

let arr = [1, 3, 0, 0, 4, 6, 80, 33, 23, 90];
let arr2 = ["a", "b"]

/* arr.forEach(element => {
    if (typeof(element) === "string") {
        console.log("OPA");
    }   
}); */

console.log(substituiPares(arr));