
let alunos = [
    ["Enzo", 7.5],
    ["Luiza", 8.0],
    ["Maria", 5.1],
    ["João", 9.5],
    ["Arthur", 2.0]
];

let destaques = [];
let maior = alunos[0][1];

alunos.filter(function(item){
    
    if (item[1] > maior) {
        maior = item[1];
    }

    if(item[1] > 7.0){
        destaques.push(item);
    }

});


if(destaques.length > 0){
    console.log("Destaques");
    console.log(destaques);
}else{
    console.log("Não há alunos em destaque na turma");
}

console.log("Maior nota = " + maior);
