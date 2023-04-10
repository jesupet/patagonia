<template>
<div class="mb-3 d-inline-flex container justify-content-center">
  <form action="https://formsubmit.co/michelle@vanilla.cl" method="post">
      <input 
        type="email" 
        class="form-control little-txt d-md-inline" 
        id="email" 
        aria-describedby="emailHelp" 
        placeholder="Tu email"
        name="email"
        required
      >
      <input type="hidden" name="_next" value="https://futuropatagonia.cl/thankyou">
      <input type="hidden" name="_subject" value="Nuevo lead!">
      <button type="submit" value="enviar" class="btn boton rounded-pill mx-3 my-2 d-md-inline">Enviar</button>
      <!--<GreenButton :type="'submit'" :buttonText="'Enviar'" class="mx-3" value="enviar"/>-->
  </form>
</div>
</template>

<script>

export default {
  name: 'ContactForm',
  components: {
    //GreenButton,
  },
 
}

</script>

