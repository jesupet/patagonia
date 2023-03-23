<template>
  <div>
    <header class="header-container">
      <img src="../assets/img/header_bg.jpg" alt="montañas" class="img-fluid portada-img">
      
    </header>
    <section id="aysen">

    </section>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomePatagonia',
  components: {
  
  }
}
</script>

<style scoped>
.header-container {
  display: flex;
  align-items: center;
}
.portada-img {
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  /*@media (min-width: 1200px) {
    min-height: 100vh;
  */
  }

</style>