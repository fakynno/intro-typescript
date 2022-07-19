"use strict";
function mostraValores(valor1, valor2) {
    console.log(valor1 + valor2);
}
function somarValoresETratar(numero1, numero2, callback) {
    let resultado = numero1 + numero2;
    return callback(resultado);
}
function aoQuadrado(numero) {
    return numero * numero;
}
console.log(somarValoresETratar(10, 12, aoQuadrado));
