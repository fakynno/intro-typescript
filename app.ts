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