
<template>
  <div class="container">
    <el-button type="success" @click="redirect">to circle</el-button>
  </div>
</template>

<style>
.container{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

</style>

<script>
export default {
  methods:{
    redirect(){
      this.$router.push('/d3-demo')
    }
  }
};
</script>