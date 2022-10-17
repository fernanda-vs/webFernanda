document.addEventListener("DOMContentLoaded", function (e) {

    let a = [];
    let x = 0;
    let input;

    for (let i = 0; i < 10; i++) {
        input = prompt("["+i+"] Digite o número: ");
        a.push(parseInt(input));
    }

    input = prompt("[X] Digite o número: ");
    x = parseInt(input);

    let m = a.map(function (item) {
        return x * item;
    });

    document.querySelector("#pa1").innerHTML = "A = " + a;
    document.querySelector("#pa2").innerHTML = "X = " + x;
    document.querySelector("#pa3").innerHTML = "M = " + m;

    console.log(m);


});