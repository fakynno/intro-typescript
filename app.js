"use strict";
let button = document.getElementById('button');
let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
let deveImprimir = true;
function somaNumero(numero1, numero2) {
    return numero1 + numero2;
}
if (button) {
    button.addEventListener('click', () => {
        if (input1 && input2) {
            console.log('Resultado da soma: ', somaNumero(Number(input1.value), Number(input2.value)));
        }
    });
}
