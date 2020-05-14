<template>
    <div class="options">
     <div class="row">
     <div class="col-5">
    <div class="list-group" id="list-tab" role="tablist">
      <a class="list-group-item list-group-item-action active" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home"><i class="fas fa-bars fa-2x" > </i></a>
      <a class="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list" href="#list-settings" role="tab" aria-controls="settings">Settings</a>
    </div>
  </div>
  <div class="col-7">
    <div class="tab-content" id="nav-tabContent">
      <div class="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">
         <div class="container">
             <div>
                  <label for="">Temperature</label>
                   <div class="onoffswitch form-check-input">
                        <input type="radio" @click="handleCheck"  name="onoffswitch" class="onoffswitch-checkbox" id="myonoffswitch1" v-model="option" value="temperature" >
                        <label class="onoffswitch-label" for="myonoffswitch1">
                            <span class="onoffswitch-inner"></span>
                            <span class="onoffswitch-switch"></span>
                        </label>
                    </div>
             </div>
             <div>
                  <label for="">Humidity</label>
                  <div class="onoffswitch form-check-input">
                        <input type="radio" @click="handleCheck"  name="onoffswitch" class="onoffswitch-checkbox" id="myonoffswitch2" v-model="option" value="humidity">
                        <label class="onoffswitch-label" for="myonoffswitch2">
                            <span class="onoffswitch-inner"></span>
                            <span class="onoffswitch-switch"></span>
                        </label>
                    </div>
             </div>

             <div id="wind_option">
                 <div>
                     <label for="">Wind</label>
                 </div>
                  
                   <div class="onoffswitch form-check-input">
                        <input @change="handleCheck"  type="radio" name="onoffswitch" class="onoffswitch-checkbox" id="myonoffswitch3" v-model="option" value="wind">
                        <label class="onoffswitch-label" for="myonoffswitch3">
                            <span class="onoffswitch-inner"></span>
                            <span class="onoffswitch-switch"></span>
                        </label>
                    </div>
             </div>
          </div>
     </div>
     <div class="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">D</div> 
    </div>
  </div> 
</div>
      
  </div>
</template>

<script>
export default {
    data(){
        return{
           selected:false,
           option:'hkilil'
        }
    },
   
   
    methods: {
        handleCheck(e){
            this.selected = !this.selected
            this.$emit("handleCheck", e.target.value);
           
          
        },
        test(){
          console.log('test')
        }
    },

}
</script>

<style>

</style>
