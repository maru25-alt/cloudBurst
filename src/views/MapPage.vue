<template>
    <div class="row">
        <div class="col-md-2 col-sm-4">
            <Options />
        </div>
        <div class="col-md-8 col-sm-6">
              <Map />
        </div>
      
    </div>
</template>

<script>
import Map from '../components/map/Map.vue'
import Options from '../components/map/Options.vue'
export default {
    components:{
        Map,
        Options
    }

}
</script>

<style>

</style>
