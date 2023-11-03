/*
Javascript é baseado em protótipos para passar propriedades e métodos de um 
objeto para outro.

Definição de protótipo:
Protótpo é o termo usado para se referir ao que foi criado pela primeira vez,
servindo de modelo ou molde para futuras produções.

Todos os objetos tem uma referência interna para um protótipo (__proto__)
que vem da propriedade prototype da função construtora que foi usada para criá-lo
Quando tentamos acessar um membro de um objeto, primeiro o motor do JS vai
tentar encontrar este membro no próprio objeto e depois a cadeia de protótipos
é usada até o topo (null) até encontrar (ou não) tal membro.

*/

// Construtora -> molde (classe)
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () => 'ORIGINAL: ' + this.nome + ' ' + this.sobrenome; // Esse sobrescreve o outro
}

Pessoa.prototype.nomeCompleto = function () { // Melhora a performance do programa
    return this.nome + ' ' + this.sobrenome; // Não sobescreve o original 
};

// Instância
const pessoa1 = new Pessoa('Lucas', 'Carvalho'); // Pessoa = Função construtora
const data = new Date(); // Date = Função construtora

console.dir(data);
console.dir(pessoa1);