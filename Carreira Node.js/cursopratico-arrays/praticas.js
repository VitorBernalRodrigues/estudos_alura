// 1
const arr = [0, 2, 4, 10]

console.log(arr)
arr[3] = 13
console.log(arr[3])
arr[4] = 20
console.log(arr)

// 2

// código omitido

function criaArrNum(inicio, fim) {
  const arr = []
  let elemento = inicio

  for(let i = 0, j = 0; j < fim; i++, elemento++) {
    arr[i] = elemento
    j = elemento
  }
  return arr
}

console.log(criaArrNum(40, 70))