const objA = {
    chaveA: 'A'
    // __proto__: Object.prototype 
};

const objB = {
    chaveB: 'B'
    // __proto__: objA
};

const objC = new Object();
objC.chaveC = 'C';

Object.setPrototypeOf(objB, objA); // objA passa a ser o prototype de objB
Object.setPrototypeOf(objC, objA); // objA passa a ser o prototype de objC

console.log(objC.chaveB); // undefined
console.log(objC.chaveA); // A