<template>
  <div>
    <div class="d3-area">svg</div>
    <firstHtmlDoc />
    <coordinateSystem />
    <dataToPixel/>
    <axis/>
    <marginTranslation/>
    <dataBinding/>
  </div>
</template>
<script>
import * as d3 from 'd3';
import firstHtmlDoc from './components/firstHtmlDoc';
import coordinateSystem from './components/coordinateSystem';
import dataToPixel from './components/dataToPixel'
import axis from './components/axis'
import marginTranslation from './components/marginTranslation'
import dataBinding from './components/dataBinding'

export default {
  layout: 'sideBar',
  components: {
    firstHtmlDoc,
    coordinateSystem,
    dataToPixel,
    axis,
    marginTranslation,
    dataBinding,
  },
};
</script>
<style scoped>
svg {
  border: 1px solid #ccc;
}
</style>
