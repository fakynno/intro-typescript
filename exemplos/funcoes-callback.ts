function mostraValores(valor1: number, valor2: number): void {
    console.log(valor1 + valor2)    
}

function somarValoresETratar(numero1: number, numero2: number, callback: (valor: number) => number): number {
    let resultado = numero1 + numero2;
    return callback(resultado);
}

function aoQuadrado(numero: number): number {
    return numero * numero;
}

console.log(somarValoresETratar(10, 12, aoQuadrado));
