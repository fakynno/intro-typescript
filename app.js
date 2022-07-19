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
