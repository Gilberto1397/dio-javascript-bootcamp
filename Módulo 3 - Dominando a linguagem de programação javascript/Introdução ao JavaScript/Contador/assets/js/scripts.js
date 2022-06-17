var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;
var subtrair = document.querySelector("#subtrair");
var adicionar = document.querySelector("#adicionar");

function color(){
    if (currentNumber < 0) {
        currentNumberWrapper.style.color="white";
    }else{
        currentNumberWrapper.style.color="black"; 
    }
    if (currentNumber > 8) {
        currentNumberWrapper.style.color="red";
    }
}

adicionar.addEventListener("click", function(){
    if (currentNumber < 10) {
        increment();
    }
    color()
})

subtrair.addEventListener("click", function(){
    if (currentNumber > -2) {
        decrement();
    }
    color()
})

function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
}