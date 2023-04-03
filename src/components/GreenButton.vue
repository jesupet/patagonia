<template>
  <button :type="type" class="btn boton rounded-pill">
    <router-link :to="to">{{buttonText}}</router-link>
  </button>
</template>

<script>

export default {
  name: 'GreenButton',
  props: {
    to: {
      type: Object,
      default() {
        return { message: 'hello' }
      }
    },
    buttonText: {
      type: String,
      default: 'Button'
    },
    type: {
      type: String,
      default: "button"
    }
  }
}
</script>

<style scoped>


</style>