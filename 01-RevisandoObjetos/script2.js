// Construtor

const pessoa1 = new Object();
pessoa1.nome = 'Lucas';
pessoa1.sobrenome = 'Carvalho';
pessoa1.idade = 25;
pessoa1.falarNome = function () { // Método
    return (`${this.nome} está dizendo 'olá mundo'.`);
};

pessoa1.getDataNascimento = function () {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade; // Ano atual - idade
};

console.log(pessoa1.getDataNascimento());
pessoa1.falarNome();
console.log(pessoa1.nome);

// Literal

const pessoa2 = {
    nome: 'Bernardo',
    sobrenome: 'Lanes'
};

console.log(pessoa2.nome);