/* forma 01 */

const empregado01 = {
    code: 10,
    name: "Fabio"
}

// o let aqui não precisa ter valores inicializados
let empregado03: {
    nome: string,
    codigo: number;
}

/* forma 02 */

const empregado02: { nome: string, codigo: number} = {
    nome: "fabio",
    codigo: 15
}


/* forma 03 */

interface Empregado {
    nomeFuncionario: string,
    codigoFuncionario: number
};


const objFuncionario1 = {} as Empregado;
objFuncionario1.codigoFuncionario = 10;
objFuncionario1.nomeFuncionario = "marcelo";

const objFuncionario2: Empregado = {
    nomeFuncionario: 'fabio',
    codigoFuncionario: 12
}