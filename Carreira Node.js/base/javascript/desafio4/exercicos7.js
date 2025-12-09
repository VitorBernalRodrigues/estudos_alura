// 1

const usuario = { 

nome: "Lucas", 

idade: 28, 

email: "lucas@email.com" 

}

const { nome, idade, email } = usuario; 

console.log(nome, idade, email); 

 

// 2

const linguagens = ["JavaScript", "Python", "Ruby"] 

const [ling1, ling2, ling3] = linguagens 

console.log(ling1, ling2, ling3)

 

// 3

function somarTudo(...numeros) { 

return numeros.reduce((total, num) => total + num, 0); 

} 

console.log(somarTudo(1, 2, 3, 4)) 

 

// 4

const frutas1 = ["maçã", "banana"]

const frutas2 = ["laranja", "uva"]

const todasFrutas = [...frutas1, ...frutas2]

console.log(todasFrutas)

 

// 5

const dados1 = { nome: "Joana" } 

const dados2 = { idade: 32 } 

const perfil = { ...dados1, ...dados2 };

console.log(perfil)

 

// 6

function saudacao(nome = "visitante") { 

console.log(`Olá, ${nome}!`)

} 

saudacao()

saudacao("Marcos")

 

// 7 

const hoje = new Date()

const dia = hoje.getDate()

const mes = hoje.getMonth() + 1

const ano = hoje.getFullYear() 

console.log(`Hoje é ${dia}/${mes}/${ano}`)


 

// 9 

class Livro { 

constructor(titulo, autor) { 

this.titulo = titulo

this.autor = autor
} 

descrever() { 
return `O livro "${this.titulo}" foi escrito por ${this.autor}.`

}} 

 

const livro1 = new Livro("Guia definitivo do mochileiro das galaxias", "Douglas Adams")

const livro2 = new Livro("1984", "George Orwell")

console.log(livro1.descrever())

console.log(livro2.descrever()) 