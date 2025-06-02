let meuArray = [];

// Adicionar itens com unshift
let retorno1 = meuArray.unshift('Maçã');
console.log(meuArray);  // ['Maçã']
console.log(retorno1);  // 1

let retorno2 = meuArray.unshift('Banana');
console.log(meuArray);  // ['Banana', 'Maçã']
console.log(retorno2);  // 2

// Remover itens com shift
let removido1 = meuArray.shift();
console.log(removido1);  // 'Banana'
console.log(meuArray);  // ['Maçã']

let removido2 = meuArray.shift();
console.log(removido2);  // 'Maçã'
console.log(meuArray);  // []
