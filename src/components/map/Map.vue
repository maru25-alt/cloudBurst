<template>
  <div class="map-container">
      <div class="btn-group-vertical" role="group" aria-label="..." id="float-button-group">
                <button @click="zoomIn" type="button" class="btn btn-default" id="zoom-in"><i class="fas fa-search-plus"></i></button>
                <button type="button" class="btn btn-default" id="zoom-out"><i class="fas fa-search-minus"></i></button>
                <button type="button" class="btn btn-default" id="reset"><i class="fas fa-redo-alt"></i></button>
      </div>
    <svg class="map-container" :width="width" :height='height' >
      
     
    </svg>
   <!-- hey {{selectedValue}} -->
    
  </div>
</template>

<script>
import * as geo from 'd3-geo'
import * as d3 from 'd3'
import * as topojson from 'topojson-client'
import { geoMercator } from 'd3'
import {loadAndProcessData} from './loadAndProcessData.js'
export default {
  props : ['selectedValue'],
  data() {
    return {
      countries: {},
      states: {},
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
  watch:{
    selectedValue: function(){
      console.log('i have changed', this.selectedValue)
      // if (this.selectedValue===temperature)
      // {
      //   return ` Max ${d.maxtemp} Min ${d.mintemp}`;
      // }
      this.render(this.countries, this.states)



    }
  },
  methods:{

    zoomed(){
        g.attr("transform", d3.event.transform);
    },

    zoomIn(){
       console.log('clicked')
    },
    
     render(data, countries){
      

      let selectedValue = this.selectedValue
       //console.log(data)
       const svg = d3.select('svg')

    const g = svg.append('g')
       .append('g')
       .attr('transform', `translate( ${this.margin.left}, ${this.margin.rigth})`);
       
       var projection = geoMercator()///.traslate([this.width / 2, this.height / 2]);
       projection.scale(150)
       const path = geo.geoPath().projection(projection);


       g.selectAll('.country')
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

       g.selectAll('.city-circle')
       .attr('class', 'city-circle')
       .data(countries)
       .enter().append('circle')
       .attr('r', 2)
       .attr('cx', function(d) {
         var coords = projection([d.longitude, d.latitude])
        // console.log(coords);
         return coords[0];
         
       })
       .attr('cy', function(d){
         var coords = projection([d.longitude, d.latitude])
         return coords[1];
       })
       svg.call(d3.zoom()
       .on('zoom', () => {
       g.attr('transform', d3.event.transform);
       }));

      function zoomed() {
           g.attr("transform", d3.event.transform);
      }

    let zoom = d3.zoom().on("zoom", zoomed);
     //svg.call(this.zoomFunc)
     d3.select('#zoom-in').on('click', function(){
       console.log('clicked')
       zoom.scaleBy(svg.transition().duration(750), 1.2)
     })

     d3.select('#zoom-out').on('click', function(){
       console.log('zoom out')
       zoom.scaleBy(svg.transition().duration(750), 0.8)
     })
      
      d3.select('#reset').on('click', function () {
         zoom.scale(1);
      })

       g.selectAll("country-label")
       .data(countries)
       .enter().append("text")
       .attr('class','country-label')
       .attr('x', function(d) {
         var coords = projection([d.longitude, d.latitude])
         //console.log(coords);
         return coords[0];
         
       })
       .attr('y', function(d){
         var coords = projection([d.longitude, d.latitude])
         return coords[1];
       })
       .text(function(d){
         return d.contry;
       })


console.log(selectedValue, 'hiey')

g.selectAll("temperature-label")
       .data(countries)
       .enter().append("text")
       .attr('class','temperature-label')
       .attr('x', function(d) {
         var coords = projection([d.longitude, d.latitude])
         //console.log(coords);
         return coords[0];
         
       })
       .attr('y', function(d){
         var coords = projection([d.longitude, d.latitude])
         return coords[1];
       })
       .text(function(d){
         if(selectedValue === 'humidity'){
           return `Humidity ${d.humidity}`;
         }
        else if(selectedValue === 'wind'){
          return `Wind Speed  ${d.wind}`;
        }

        else if(selectedValue === 'temperature'){
           return ` Max ${d.maxtemp} Min ${d.mintemp}`;
        }

        else {
          return null;
        }
         console.log(selectedValue, 'hie')
       
       })


       
     }
  },
  

  mounted(){
    Promise.all([
      d3.json('https://unpkg.com/world-atlas@1.1.4/world/50m.json'),
      d3.csv('https://raw.githubusercontent.com/maru25-alt/data/master/countries.revised.csv'),
    ]).then((data) => {
         
          let countries = data[1];
          this.states = countries
           console.log(this.states);
          this.countries = topojson.feature(data[0], data[0].objects.countries).features;
          //console.log(this.countries)
          this.render(this.countries,this.states );
        })
     
    
 console.log(this.selectedValue)
    
  
  }

}

</script>

<style scoped>

</style>
