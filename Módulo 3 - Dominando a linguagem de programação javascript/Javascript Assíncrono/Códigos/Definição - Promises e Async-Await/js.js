let myPromisse = new Promise((resolve, rejected) => {
    window.setTimeout(() => {
        resolve("Resolvida");
    }, 2000);
})

await myPromisse.then((result) => result);

console.log(myPromisse);