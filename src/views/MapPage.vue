<template>
    <div class="row">
        <div class="col-md-3 col-sm-4">
            <Options  v-on:handleCheck='handleChild' />
        </div>
        <div class="col-md-9 col-sm-8">
              <Map   :selectedValue="selected"/>
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
    },
    data() {
       return{
           selected : ''
       }

    },
    methods: {
        handleChild(value){
            this.selected = value
            //console.log('value', value)
        }
    
    },

}
</script>

<style>

</style>
