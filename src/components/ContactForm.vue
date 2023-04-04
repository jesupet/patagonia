<template>
  <form>
    <div class="mb-3 d-inline-flex container justify-content-center" @submit.prevent="enviarFormulario">
      <input 
        type="email" 
        class="form-control little-txt" 
        id="email" 
        aria-describedby="emailHelp" 
        placeholder="Tu email"
        v-model="email"
      >
      <GreenButton :type="'submit'" :buttonText="'Enviar'" class="mx-3"/>
    </div>
  </form>
</template>

<script>
import GreenButton from '../components/GreenButton.vue';
//import axios from 'axios';

export default {
  name: 'ContactForm',
  components: {
    GreenButton,
  },
 /*data() {
    return {
      email: '',
    };
  },
  methods: {
    async enviarFormulario() {
      try {
        // Guardar el contacto en Firebase
        const respuestaFirebase = await axios.post(
          'https://futuro-patagonia.firebaseio.com/leads.json',
          {
            email: this.email,
          },
        );

        // Enviar correo electrónico con SendGrid
        const respuestaSendGrid = await axios.post(
          'https://api.sendgrid.com/v3/mail/send',
          {
            personalizations: [
              {
                to: [
                  {
                    email: 'correo_destinatario@ejemplo.com',
                  },
                ],
                subject: 'Nuevo mensaje de contacto',
              },
            ],
            from: {
              email: 'mjpetour@gmail.com',
            },
            content: [
              {
                type: 'Has recibido un nuevo contacto desde tu página',
                value: `Email: ${this.email}`,
              },
            ],
          },
          {
            headers: {
              Authorization: `Bearer ${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}`,
              'Content-Type': 'application/json',
            },
          },
        );

        console.log('El formulario se envió con éxito.');
      } catch (error) {
        console.error('Ocurrió un error al enviar el formulario.');
      }
    },
  },*/
  
}

</script>

