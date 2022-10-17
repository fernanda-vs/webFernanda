document.addEventListener("DOMContentLoaded", function (e) {
    let nomeAlunos = [];
    let notaAlunos = [];
    let input;

    for (let i = 0; i < 5; i++) {
        input = prompt("Digite o nome do aluno " + i + ":");
        nomeAlunos.push(input);
        input = prompt("Digite a nota do aluno " + i + ":");
        notaAlunos.push(parseInt(input));
    }

    let media = 0;

    media = notaAlunos.reduce((a, b) => a + b, 0) / notaAlunos.length;

    for (let i = 0; i < 5; i++) {
        document.querySelector("table").innerHTML += "<tr><td>" + nomeAlunos[i] + "</td><td>" + notaAlunos[i] + "</td></tr>";
        console.log("Aluno: " + nomeAlunos[i] + " - Nota: " + notaAlunos[i]);
    }

    document.querySelector("table").innerHTML += "<tr><td>Média</td><td>" + media + "</td></tr>";
    console.log("Média = " + media);

});

