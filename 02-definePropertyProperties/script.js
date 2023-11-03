// defineProperty - uma chave
// defineProperties - varias chaves

function Produto(nome, preco, estoque) {
    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome,
            writable: true,
            configurable: true
        },
        preco: {
            enumerable: true,
            value: preco,
            writable: true,
            configurable: true
        }
    });

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // visibilidade
        value: estoque, // valor
        writable: false, // alteravel
        configurable: true // configuravel
    });
}

const p1 = new Produto('Camiseta', 20, 5);

p1.estoque = 100; // writable
delete p1.estoque; // configurable

console.log(p1);
console.log(Object.keys(p1)); // Exibe chaves do objeto

for (let chave in p1) {
    console.log(chave);
} // Exibe chaves do objeto