<template>
  <div>
    <header class="header-container container">
      <img src="../assets/img/header_bg.jpg" alt="montañas" class="header-img">
      <div class="row header-text align-items-center">
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
    <section id="aysen" class="container">
      <div class="row align-items-center">
        <div class="col-12 col-md-4">
          <img src="../assets/img/aysen_img.png" alt="" class="landscape-img img-fluid">
        </div>
        <div class="col-12 col-md-8">
          <h2 class="titulo">Aysén es la mezcla perfecta entre naturaleza y aventura.</h2>
          <p class="bajada">Esta región cuenta con una gran variedad de paisajes naturales, desde montañas y glaciares hasta ríos y lagos, así como una fauna y flora única en el mundo.</p>
        </div>
      </div>
    </section>
    <img src="../assets/img/header_bg_2.jpg" alt="montañas" class="header2-img">
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