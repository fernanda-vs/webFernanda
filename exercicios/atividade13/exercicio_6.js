let entradaValores = [10, 50, 23, 500, 242, 200, 1000, 21, 12, 501, 250, 2501];

entradaValores.filter(function(valor){
    
    if (valor % 10 == 0) {
        console.log("Saque de R$ " + valor + " válido!");
    }else{
        console.log("Saque de R$ " + valor + " inválido!");
    }

});

let saquesValidos = entradaValores.filter(valor => valor % 10 == 0);
let somaSaquesValidos = saquesValidos.reduce((soma, valor) => soma + valor, 0);



console.log("Soma válidos = "+somaSaquesValidos);
console.log(saquesValidos);
