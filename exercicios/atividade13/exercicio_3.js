
let temperaturaSemana = [17, 23, 20, 15, 27, 21, 20];

let menor = temperaturaSemana[0];
let maior = temperaturaSemana[0];

temperaturaSemana.filter(function(item){
    
    if (item > maior) {
      maior = item;
    }

    if (item < menor) {
        menor = item;
    }
});


console.log("Maior temperatura da semana = " + maior);
console.log("Menor temperatura da semana = " + menor);