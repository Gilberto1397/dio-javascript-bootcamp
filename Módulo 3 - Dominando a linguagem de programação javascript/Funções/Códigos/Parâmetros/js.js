//OBJ arguments.

function teste(){
    return arguments.length;
}
console.log(teste(1, 2, 3));


//Spread

/* var arr = [1,2,3];

function show(a,b,c){
    return a;
}
console.log(show(...arr)); */


//Rest

function show(...args){
    return args;
}
console.log(show(1,2,3));