let nomeAlunos = ["Enzo", "Luiza", "Maria", "João", "Arthur"];
var notaAlunos = [7.5, 8.0, 5.1, 9.5, 2.0];
let media = 0;

media = notaAlunos.reduce((a, b) => a + b, 0) / notaAlunos.length;

for (let i = 0; i < 5; i++) {
    console.log("Aluno: " + nomeAlunos[i] + " - Nota: " + notaAlunos[i]);
}

console.log("Média = " + media);