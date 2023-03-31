<template>
  <nav class="navbar navbar-dark navbar-expand-lg">
    <div class="container-fluid">
      <a class="navbar-brand my-3" href="/"><img src="../assets/patagonia_logo.png" alt="logo patagonia"></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Inicio</a>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" aria-current="page" :to="{name: 'home', hash: '#'+'invertir'}">Porqué invertir</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" aria-current="page" :to="{name: 'home', hash: '#'+'invertir'}">Pricing</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" aria-current="page" :to="{name: 'home', hash: '#'+'proyectos'}">Nuevos Proyectos</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" aria-current="page" :to="{name: 'home', hash: '#'+'contacto'}">Contáctanos</router-link>
          </li>
          <!--<li class="nav-item">
            <WhatsAppBtn/>
          </li>-->
        </ul>
      </div>
    </div>
  </nav>
</template>


<script>
//import WhatsAppBtn from '../components/WhatsAppBtn.vue'

export default {
    name: "App",
    components: {
        //WhatsAppBtn,
    }
}

</script>


<style>

</style>