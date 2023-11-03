const pessoa = {
    nome: 'Lucas',
    sobrenome: 'Carvalho',
    idade: 25
};

const chave = 'nome';

console.log(pessoa['idade']);
console.log(pessoa.sobrenome);
console.log(pessoa[chave]); // Isso não é possivel com anotação de ponto.