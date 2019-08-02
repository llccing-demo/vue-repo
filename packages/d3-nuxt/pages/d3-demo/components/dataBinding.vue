<template>
  <div></div>
</template>
<script>
import * as d3 from 'd3';
export default {
  mounted() {
    let margin = { top: 10, right: 40, bottom: 30, left: 30 };
    let width = 450 - margin.left - margin.right;
    let height = 400 - margin.top - margin.bottom;

    let svg = d3
      .select(this.$el)
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    let data = [{ x: 10, y: 20 }, { x: 40, y: 90 }, { x: 80, y: 50 }];

    let x = d3
      .scaleLinear()
      .domain([0, 100])
      .range([0, width]);

    svg
      .append('g')
      .attr('transform', `translate(0, ${height})`)
      .call(d3.axisBottom(x));

    let y = d3
      .scaleLinear()
      .domain([0, 100])
      .range([height, 0]);

    svg.append('g').call(d3.axisLeft(y));

    svg
      .selectAll('whatever')
      .data(data)
      .enter()
      .append('circle')
      .attr('cx', d => x(d.x))
      .attr('cy', d => y(d.y))
      .attr('r', 7);
  },
};
</script>
<style scoped>
div{
  margin-top: 20px;
  border: 1px solid #ccc;
}
</style>
