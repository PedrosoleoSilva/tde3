//Escreva uma função chamada gerarLista que aceita um número inteiro positivo n
// e uma função de geração como parâmetros. A função de geração deve receber um índice e retornar o valor correspondente
// da lista. A função gerarLista deve criar uma lista de tamanho n,
// preenchendo cada elemento com o resultado da função de geração.

function gerarLista(n, funcGeracao) {
    let lista = [];
    for (let i = 0; i < n; i++) {
        lista.push(funcGeracao(i));
    }
    return lista;
}
function gerarQuadrado(indice) {
    return indice * indice;
}
function gerarFibonacci(indice) {
    if (indice === 0) return 0;
    if (indice === 1) return 1;
    return gerarFibonacci(indice - 1) + gerarFibonacci(indice - 2);
}

const tamanho = 5;
const listaQuadrados = gerarLista(tamanho, gerarQuadrado);
console.log(listaQuadrados); 
console.log("-------------------------")
const listaFibonacci = gerarLista(tamanho, gerarFibonacci);
console.log(listaFibonacci); 
