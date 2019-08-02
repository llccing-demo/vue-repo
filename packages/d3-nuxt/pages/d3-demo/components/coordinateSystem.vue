<template>
  <svg height="200" id="drawArea" width="450" />
</template>
<script>
import * as d3 from 'd3';
export default {
  layout: 'sideBar',
  mounted() {
    let svg = d3.select('#drawArea');
    svg
      .append('circle')
      .attr('cx', 2)
      .attr('cy', 2)
      .attr('r', 40)
      .style('fill', 'blue');
    svg
      .append('circle')
      .attr('cx', 140)
      .attr('cy', 70)
      .attr('r', 40)
      .style('fill', 'red');
    svg
      .append('circle')
      .attr('cx', 300)
      .attr('cy', 100)
      .attr('r', 40)
      .style('fill', 'green');
  },
};
</script>
