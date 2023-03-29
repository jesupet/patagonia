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
          <div class="col-12 col-md-8 desc-text">
            <h2 class="titulo">Aysén es la mezcla perfecta entre naturaleza y aventura.</h2>
            <p class="bajada">Esta región cuenta con una gran variedad de paisajes naturales, desde montañas y glaciares hasta ríos y lagos, así como una fauna y flora única en el mundo.</p>
          </div>
        </div>
      </section>
    </div>
  </div>
<div class="background-image2">
  <!--BENEFICIOS-->
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
  <!--PORQUE INVERTIR-->
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
  <!--CALL TO ACTION MAP-->
  <div class="background-map row">
    <div class="cta-cont col-xl-8 col-12">
      <h2 class="titulo">¿Quieres invertir en terrenos seguros, maravillosos y de mucha plusvalía?</h2>
      <p class="bajada">Conversemos y veamos la mejor opción para lo que buscas.</p>
      <WhiteButton :to="'/'" :buttonText="'Contactar Whatsapp'"/>
    </div>
  </div>
  <!--PROYECTOS-->
  <div class="background-image3">
    <div class="container" id="proyectos">
      <h1 class="titulo">Los proyectos de <span class="titulo-verde">Futuro Patagonia </span><br/><span class="titulo-no-bold">que cambiarán tu vida</span></h1>
      <div class="row align-items-center proyect-cont">
        <div class="col-12 col-md-4">
          <img src="../assets/img/rio_blanco.png" alt="rio con volcan">
        </div>
        <div class="col-12 col-md-8 text-start desc-text">
          <h3 class="titulo">Refugio Río Blanco</h3>
          <p class="bajada">El proyecto se encuentra emplazado en un lugar privilegiado por la naturaleza, rodeado de bosques siempre verdes y acompañado siempre por el sonido del Río Blanco. Lo maravilloso del sur de Chile, sin complicaciones y con esa belleza natural que buscas.</p>
          <VerProyecto/>
        </div>
      </div>
      <div class="row align-items-center proyect-cont">
        <div class="col-12 col-md-8 text-end desc-text">
          <h3 class="titulo">Santuario Río Cóndor</h3>
          <p class="bajada">Santuario Río Cóndor es un proyecto ubicado en el corazón de la naturaleza, con la menor intervención humana que se puede encontrar. Entre Río Condor y Río Laguna Vera, ofrece vistas inigualables, rodeado de hermosos cordones montañosos, un verde brillante y una tranquilidad tan silenciosa que es imposible dejar de escuchar.</p>
          <VerProyecto/>
        </div>
        <div class="col-12 col-md-4">
          <img src="../assets/img/rio_condor.png" alt="rio con volcan">
        </div>
      </div>
      <div class="row align-items-center proyect-cont">
        <div class="col-12 col-md-4">
          <img src="../assets/img/praderas.png" alt="rio con volcan">
        </div>
        <div class="col-12 col-md-8 text-start desc-text">
          <h3 class="titulo-verde">PRONTO</h3>
          <h3 class="titulo">Praderas de Mañihuales</h3>
          <p class="bajada">ESi te has planteado vivir en este impresionante lugar, dentro de poco podrás hacerlo. Este proyecto está ubicado en un lugar increíble, rodeado de reservas naturales, paisajes maravillosos y  3km. del río Mañihuales lo acompañan.</p>
          <VerProyecto/>
        </div>
      </div>
    </div>
    <div class="text-center container">
      <img src="../assets/icons/dash_arrow.svg" alt="flecha punteada" style="width: 100%">
    </div>
  </div>
  <!--DUDAS-->
  <div class="background-image4">
    <div id="dudas" class="container">
      <h2 class="titulo">Tal vez tienes dudas</h2>
      <h3 class="titulo-no-bold">Aquí responderemos las más frecuentes</h3>
      <div class="col-xl-9 col-12">
        <AcordionDudas/>
      </div>
    </div>
  </div>
  <!--CLIENTES-->
  <div class="background-image5">
    <div class="container text-center" id="clientes">
      <h2 class="titulo">Ellos ya son parte <br/><span class="titulo-no-bold">de Futuro Patagonia</span></h2>
      <div class="row proyect-cont">
        <div class="col-12 col-md-4 px-5 py-3" v-for="(reviews, index) in reviews" :key="index">
          <p class="bajada-italic">{{reviews.descripcion}}</p>
          <p class="bajada-mini pt-4">{{reviews.autor}}</p>
          <p class="bajada-mini-verde">{{reviews.proyecto}}</p>
        </div>
      </div>
    </div>
  </div>
  <!--CONTACTO-->
  <div id="contacto" class="text-center">
    <div class="container">
      <img src="../assets/icons/mail.svg" alt="" class="pb-5">
      <h2 class="titulo">¿Quieres enterarte de cada nuevo proyecto?</h2>
      <p class="bajada">Déjanos tu email y serás parte de la comunidad de Futuro Patagonia Inversiones.</p>
      <ContactForm/>
    </div>
  </div>
  <FooterComp/>
</div>
  
</template>

<script>
// @ is an alias to /src
import NavBar from '../components/NavBar.vue'
import GreenButton from '../components/GreenButton.vue'
import WhiteButton from '../components/WhiteButton.vue'
import VerProyecto from '../components/VerProyecto.vue'
import AcordionDudas from '../components/AcordionDudas.vue'
import ContactForm from '../components/ContactForm.vue'
import FooterComp from '../components/FooterComp.vue'
import { mapState } from 'vuex'

export default {
  name: 'HomePatagonia',
  components: {
    NavBar,
    GreenButton,
    WhiteButton,
    VerProyecto,
    AcordionDudas,
    ContactForm,
    FooterComp,
  },
  computed: {
    ...mapState(["reviews"])
  }
}
</script>

<style scoped>


</style>