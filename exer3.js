//3. Escreva uma função chamada mapearArray que aceita uma função e um array como parâmetros.
// A função mapearArray deve aplicar a função recebida a cada elemento do array e retornar um novo array
// com os elementos resultantes.

function mapearArray(func, array) {
    let novoArray = [];
    for (let i = 0; i < array.length; i++) {
        novoArray.push(func(array[i])); 
    }
    return novoArray;
}

function multi(x) {
    return x * 2;
}

const numeros = [1, 2, 3, 4, 5];
const resultado = mapearArray(multi, numeros);
console.log(resultado); // Saída: [2, 4, 6, 8, 10]
