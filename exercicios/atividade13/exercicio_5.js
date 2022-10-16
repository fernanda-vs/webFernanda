let clientes = [
    ["Enzo", 80],
    ["Luiza", 61],
    ["Maria", 31],
    ["João", 11],
    ["Arthur", 22]
];

let filaNormal = clientes.filter(item => item[1] <= 59);
let filaPreferencial = clientes.filter(item => item[1] >= 60);

console.log(filaNormal);
console.log(filaPreferencial);