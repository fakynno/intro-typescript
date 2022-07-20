"use strict";
let anyIsBack;
anyIsBack = 12;
anyIsBack = 'ola';
anyIsBack = true;
let stringTeste = 'checa palavra';
stringTeste = anyIsBack;
let valorUnknown;
valorUnknown = 125;
valorUnknown = 'oie';
valorUnknown = true;
valorUnknown = 'so vai';
let stringTeste2 = 'valor de variável';
// stringTeste2 = valorUnknown;
if (typeof valorUnknown === 'string') {
    stringTeste2 = valorUnknown;
}
/* o tipo never é sobre um código que nunca foi finalizado */
function jogaErro(mensagem, codigo) {
    throw {
        error: mensagem,
        code: codigo
    };
}
jogaErro('ocurreu um erro do tipo ', 500);
