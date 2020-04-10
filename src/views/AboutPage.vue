<template>
  <div class="about">
    
    <div class="row about_container" >
      <div class="about_section col-md-7 col-sm-12">
          <About></About>
      </div>
      <div class="about_form col-md-4 col-sm-12">
        <Aboutform></Aboutform>
      </div>


    </div>

  </div>
</template>
<script>
import Aboutform from '../components/about/About_form.vue'
import About from '../components/about/About.vue'
export default {
  components:{
    About,
    Aboutform
  }
  
}
</script>

