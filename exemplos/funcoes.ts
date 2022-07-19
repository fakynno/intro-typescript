type entrada = number | string;

/* função com 2 tipos na declaração */ 

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

/* função que recebe o type */

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

/* função que especifica o tipo de retorno */

function novaSoma(valor1: number, valor2: number): number {    
        return valor1 + valor2;    
}

/* adicionando o tipo void */

function exibeValores(valor1: number, valor2: number): void {
    console.log(valor1 + valor2)    
}