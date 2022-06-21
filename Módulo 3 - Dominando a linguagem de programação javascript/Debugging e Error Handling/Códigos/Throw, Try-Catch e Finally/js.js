function teste(){
    if (false) {
        console.log("Na função");
    } else {
        throw "Erro"
    }
}

try {
    teste();
} catch (error) {
    console.log("Erro AQUI " + error);
}