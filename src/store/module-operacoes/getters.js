const todosNumeros = (state) => {
  return state.numeros
}

const numerosPares = (state) => {
  return state.numeros.filter(numero => (numero % 2) === 0)
}

const numerosImpares = (state) => {
  return state.numeros.filter(numero => (numero % 2) === 1)
}

export {
  todosNumeros,
  numerosPares,
  numerosImpares
}
