document.addEventListener("DOMContentLoaded", function (e) {
    let entradaValores = [];
    let input;

    while(input != 0){
        input = prompt("Digite o valor: ");
        input = parseFloat(input);

        if(input != 0){
            entradaValores.push(input);
            if(input % 10 == 0){
                alert("Saque válido!");
            }else{
                alert("Saque inválido!");
            }
        }
    }

    let saquesValidos = entradaValores.filter(valor => valor % 10 == 0);
    let somaSaquesValidos = saquesValidos.reduce((soma, valor) => soma + valor, 0);

    document.querySelector("#pa1").innerHTML += somaSaquesValidos;
    console.log("Soma válidos = "+somaSaquesValidos);

    document.querySelector("#pa2").innerHTML += saquesValidos;
    console.log(saquesValidos);
});