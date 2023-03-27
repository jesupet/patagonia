<template>
  <div class="text-center benefit-card">
    <img src="{{nombreIcono}}" alt="pajaro">
    <h3 class="subtitulo">
      {{tituloBeneficio}}
    </h3>
    <p class="bajada-mini">{{descripcionBeneficio}}</p>
  </div>
</template>

<script>

export default({
  name: 'BeneficioPat',
  props: {
    nombreIcono: {
      type: String,
      default: 'bird.png',
      required: true
    },
    tituloBeneficio: {
      type: String,
      default: 'Biodiversidad'
    },
    descripcionBeneficio: {
      type: String,
      default: 'Contempla especies animales y vegetales únicas.'
    },
  }
})
</script>
