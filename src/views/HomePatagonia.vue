<template>
  <div>
    <header class="header-container container">
      <img src="../assets/img/header_bg.jpg" alt="montañas" class="portada-img">
      <div class="row header-text">
        <div class="col-md-8 col-12">
          <div class="columna1-header text-start">
            <h1 class="titulo">Cuidamos la biodiversidad patagónica y a la vez tu patrimonio</h1>
            <p class="bajada">Potenciamos la identidad visual de negocios en crecimiento, para darle una apariencia memorable a lo que tu marca está transitando actualmente.</p>
            <GreenButton :to="'/'" :buttonText="'Ver proyectos'"/>
          </div>
        </div>
        <div class="col-md-4 col-12 columna2-header row">
            <img src="../assets/icons/instagram_icon.png" alt="" class="insta-icon">
            <img src="../assets/icons/facebook_icon.png" alt="" class="fb-icon">
        </div>
      </div>
    </header>
    <section id="aysen">

    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import GreenButton from '../components/GreenButton.vue'

export default {
  name: 'HomePatagonia',
  components: {
    GreenButton,
  }
}
</script>

<style scoped>


</style>