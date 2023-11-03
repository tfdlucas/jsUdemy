// 3 Modelos de projeto: 

// Factory function
function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}

const p1 = criaPessoa('Lucas', 'Carvalho');
console.log(p1.nomeCompleto);

// Constructor function

function Pessoa(name, lastName) {
    this.name = name;
    this.lastName = lastName;
}

const p2 = new Pessoa('Bernardo', 'Lanes');
Object.freeze(p2); // Trava o objeto, não permite mais que esse seja alterado.
console.log(p2);


// O que a palavra new faz? Primeiro ela cria um objeto vazio, depois 
// atrela a palavra 'this' a esse objeto 