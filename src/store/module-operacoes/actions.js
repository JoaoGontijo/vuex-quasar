const adicionarNumero = ({ commit, state }, payload) => {
  commit('ADICIONAR_NUMERO', payload)
}

const removerNumero = ({ commit, state }, payload) => {
  commit('REMOVER_NUMERO', payload)
}

export {
  adicionarNumero,
  removerNumero
}
