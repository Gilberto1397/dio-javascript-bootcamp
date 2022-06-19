let teste1 = "teste";
const TESTE2 = "cachorro";

function tipo(x){
    if (typeof(x) === "number") {
        console.log("Passou");
    }
}

function teste(){
    teste1 = "casa"
    console.log(teste1);
    console.log(TESTE2);
}
console.log(teste1);

teste();
tipo(9);

console.log(2**5);