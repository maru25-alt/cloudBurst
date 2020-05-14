<template>
  <div>
      <svg class="svg" :width='width' :height='height'>
        <MinTemp :data='data'></MinTemp>
      </svg>
  </div>
</template>

<script>
import MinTemp from './Min_Temp.vue'
import{
  select, 
  csv,
  scaleLinear,
 extent,
 axisLeft,
 axisBottom,
 scaleTime,
 scalePoint,
 line,
 curveBasis
} from 'd3';

export default {
  data() {
    return {
      width: 1200,
      height: 450,
      data: [],
    }
  },
  components:{
    MinTemp
  },
    methods:{
        render(data){
            
            console.log(data);
            const svg = select('.svg');
            const xValue = d => d.month;

            //const circleRadius = 6;
            const margin = { top: 70, right: 45, bottom: 80, left: 90 };
            const innerwidth = this.width - margin.left - margin.right;
            const innerheight = this.height - margin.top - margin.bottom;
            
            const xScale = scalePoint()
              .domain(data.map(xValue))
              .range([0, innerwidth])
              .padding(0.1);
             const xAxis = axisBottom(xScale)
  		        	//.tickFormat(xAxisTickFormat)
              .tickSize(-innerheight); 
             
             const g = svg.append('g')
             .attr('transform',`translate(${margin.right},${margin.bottom})`);

            g.append('g')
              .call(xAxis)
              .attr('transform',`translate(0,300)`)
              .selectAll('.domain')
              .remove(); //this removes the y-axis grid line
              
  
   //const xAxisG = g.append('g')
  
 },
},

mounted(){
        csv('https://raw.githubusercontent.com/maru25-alt/data/master/weathergraph.csv').then(data => {
          data.forEach(d => {
          d.max_temp = +d.min_temp;
          d.month = d.month  ;

          });
    this.render(data);
    this.data = data;
    //console.log(this.data)
});
    }

}

</script>

<style >

circle {
  fill: #181b1b;
}

.line-path {
 fill: none;
  stroke: #6eeb87;
  stroke-width: 5;
}

text {
  font-size: 2em;
  font-family: Sans-serif;
  opacity: 0.5;
  color: #181b1b;
  fill: #181b1b;
 
 }

.tick line {
  stroke: #c7d9d8; 
}

.axis-label {
  font-size: 3em;
}

.title {
  font-size: 3em;
  font-weight: bold;
  opacity: 0.6;
  
}
</style>
