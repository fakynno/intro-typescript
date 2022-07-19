type entrada = number | string;

function somarValores(entrada1: number | string, entrada2: number | string) {
    if (typeof entrada1 === 'string' || typeof entrada2 === 'string') {
        return console.log(entrada1.toString() + entrada2.toString());
    } else {
        return console.log(entrada1 + entrada2);
    }
}

somarValores(10,12);
somarValores('meu nome é ', 'fabio');
somarValores('que horas são? ', 7);


function soma(valor1: entrada, valor2: entrada) {
    if (typeof valor1 === 'string' || typeof valor2 === 'string') {
        return console.log(valor1.toString() + valor2.toString());
    } else {
        return console.log(valor1 - valor2);
    }
}

soma(100,13);
soma('eu sou ','voce');
soma('Oi ',80);