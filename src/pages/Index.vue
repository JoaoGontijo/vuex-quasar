<template>
  <q-page class="q-ma-xl">
    <p>Todos os numeros: {{ numeros }}</p><br>
    <p>Numeros pares: {{ numerosPares }}</p><br>
    <p>Numeros impares: {{ numerosImpares }}</p><br>
    <div class="q-pa-md" style="max-width: 400px">
      <q-input
        filled
        v-model="inputAdicioanr"
        label="Numero a adicionar"
        class="q-mb-md"
        type="number"
      />
      <q-btn class="q-mb-md" @click="adicionarNumero(inputAdicioanr)" label="Adicionar Numero"/>
      <hr>
      <q-input
        filled
        v-model="inputRemover"
        label="Numero a remover"
        class="q-mb-md"
        type="number"
      />
      <q-btn class="q-mb-md" @click="removerNumero(inputRemover)" label="Remover Numero"/>
      <hr>
    </div>
  </q-page>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
export default {
  name: 'PageIndex',
  data () {
    return {
      inputAdicioanr: null,
      inputRemover: null
    }
  },
  computed: {
    ...mapGetters('operacoes', ['numerosPares', 'numerosImpares']),
    ...mapState('operacoes', ['numeros'])
  },
  methods: {
    ...mapActions('operacoes', ['adicionarNumero', 'removerNumero'])
  }
}
</script>
