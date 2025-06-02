// Passo 1: Criar um array vazio
let meuArray = [];

// Adicionar itens com push
meuArray.push('Maçã');
console.log(meuArray); // ['Maçã']

meuArray.push('Banana');
console.log(meuArray); // ['Maçã', 'Banana']

meuArray.push('Laranja');
console.log(meuArray); // ['Maçã', 'Banana', 'Laranja']

// Passo 2: Remover itens com pop
let itemRemovido1 = meuArray.pop();
console.log(itemRemovido1); // 'Laranja'
console.log(meuArray); // ['Maçã', 'Banana']

let itemRemovido2 = meuArray.pop();
console.log(itemRemovido2); // 'Banana'
console.log(meuArray); // ['Maçã']
