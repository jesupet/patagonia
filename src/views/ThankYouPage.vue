<template>
  <div class="chile-map-cont">
    <img src="../assets/img/chile_map.png" alt="" class="chile-map">
  </div>
  <div class="background-image">
    <NavBar/>
    <div class="container-fluid">
      <header class="header-container container">
        <div class="row header-text align-items-center">
          <h1 class="titulo">Hemos recibido tu solicitud, te contactaremos!</h1>
          <GreenButton :to="{name: 'home', hash: '#'}" :buttonText="'Volver al inicio'"/>
        </div>
      </header>
      <section id="aysen" class="container">
        <div class="row align-items-center">
          <div class="col-12 col-lg-4">
            <img src="../assets/img/aysen_img.png" alt="" class="landscape-img img-fluid">
          </div>
          <div class="col-12 col-lg-8 desc-text">
            <h2 class="titulo">Aysén es la mezcla perfecta entre naturaleza y aventura.</h2>
            <p class="bajada">Esta región cuenta con una gran variedad de paisajes naturales, desde montañas y glaciares hasta ríos y lagos, así como una fauna y flora única en el mundo.</p>
          </div>
        </div>
      </section>
    </div>
  </div>
  <FooterComp/>
</template>

<script>
// @ is an alias to /src
import NavBar from '../components/NavBar.vue'
import FooterComp from '../components/FooterComp.vue'

export default {
  name: 'ThankYouPage',
  components: {
    NavBar,
    FooterComp
    
  },
  computed: {

  }
}
</script>

<style scoped>


</style>