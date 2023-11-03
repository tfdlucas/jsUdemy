// Produto -> aumento, desconto
// Camiseta -> cor | Caneca -> material

// Cria Produto
function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

// Métodos
Produto.prototype.aumento = function (quantia) {
    this.preco += quantia;
};

Produto.prototype.desconto = function (quantia) {
    this.preco -= quantia;
};

// Cria camiseta
function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco); // Linkou as duas funçoes
    this.cor = cor; // Cria o atributo cor
}

// Cria objeto vazio e seta ele para o prototype do produto
Camiseta.prototype = Object.create(Produto.prototype);
// Resolve o problema do construtor que mudou de camiseta para produto
Camiseta.prototype.constructor = Camiseta;

function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco); // Linkou as duas funçoes
    this.material = material; // Cria o atributo material

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,

        get: function () {
            return estoque;
        },
        set: function (valor) {
            if (typeof valor !== 'number') return;
            estoque = valor;
        }
    });
}

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca; // Seleciona o constructor

const camiseta = new Camiseta('Regata', 7.5, 'Preto');
const caneca = new Caneca('Batman', 20, 'Porcelana', 5);

camiseta.aumento(10);
caneca.desconto(5);

console.log(camiseta);
console.log(caneca);