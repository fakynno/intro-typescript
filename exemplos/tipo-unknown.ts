let anyIsBack: any;
anyIsBack = 12;
anyIsBack = 'ola';
anyIsBack = true;

let stringTeste: string = 'checa palavra';
stringTeste = anyIsBack;

let valorUnknown: unknown;
valorUnknown = 125;
valorUnknown = 'oie';
valorUnknown = true;
valorUnknown = 'so vai';

let stringTeste2: string = 'valor de variável';
// stringTeste2 = valorUnknown;

if (typeof valorUnknown === 'string') {
    stringTeste2 = valorUnknown;
}