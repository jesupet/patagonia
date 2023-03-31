<template>
    <WhatsAppBtn class="whatsapp fixed-button" :v-if="showButton"/>
    <router-view/>
</template>

<script>
import WhatsAppBtn from './components/WhatsAppBtn.vue'
import { mapMutations, mapState } from 'vuex';

export default {
    name: "App",
    components: {
        WhatsAppBtn,
    },
    methods: {
    ...mapState(['showButton']),
    ...mapMutations(['setShowButton']),
    handleScroll() {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 200) {
        this.setShowButton(true);
      } else {
        this.setShowButton(false);
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
}

</script>

<style>


</style>
