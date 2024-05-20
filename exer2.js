//Escreva uma função chamada somaElementosPares que aceita um array de números 
//como parâmetro e retorna a soma de todos os elementos pares do array.

function somaElemento(array){
    let soma =0;
    for(let i =0; i< array.length; i++){
        if(array[i] % 2 ===0){
            soma += array[i]
        }
    }
    return soma;
}


const numeros = [1,2,3,4,5,6,7,8,9]

console.log(somaElemento(numeros));