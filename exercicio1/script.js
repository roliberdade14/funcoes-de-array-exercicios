const arrayNumeros = [2, 3, 4, 5, 6, 7, 8, 20]


const quintuplos = arrayNumeros.map(novoArray => novoArray * 5)

const metades = arrayNumeros.map(novoArray => novoArray / 2)

console.log('Array Original', arrayNumeros)
console.log('Quintuplos', quintuplos)
console.log('Metades', metades)