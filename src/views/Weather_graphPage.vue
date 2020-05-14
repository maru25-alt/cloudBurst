<template>
    <div>
        <Options/>
        <WeatherGraph/>
        <Weatherg/>

    </div>
</template>

<script>
import WeatherGraph from '../components/weather_graph/Weather_graph.vue'
import Weatherg from '../components/weather_graph/old.vue'
import Options from '../components/weather_graph/Options.vue'
export default {

components:{
    WeatherGraph,
    Options,
    Weatherg 

}
}
</script>

<style>

</style>
