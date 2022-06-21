let arr = [ 2, 6, 8, 9];
let vazio = [];

/* for (let i = 0; i < arr.length; i++) {
    vazio.push(arr[i] * 2);
}
console.log(vazio); */

for (const key in arr) {
    vazio.push(Number(key))
}
console.log(vazio);