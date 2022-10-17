document.addEventListener("DOMContentLoaded", function (e) {


    let alunos = [];

    let tempNome;
    let tempNota;


    do{
        tempNome = prompt("Digite o nome do Aluno: (use Fim para terminar)");
        
        if(tempNome != "Fim"){
            tempNota = prompt("Digite a nota: ");
            alunos.push([tempNome, parseFloat(tempNota)]);
        }
        
    }while(tempNome != "Fim");

    let destaques = [];
    let maior = alunos[0][1];

    alunos.filter(function (item) {

        if (item[1] > maior) {
            maior = item[1];
        }

        if (item[1] > 7.0) {
            destaques.push(item);
        }

    });


    if (destaques.length > 0) {
        console.log("Destaques");
        console.log(destaques);

        document.querySelector("#pa1").innerHTML = "Destaques";

        for (let i = 0; i < destaques.length; i++) {
            document.querySelector("ul").innerHTML += "<li>"+destaques[i]+"</li>";
        }
        

    } else {
        document.querySelector("#pa1").innerHTML = "Destaques";
        console.log("Não há alunos em destaque na turma");
    }
    document.querySelector("#pa3").innerHTML = "Maior nota = " + maior;
    console.log("Maior nota = " + maior);
});