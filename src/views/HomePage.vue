<template>
  <div class="home">
    <div class="content_container row">
      <div class="today_container col-md-3 col-sm-12">
      <Today></Today>
    </div>
    <div class="entire_week_container col-md-8 col-sm-12">
      <EntireWeek></EntireWeek>
    </div>

    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src

import Today from '../components/home/Today.vue'
import EntireWeek from '../components/home/EntireWeek.vue'
export default {
  name: 'Home',
  components:{
    Today,
    EntireWeek
  }
 
}
</script>
