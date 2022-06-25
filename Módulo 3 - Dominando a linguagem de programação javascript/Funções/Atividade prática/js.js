//Crie uma função que recebe o array alunos e um número que irá representar a média final;
//Percorra o array e popule um novo array auxiliar apenas com os alunos cujas notas são maiores ou iguais à média final;
//Utilize a técnica "object destructuring" para manipular as propriedades desejadas de cada aluno.

let alunos = [
    {
        nome: "Gilberto",
        turma: "2A",
        notaFinal: 10
    },
    {
        nome: "Gabriela",
        turma: "2B",
        notaFinal: 8
    },
    {
        nome: "Bruno",
        turma: "2C",
        notaFinal: 6
    },
    {
        nome: "Pablo",
        turma: "2C",
        notaFinal: 7.5
    },
    {
        nome: "Toni",
        turma: "2C",
        notaFinal: 8.5
    }
];



/* function passou(estudantes, media){
    let alunosAprovados = [];

    for (let i = 0; i < alunos.length; i++) {
        if (estudantes[i].notaFinal >= media) {
            alunosAprovados[i] = estudantes[i].nome;
            //console.log(alunosAprovados);

        }
        
    }
    console.log(alunosAprovados);
}

passou(alunos, 9); */

/* function passou2(estudantes, media){
    let alunosAprovados = [];

    for (const {notaFinal, nome} of estudantes) {
        if (notaFinal >= media) {
            alunosAprovados.unshift(nome);
            //console.log(alunosAprovados);

        }
    }
    console.log(alunosAprovados);
}

passou2(alunos, 7); */


function passou3(estudantes, media){
    let alunosAprovados = [];

    for (let i = 0; i < alunos.length; i++) {
        const {nome, notaFinal} = estudantes[i];

        if (notaFinal >= media) {
            alunosAprovados.push(nome);
            //console.log(alunosAprovados);

        }
        
    }
    console.log(alunosAprovados);
}

//passou3(alunos, 7);



//Dada a função calculaIdade, utilize os métodos call e apply para modificar o valor de this. 
//Crie seus próprios objetos para esta atividade!

let gilberto = {
    nome: "Gilberto",
    idade: 25
}

function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
}

console.log(calculaIdade.call(gilberto, 10));