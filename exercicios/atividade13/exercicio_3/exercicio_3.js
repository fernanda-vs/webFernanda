document.addEventListener("DOMContentLoaded", function (e) {

  let temperaturaSemana = [];
  let input;

  for (let i = 0; i < 7; i++) {
    input = prompt("Temperatura Dia " + i + ":");
    temperaturaSemana.push(parseFloat(input));
    
  }

  let menor = temperaturaSemana[0];
  let maior = temperaturaSemana[0];

  temperaturaSemana.filter(function (item) {

    if (item > maior) {
      maior = item;
    }

    if (item < menor) {
      menor = item;
    }
  });

  document.querySelector("#pa1").innerHTML = "Maior temperatura da semana = " + maior;
  document.querySelector("#pa2").innerHTML = "Menor temperatura da semana = " + menor;

  console.log("Maior temperatura da semana = " + maior);
  console.log("Menor temperatura da semana = " + menor);
});

