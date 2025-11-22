// 1
const nomes = ["Almeida", "Silva", "Rodrigues", "Renny", "Santos"]

for (let nome of nomes) { 

console.log(nome); 

}

// 2
let frutas = ["Maça", "Banana", "Manga"]
console.log(frutas)

frutas.push("Pera")
console.log(frutas)

frutas.shift(0)
console.log(frutas)

// 3 

let cidades = ["Campo Grande", "Nova Andradina", "Dourados", "Buenos Aires"]

console.log("A quantidade de cidades é",cidades.length)

// 4

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let soma = 0

for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i]
}

console.log("A soma total é:", soma);

// 5 

let notas = [6, 8, 7]

let somaNotas = 0

for (let i = 0; i < notas.length; i++) {
    somaNotas += notas[i];
}

let calcularMedia = () => {
    return somaNotas / 3
}

if(somaNotas >= 7) {
    console.log('aprovado')
} else {
    console.log('reprovado')
}

// 6


let pessoas = {
    
}
