const ADICIONAR_NUMERO = (state, payload) => {
  payload = Number(payload)
  state.numeros.push(payload)
}

const REMOVER_NUMERO = (state, payload) => {
  payload = Number(payload)
  if (state.numeros.includes(payload)) {
    var index = state.numeros.indexOf(payload)
    state.numeros.splice(index, 1)
  }
}

export {
  ADICIONAR_NUMERO,
  REMOVER_NUMERO
}
