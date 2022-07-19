"use strict";
const pessoa = {
    nome: 'Fabio',
    idade: 39,
    profissao: 'desenvolvedor'
};
pessoa.idade = 33;
const novaPessoa = {
    nome: 'fabricio',
    idade: 12,
    profissao: 'pedreiro'
};
const outraPessoa = {
    nome: 'Mauricio',
    idade: 26,
    profissao: 'Desenvolvedor'
};
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Desenvolvedor"] = 0] = "Desenvolvedor";
    Profissao[Profissao["Atriz"] = 1] = "Atriz";
    Profissao[Profissao["Professor"] = 2] = "Professor";
    Profissao[Profissao["Pedreiro"] = 3] = "Pedreiro";
})(Profissao || (Profissao = {}));
const pessoaInterface = {
    nome: 'Jose',
    idade: 35,
    profissao: Profissao.Pedreiro
};
const novoEstudante = {
    nome: 'Luigi',
    idade: 13,
    profissao: Profissao.Professor,
    materias: ['Português', 'Inglês', 'Programação', 'Ciências', 'História']
};
const outroEstudante = {
    nome: 'Gabriel',
    idade: 16,
    materias: ['Inglês', 'Português']
};
console.log('lista de matérias: ');
function listar(lista) {
    for (let item of lista) {
        console.log(' - ', item);
    }
}
listar(novoEstudante.materias);
