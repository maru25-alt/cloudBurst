<template>
    <g class="min_temp"> </g>
</template>

<script>
import {
  select,
  csv,
  line,
  curveBasis,
  scaleLinear,
  max, // used to retrieve max value from data
  scalePoint, // to separate the bars and determine their height
  axisLeft,
  axisBottom, //doesn't mean axis at the bottom. Just ticks at the bottom of the axis
	format //for formatting axes
} from 'd3';
export default {
  data() {
    return {
      width: 1200,
      height: 400,
    }
  },
  methods:{
    render(data) {
      //To avoid using d.population and d.country again and again, we can store them in value accessors.
  //const svg = select('.min_temp');
  const xValue = d => d.month;
  const yValue = d => d.max_temp;
  const margin = { top: 70, right: 45, bottom: 80, left: 90 };
  const innerwidth = this.width - margin.left - margin.right; // where width is width of svg container 
  const innerheight = this.height - margin.top - margin.bottom; // where height is height of svg container 
  
   const xScale = scalePoint()
   .domain(data.map(xValue))
   .range([0, innerwidth])
   .padding(0.1);

    
   const yScale = scaleLinear()
    .domain([0, 100])  //max(data, yValue)
    .range([0, innerheight])

    const g = select('.min_temp')
   .attr('transform',`translate(${margin.right},${margin.bottom})`);

 const yAxis = axisLeft(yScale)
         .tickSize(-innerwidth);//innerHeight
         
    const xAxis = axisBottom(xScale)
  			//.tickFormat(xAxisTickFormat)
        .tickSize(-innerheight); 


//     g.append('g')
//        .call(xAxis)
//        .attr('transform',`translate(0,300)`)

//        .selectAll('.domain')
//        .remove(); //this removes the y-axis grid line
       
  
//    const xAxisG = g.append('g')
  	

g.append('text')
  .attr('x',-10)
  .text('Top 10 Populated Countries in the World');
  


const lineGenerator = line()
    .x(d => xScale(xValue(d)))  .y(d => yScale(yValue(d)))
    .curve(curveBasis);
  
  
  g.append('path')
    .attr('class', 'line-path')
    .attr('d', lineGenerator(data));

   g.selectAll('circle').data(data)
  .enter().append('circle')
  .attr('class', 'gtext')
  .attr('cx', d => xScale(xValue(d))) 
  .attr('cy', d => yScale(yValue(d))) 
  .attr('r',5)
  .text( function(d){
    console.log(d.max_temp)
    return d;
  })
    
  }
  },
  

  mounted(){
  csv('https://raw.githubusercontent.com/maru25-alt/data/master/weathergraph.csv').then(data => {
  data.forEach(d => {
d.max_temp = +d.max_temp;
//d.month = d.month;

  });
    this.render(data);
    console.log(data)
  });

  },

}
</script>

<style>

</style>
