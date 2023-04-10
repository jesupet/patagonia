<template>
  <div class="mi-pagina-vue">
    <div class="background-image7 big-cont">
      <div class="container-fluid text-center thanks-cont">
        <img src="../assets/patagonia_logo.png" alt="logo futuro patagonia">
        <h1 class="titulo big-txt espaciado">¡Gracias!</h1>
        <p class="bajada espaciado">Te mantendremos al tanto de todos nuestros proyectos.</p>
        <GreenButton :to="{name: 'home', hash: '#'+''}" :buttonText="'Volver'" class="espaciado"/>
      </div>
    </div>
    <div class="footer-text text-center align-items-center foot-tks">
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
  

</style>