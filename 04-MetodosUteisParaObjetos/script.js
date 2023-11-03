/*
Object.values(retorna os valores)
Object.entries() separa chaves e valores em array, bom para iterar
Object.assign({}, any) copia objetos e cria novos
Object.getOwnPropertyDescriptor(0bjeto, 'chave') exibe as properties do objeto
...(spread) espalha os valores do objeto dentro de outro objeto
Object.keys(retorna as chaves)
Object.freeze(congela o objeto) impossibilita alteraçoes
Object.defineProperties (define variás propriedades)
Object.defineProperty(define uma propriedade)
*/

const produto = { nome: 'Caneca', preco: 1.89 };
//const produtoB = Object.assign({}, produto); // Envia o objeto 'produto' para dentro do objeto vazio
const outraCoisa = {
    ...produto,
    material: 'Porcelana'
};

// console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));

for (let [chave, valor] of Object.entries(produto)) { // com destructor
    console.log(chave, valor);
}
