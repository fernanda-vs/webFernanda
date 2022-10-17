document.addEventListener("DOMContentLoaded", function (e) {
    let clientes = [];

    let tempNome;
    let tempIdade;


    do{
        tempNome = prompt("Digite o nome do cliente: (use Fim para terminar)");
        
        if(tempNome != "Fim"){
            tempIdade = prompt("Digite a idade: ");
            clientes.push([tempNome, parseFloat(tempIdade)]);
        }
        
    }while(tempNome != "Fim");

    let filaNormal = clientes.filter(item => item[1] <= 59);
    let filaPreferencial = clientes.filter(item => item[1] >= 60);

    for (let i = 0; i < filaPreferencial.length; i++) {
        document.querySelector("#preferencial").innerHTML += "<li>"+ filaPreferencial[i] +"</li>";
        
    }
    for (let i = 0; i < filaNormal.length; i++) {
        document.querySelector("#normal").innerHTML += "<li>"+ filaNormal[i] +"</li>";
        
    }

    console.log(filaNormal);
    console.log(filaPreferencial);

});

