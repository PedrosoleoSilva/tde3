//Escreva uma função chamada validarDados que aceita uma função de validação e um objeto como parâmetros. 
//A função deve usar a função de validação para verificar se os dados no objeto atendem à condição especificada e 
//retornar true se sim, ou false caso contrário. (Ex. nome possui mais de 3 caracteres, senha existe, etc)


const user1 = { nome: 'leo', senha: '1234', idade: 10 };
const user2 = { nome: "Jo", senha: "", idade: 16 };

function validarDados(funcValidacao, objeto) {
    return funcValidacao(objeto);
}

function validarNome(obj) {
    return obj.nome && obj.nome.length > 3;
}

function validarSenha(obj) {
    return obj.senha && obj.senha.length > 0;
}

function validarIdade(obj) {
    return obj.idade && obj.idade >= 18;
}

console.log(validarDados(validarNome, user1)); 
console.log(validarDados(validarNome, user2)); 
console.log(validarDados(validarSenha, user1)); 
console.log(validarDados(validarSenha, user2)); 
console.log(validarDados(validarIdade, user1)); 
console.log(validarDados(validarIdade, user2)); 
