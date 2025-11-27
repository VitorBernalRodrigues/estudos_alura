function elevar(n1, n2) {
    return console.log(n1**n2)
}

elevar(4,4)


const fatorial = function f(num) {
  if (num === 0 || num === 1) return 1;
  return num * f(num - 1);
}

console.log(fatorial(5));