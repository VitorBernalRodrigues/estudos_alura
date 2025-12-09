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

// 3

const arr1 = [[1, 2], 2, 3];

const copiaArray = (arr) => {
  const copia = [];
  arr.forEach((elem) => {
    if (Array.isArray(elem)) {
      copia.push(copiaArray(elem));
    } else {
      copia.push(elem);
    }
  })
  return copia;
}

const arr2 = copiaArray(arr1);


// código omitido

// filtrar um array e alterar valores específicos
// ex: alterar números para strings

const cpfs = ['12323434545', '34658756786', 43254365434, '76547865345', 56768767564]

const cpfsValidos = cpfs.map((cpf) => {
    if(typeof cpf === 'string') {
        return cpf
    } else {
        return cpf.toString()
    }
})

console.log(cpfsValidos)

