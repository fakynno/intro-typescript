const pessoa = {
    nome: 'Fabio',
    idade: 39,
    profissao: 'desenvolvedor'
}

pessoa.idade = 33;

const novaPessoa: {nome: string, idade: number, profissao: string} = {
    nome: 'fabricio',
    idade: 12,
    profissao: 'pedreiro'
}

const outraPessoa: {nome: string, idade: number, profissao: string} = {
    nome: 'Mauricio',
    idade: 26,
    profissao: 'Desenvolvedor'
}

interface Pessoa {
    nome: string,
    idade: number,
    profissao?: Profissao
}

interface Estudante extends Pessoa {
    materias: string[]
}

enum Profissao {
    Desenvolvedor,
    Atriz,
    Professor,
    Pedreiro
}

const pessoaInterface: Pessoa = {
    nome: 'Jose',
    idade: 35,
    profissao: Profissao.Pedreiro
}

const novoEstudante: Estudante = {
    nome: 'Luigi',
    idade: 13,
    profissao: Profissao.Professor,
    materias: ['Português', 'Inglês', 'Programação', 'Ciências', 'História']
}

const outroEstudante: Estudante = {
    nome: 'Gabriel',
    idade: 16,    
    materias: ['Inglês','Português']
}

console.log('lista de matérias: ');

function listar(lista: string[]) {
    for (let item of lista) {
        console.log(' - ', item);
        
    }
}

listar(novoEstudante.materias);