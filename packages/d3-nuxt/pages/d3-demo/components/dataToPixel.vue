<template>
  <svg id="svg" height="200" width="450"></svg>
</template>
<script>
import * as d3 from 'd3';
export default {
  mounted(){
    let svg = d3.select('#svg');

    // 此处表示占比，x坐标占400的百分比
    let x = d3.scaleLinear().domain([0, 100]).range([0 ,400])

    svg.append('circle').attr('cx', x(10)).attr('cy', 100).attr('r', 40).style('fill', 'blue');

    svg.append('circle').attr('cx', x(50)).attr('cy', 100).attr('r', 40).style('fill', 'red');

    svg.append('circle').attr('cx', x(100)).attr('cy', 100).attr('r', 40).style('fill', 'green')
  }
}
</script>
