function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

// Método para dar desconto
Produto.prototype.desconto = function (percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100));
};

// Método para aumentar o preço
Produto.prototype.aumento = function (percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
};

const p1 = new Produto('Camiseta', 50);

// Literal
const p2 = {
    nome: 'Caneta',
    preco: 15
};

Object.setPrototypeOf(p2, Produto.prototype); // Agora pode usar os métodos aumento e desconto

// Criando objeto com o prototype setado
const p3 = Object.create(Produto.prototype, {
    preco: { // Criando chave preço já setando ela
        writable: true,
        configurable: true,
        enumerable: true,
        value: 115
    },
});

// p3.preco = 113; Criando chave preço

p1.desconto(100); // Aplicando desconto
p2.aumento(100); // Aplicando aumento
p3.aumento(50); // Aplicando aumento

console.log(p1);
console.log(p2);
console.log(p3);