<template>
  <form>
    <div class="mb-3 d-inline-flex container justify-content-center">
      <input type="email" class="form-control little-txt" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Tu email">
      <GreenButton :type="'submit'" :buttonText="'Enviar'" class="mx-3"/>
    </div>
  </form>
</template>

<script>
import GreenButton from '../components/GreenButton.vue'

export default {
  name: 'ContactForm',
  components: {
    GreenButton,
  }
}

</script>