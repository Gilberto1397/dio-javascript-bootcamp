//forEach() – itera um array;
//push() – add item no final do array;
//pop() – remove item no final do array;
//shift() – remove item no início do array;
//unshift() – add item no início do array;
//indexOf() – retorna o índice de um valor;
//splice() – remove ou substitui um item pelo índice;
//slice() – retorna uma parte de um array existente;

let arr = [10, 20, 30];
console.log(arr);

/* arr.forEach(element => {
   console.log(element); 
}); */

/* arr.push(40);
console.log(arr); */

/* arr.pop();
console.log(arr); */

/* arr.shift();
console.log(arr); */

/* arr.unshift(15);
console.log(arr); */

/* console.log(arr.indexOf(10)); */

/* arr.splice(0, 5);
console.log(arr); */


//console.log(arr.slice(0, 3));

(
    function(){
        if (arr.length < 4) {
            arr.push(50);
            console.log(arr);
        }
    }
)();