<template>
  <div>
    <div class="background-image7 big-cont">
      <div class="container-fluid text-center thanks-cont">
        <img src="../assets/patagonia_logo.png" alt="logo futuro patagonia">
        <h1 class="titulo">¡Gracias!</h1>
        <p class="bajada">Te mantendremos al tanto de todos nuestros proyectos.</p>
        <GreenButton :to="{name: 'home', hash: '#'+''}" :buttonText="'Volver'"/>
      </div>
    </div>
    <div class="footer-text text-center align-items-center">
      <p>Síguenos en <a target="_blank" href="https://www.instagram.com/futuropatagonia/">instagram</a> para estar al tanto de todas nuestras novedades y nuevos lanzamientos.</p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import GreenButton from '../components/GreenButton.vue'

export default {
  name: 'ThankYouPage',
  components: {
    GreenButton    
  },
  computed: {

  }
}
</script>

<style scoped>
body, html {
  height: 100vh;
  overflow-y: hidden;
}


</style>