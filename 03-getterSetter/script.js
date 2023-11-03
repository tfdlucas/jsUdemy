function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque;

    Object.defineProperty(this, estoque, {
        configurable: true,
        enumerable: true,
        get: function () { // getter
            return estoquePrivado; // Exibe o valor
        },

        set: function (valor) { // sett
            if (typeof valor !== 'number') {
                console.log('Bad value');
                return;
            }
            estoquePrivado;
        }
    });
}

const p1 = new Produto('Blusa de time', 5, 26);

console.log(p1);
p1.estoque = 'Olá mundo'; // setter valor
console.log(p1.estoque);