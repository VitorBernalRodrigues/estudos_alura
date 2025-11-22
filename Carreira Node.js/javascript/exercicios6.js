// 1
const pessoal = {
    nome: 'Vitor',
    idade: 17,
    profissao: 'futuro progamado'
}

// 2
console.log(pessoal.nome)

// 3
pessoal.idade = 18

console.log(pessoal.idade)

// 4

pessoal.cidade = "Campo Grande"

console.log(pessoal.cidade)

// 5
let pessoa = {
    nome: 'Juana',
    Idade: '16',
}

// function fraseDados() {
//     console.log(pessoa)
// }

const fraseDados = () => {
    console.log(pessoa)
}

fraseDados()

// 6 
const pessoas = [
  { nome: "João", idade: 25 },
  { nome: "Maria", idade: 30 },
  { nome: "Carlos", idade: 17 }
]

// 7
const maiorIdade = pessoas.filter(pessoa => pessoa.idade >= 18)

console.log(maiorIdade)

// 8 

const saudacoes = {
    saudacao() {
        console.log(pessoa.nome)
    }
}

saudacoes.saudacao()


// 9
for (const chave in pessoal) {
    console.log(pessoal[chave])           
}

// 10
const produto = { 
preco: 25, 
quantidade: 4 
} 

const valorTotal = produto.preco * produto.quantidade 
console.log(`Valor total da compra: R$${valorTotal}`)