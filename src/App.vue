<template>
  <div id="app">
    <Navigation ></Navigation>

    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import Navigation from '@/navigation/Navigation.vue'
import Footer from './footer/Footer.vue'
export default {
  name: 'App',
  components: {
    Navigation,
    Footer
  }
}


  
</script>
