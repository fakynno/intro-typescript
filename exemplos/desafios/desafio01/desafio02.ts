enum NovaProfissao {
    Atriz,
    Padeiro
}

interface NovaPessoa {
    nome: string,
    idade: number,
    profissao: NovaProfissao
}

let pessoa1: NovaPessoa = {
    nome: "maria",
    idade: 25,
    profissao: NovaProfissao.Atriz
}

let pessoa2: NovaPessoa = {
    nome: "roberto",
    idade: 19,
    profissao: NovaProfissao.Padeiro
}

let pessoa3: NovaPessoa = {
    nome: "laura",
    idade: 32,
    profissao: NovaProfissao.Atriz
}

let pessoa4: NovaPessoa = {
    nome: "carlos",
    idade: 19,
    profissao: NovaProfissao.Padeiro
}