// Escreva uma função chamada encontrarMaiorElemento que aceita um array de números
// como parâmetro e retorna o maior elemento do array.


function maiorElem(array){

    let maior = array[0];
    for(let i =0; i < array.length; i++){
        if(array[i] > maior){
            maior = array[i];
        }
    }
    return maior;
}

const numeros = [1,2,3,4,5,10,7,8,9]

console.log(maiorElem(numeros));