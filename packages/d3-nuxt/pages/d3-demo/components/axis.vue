<template>
  <svg  height="200" width="450" />
</template>
<script>
import * as d3 from 'd3';

export default {
  mounted() {
    let svg = d3.select(this.$el);

    let x = d3.scaleLinear().domain([0, 100]).range([0, 400]);

    svg.call(d3.axisBottom(x));

    svg.append('circle').attr('cx', x(10)).attr('cy', 100).attr('r', 40).style('fill', 'blue');
    svg.append('circle').attr('cx', x(50)).attr('cy', 100).attr('r', 40).style('fill', 'red');
    svg.append('circle').attr('cx', x(100)).attr('cy', 100).attr('r', 40).style('fill', 'green');
  },
};
</script>
