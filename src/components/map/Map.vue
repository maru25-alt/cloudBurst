<template>
  <div>
    <svg :width="width" :height='height' >
      
     
    </svg>
    
  </div>
</template>

<script>
import * as geo from 'd3-geo'
import * as d3 from 'd3'
import * as topojson from 'topojson-client'
import { geoMercator } from 'd3'
import {loadAndProcessData} from './loadAndProcessData.js'
export default {
  data() {
    return {
      countries: {},
      height: 500,
      width: 960,
      margin: {
         top: 50,
         botton: 50,
         left: 50,
         rigth: 50
       }
    }
  },
  methods:{
     render(data, countries){

       console.log(data)
       const svg = d3.select('svg')
       .append('g')
       .attr('transform', `translate( ${this.margin.left}, ${this.margin.rigth})`);
       
       var projection = geoMercator()///.traslate([this.width / 2, this.height / 2]);
       projection.scale(150)
       const path = geo.geoPath().projection(projection);


       svg.selectAll('.country')
       .data(data)
       .enter().append('path')
       .attr('class', 'country')
       .attr('d', path)
       .on('mouseover', function(d){
         d3.select(this).classed("selected", true)
       })
       .on('mouseout', function(d){
          d3.select(this).classed("selected", false)
       });

       svg.selectAll('.city-circle')
       .attr('class', 'city-circle')
       .data(countries)
       .enter().append('circle')
       .attr('r', 2)
       .attr('cx', function(d) {
         var coords = projection([d.longitude, d.latitude])
         console.log(coords);
         return coords[0];
         
       })
       .attr('cy', function(d){
         var coords = projection([d.longitude, d.latitude])
         return coords[1];
       })
       

       svg.selectAll("country-label")
       .data(countries)
       .enter().append("text")
       .attr('class','country-label')
       .attr('x', function(d) {
         var coords = projection([d.longitude, d.latitude])
         console.log(coords);
         return coords[0];
         
       })
       .attr('y', function(d){
         var coords = projection([d.longitude, d.latitude])
         return coords[1];
       })
       .text(function(d){
         return d.contry;
       })




svg.selectAll("temperature-label")
       .data(countries)
       .enter().append("text")
       .attr('class','temperature-label')
       .attr('x', function(d) {
         var coords = projection([d.longitude, d.latitude])
         console.log(coords);
         return coords[0];
         
       })
       .attr('y', function(d){
         var coords = projection([d.longitude, d.latitude])
         return coords[1];
       })
       .text(function(d){
         return ` Max ${d.maxtemp} Min ${d.mintemp}`;
       })


       
     }
  },
  

  mounted(){
    Promise.all([
      d3.json('https://unpkg.com/world-atlas@1.1.4/world/50m.json'),
      d3.csv('https://raw.githubusercontent.com/maru25-alt/data/master/countries.revised.csv'),
    ]).then((data) => {
         
          let countries = data[1];
           console.log(countries);
          this.countries = topojson.feature(data[0], data[0].objects.countries).features;
          //console.log(this.countries)
          this.render(this.countries,countries );
        })
     
    

    
  
  }

}
</script>

<style scoped>

</style>
