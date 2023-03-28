<template>
<div class="background-image">
  <NavBar/>
  <div class="container-fluid">
    <header class="header-container container ">
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
        <div class="col-12 col-md-8 aysen-text">
          <h2 class="titulo">Aysén es la mezcla perfecta entre naturaleza y aventura.</h2>
          <p class="bajada">Esta región cuenta con una gran variedad de paisajes naturales, desde montañas y glaciares hasta ríos y lagos, así como una fauna y flora única en el mundo.</p>
        </div>
      </div>
    </section>
  </div>
</div>
<div class="background-image2">
  <div id="beneficios" class="container">
    <div class="row">
      <div class="col-12 col-xl-4">
        <div class="text-center benefit-card">
          <img src="../assets/icons/bird.png" alt="pajaro">
          <h3 class="subtitulo">
            Biodiversidad
          </h3>
          <p class="bajada-mini">Contempla especies animales y vegetales únicas</p>
        </div>
      </div>
      <div class="col-12 col-xl-4">
        <div class="text-center benefit-card">
          <img src="../assets/icons/leave.png" alt="pajaro">
          <h3 class="subtitulo">
            Clima y aire
          </h3>
          <p class="bajada-mini">Agradable lugar para los diferentes gustos térmicos.</p>
        </div>
      </div>
      <div class="col-12 col-xl-4">
        <div class="text-center benefit-card">
          <img src="../assets/icons/climber.png" alt="pajaro">
          <h3 class="subtitulo">
            Actividades únicas
          </h3>
          <p class="bajada-mini">Senderismo, cabalgatas, escalada, pesca y mucho más.</p>
        </div>
      </div>
    </div>
  </div>
  <div id="invertir" class="text-center container">
    <h2 class="titulo">¿Porqué invertir<br/><span class="titulo-no-bold">en la patagonia?</span></h2>
    <div class="row py-5">
      <div class="col-12 col-xl-4 px-2">
        <div class="card-cont">
          <img src="../assets/img/martin.png" alt="martin pescador">
          <p class="bajada-mini card-text">Cuenta con una rica biodiversidad, tierras fértiles e inmensa <span class="bajada-mini-bold">reserva de agua dulce</span></p>
        </div>
      </div>
      <div class="col-12 col-xl-4 px-2">
        <div class="card-cont">
          <img src="../assets/img/lago.png" alt="lago">
          <p class="bajada-mini card-text">Esta región, es una de las que más potencial de <span class="bajada-mini-bold">crecimiento económico </span> tiene.</p>
        </div>
      </div>
      <div class="col-12 col-xl-4 px-2">
        <div class="card-cont">
          <img src="../assets/img/rio.png" alt="rio">
          <p class="bajada-mini card-text">Destino ideal para aquellos que buscan desconectar y <span class="bajada-mini-bold">conectar con la naturaleza.</span></p>
        </div>
      </div>
    </div>
  </div>
  <div class="background-map row">
    <div class="cta-cont col-xl-8 col-12">
      <h2 class="titulo">¿Quieres invertir en terrenos seguros, maravillosos y de mucha plusvalía?</h2>
      <p class="bajada">Conversemos y veamos la mejor opción para lo que buscas.</p>
      <WhiteButton :to="'/'" :buttonText="'Contactar Whatsapp'"/>
    </div>
  </div>
</div>
  
</template>

<script>
// @ is an alias to /src
import NavBar from '../components/NavBar.vue'
import GreenButton from '../components/GreenButton.vue'
import WhiteButton from '../components/WhiteButton.vue'

export default {
  name: 'HomePatagonia',
  components: {
    NavBar,
    GreenButton,
    WhiteButton,
  },
}
</script>

<style scoped>


</style>