<template>
  <div class="accordion accordion-flush" id="accordionFlushExample" v-for="(preguntas, index) in preguntas" :key="index">
    <div class="accordion-item">
      <h2 class="accordion-header acordion-titulo">
        <button 
          class="accordion-button collapsed btn-acc acordion-titulo" 
          type="button" 
          data-bs-toggle="collapse" 
          :data-bs-target="'#flush-collapse'+index" 
          aria-expanded="false" 
          :aria-controls="'#flush-collapse'+index">
          {{preguntas.pregunta}}
        </button>
      </h2>
      <div 
        :id="'flush-collapse'+index" 
        class="accordion-collapse collapse bajada" 
        data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">
          {{preguntas.respuesta}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { mapState } from 'vuex'

export default {
  name: 'AcordionDudas',
  computed: {
    ...mapState(["preguntas"])
  }
}

</script>