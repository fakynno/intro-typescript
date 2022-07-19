"use strict";
function somarValores(entrada1, entrada2) {
    if (typeof entrada1 === 'string' || typeof entrada2 === 'string') {
        return console.log(entrada1.toString() + entrada2.toString());
    }
    else {
        return console.log(entrada1 + entrada2);
    }
}
somarValores(10, 12);
somarValores('meu nome é ', 'fabio');
somarValores('que horas são? ', 7);
function soma(valor1, valor2) {
    if (typeof valor1 === 'string' || typeof valor2 === 'string') {
        return console.log(valor1.toString() + valor2.toString());
    }
    else {
        return console.log(valor1 - valor2);
    }
}
soma(100, 13);
soma('eu sou ', 'voce');
soma('Oi ', 80);
