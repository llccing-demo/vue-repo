<template>
  <div class="about">
    <h1>This is an about page</h1>

    <div id="charts"></div>
  </div>
</template>
<script>
function tooltip_click_event() {
  alert("4441231");
}

export default {
  data() {
    return {
      pieOptions: {
        tooltip: {
          trigger: "item",
          alwaysShowContent: true,
          confine: false,
          formatter: params => {
            console.log(params);
            console.log(this);
            let self = this;
            return `
                    <table>
                        <tr>
                            <td>id</td> <td>name</td> <td>age</td>
                        </tr>
                        <tr>
                            <td>1</td> <td>tom</td> <td>20</td> <td><button onclick="alert(333)">click me</button></td>
                        </tr>
                        <tr>
                            <td>1</td> <td>tom</td> <td>20</td> <td><button @click="alert(333)">click me</button></td>
                        </tr>
                        <tr>
                            <td>1</td> <td>tom</td> <td>20</td> <td><button onclick='eval("(function(){console.log(this);})()")'>click me</button></td>
                        </tr>
                        <tr>
                            <td>1</td> <td>tom</td> <td>20</td> <td><button onclick='eval("(()=> {console.log(this)})()")'>click me</button></td>
                        </tr>
                        <tr>
                            <td>1</td> <td>tom</td> <td>20</td> <td><button onclick='console.log(this)'>click me</button></td>
                        </tr>
                        <tr>
                            <td>1</td> <td>tom</td> <td>20</td> <td><button onclick='eval("console.log(this)")'>click me</button></td>
                        </tr>
                        <tr>
                            <td>1</td> <td>tom</td> <td>20</td> <td><button onclick='tooltip_click_event'>click me</button></td>
                        </tr>
                    </table>
                    `;
          }
          // position: function(point, params, dom, rect, size) {
          //   // 固定在顶部
          //   return [point[0], "100%"];
          // }
        },
        legend: {
          orient: "vertical",
          x: "left",
          data: [
            "直达",
            "营销广告",
            "搜索引擎",
            "邮件营销",
            "联盟广告",
            "视频广告",
            "百度",
            "谷歌",
            "必应",
            "其他"
          ]
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            selectedMode: "single",
            radius: [0, "30%"],

            label: {
              normal: {
                position: "inner"
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              { value: 335, name: "直达", selected: true },
              { value: 679, name: "营销广告" },
              { value: 1548, name: "搜索引擎" }
            ]
          },
          {
            name: "访问来源",
            type: "pie",
            radius: ["40%", "55%"],

            data: [
              { value: 335, name: "直达" },
              { value: 310, name: "邮件营销" },
              { value: 234, name: "联盟广告" },
              { value: 135, name: "视频广告" },
              { value: 1048, name: "百度" },
              { value: 251, name: "谷歌" },
              { value: 147, name: "必应" },
              { value: 102, name: "其他" }
            ]
          }
        ]
      }
    };
  },
  mounted() {
    var myChart = echarts.init(document.getElementById("charts"));

    myChart.setOption(this.pieOptions);
  }
};
</script>
<style>
#charts {
  width: 800px;
  height: 1000px;
  margin: 0 auto;
}
</style>
