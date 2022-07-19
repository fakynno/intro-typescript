"use strict";
let button = document.getElementById('button');
let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
function somaNumero(numero1, numero2, deveImprimir, frase) {
    let soma = numero1 + numero2;
    if (deveImprimir) {
        console.log(frase + soma);
    }
    return soma;
}
let deveImprimir = true;
let frase = 'O resultado é: ';
if (button) {
    button.addEventListener('click', () => {
        if (input1 && input2) {
            console.log(somaNumero(Number(input1.value), Number(input2.value), deveImprimir, frase));
        }
    });
}
