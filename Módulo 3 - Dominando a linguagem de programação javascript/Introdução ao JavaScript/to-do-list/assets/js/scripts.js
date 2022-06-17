var tarefa = document.querySelector("#tarefa");
var add = document.querySelector("#adicionar");
var task = document.querySelector("#task");
var titulo = document.querySelector("#titulo");
var todo = document.querySelector("#todo");
var check = document.querySelectorAll(".check");

function adicionar() {
    add.addEventListener("click", function () {
        clone();
        titulo.value = tarefa.value;
        tarefa.value = "";
    })
}

function clone() {
    if (titulo.value != "") {
        var clon = task.cloneNode(true);
        todo.appendChild(clon)
    }
}

function riscar() {
    check.forEach(function (number) {
        console.log("Teste");
    });
    /* if (check.checked) {
        titulo.style.backgroundColor="black";
    }else{
        titulo.style.backgroundColor="white";
    } */
}

adicionar();

//riscar();