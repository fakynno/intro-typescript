let button = document.getElementById('button');
let input1 = document.getElementById('input1') as HTMLInputElement;
let input2 = document.getElementById('input2') as HTMLInputElement;


function somaNumero(numero1: number, numero2: number, deveImprimir: boolean) {
    if (deveImprimir) {
        console.log(numero1 + numero2);        
    }
    return numero1 + numero2;
}

let deveImprimir = true;
let frase = 'O resultado é: ';

if(button) {
    button.addEventListener('click', () => {
        if (input1 && input2) {
            console.log(somaNumero(Number(input1.value), Number(input2.value), deveImprimir));
        }
    })
}
