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
