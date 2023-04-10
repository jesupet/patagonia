<template>
    
    <router-view/>
</template>

<script>

import { mapMutations, mapState } from 'vuex';


export default {
    name: "App",
    components: {
        
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
