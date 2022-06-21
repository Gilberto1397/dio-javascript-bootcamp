let obj = {
    name: "gilberto"
}

function ler(){
    console.log(this.name);
}

ler.call(obj);