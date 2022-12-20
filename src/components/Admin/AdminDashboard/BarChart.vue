<template>
  <div>
    <ApexChart
      type="bar"
      height="250"
      :options="chartOptions"
      :series="series"
    ></ApexChart>
  </div>
</template>

<script>
// import VueApexCharts from "vue-apexcharts";
import ApexChart from "vue-apexcharts";
export default {
  name: "BarChart",
  components: {
    ApexChart,
    // VueApexCharts,
  },
  data() {
    return {
      series: [
        {
          name: "Actual",
          data: [
            {
              x: "2018",
              y: 65,
              goals: [
                {
                  name: "Expected",
                  value: 70,
                  strokeWidth: 5,
                  strokeHeight: 10,
                  strokeColor: "#775DD0",
                },
              ],
            },
            {
              x: "2019",
              y: 54,
              goals: [
                {
                  name: "Expected",
                  value: 52,
                  strokeWidth: 10,
                  strokeHeight: 0,
                  strokeLineCap: "round",
                  strokeColor: "#775DD0",
                },
              ],
            },
            {
              x: "2020",
              y: 66,
              goals: [
                {
                  name: "Expected",
                  value: 61,
                  strokeWidth: 10,
                  strokeHeight: 0,
                  strokeLineCap: "round",
                  strokeColor: "#775DD0",
                },
              ],
            },
            {
              x: "2021",
              y: 81,
              goals: [
                {
                  name: "Expected",
                  value: 66,
                  strokeWidth: 10,
                  strokeHeight: 0,
                  strokeLineCap: "round",
                  strokeColor: "#775DD0",
                },
              ],
            },
            {
              x: "2022",
              y: 67,
              goals: [
                {
                  name: "Expected",
                  value: 70,
                  strokeWidth: 5,
                  strokeHeight: 10,
                  strokeColor: "#775DD0",
                },
              ],
            },
          ],
        },
      ],
      chartOptions: {
        chart: {
          height: 350,
          type: "bar",
        },
        plotOptions: {
          bar: {
            horizontal: true,
          },
        },
        colors: ["#00E396"],
        dataLabels: {
          formatter: function (val, opt) {
            const goals =
              opt.w.config.series[opt.seriesIndex].data[opt.dataPointIndex]
                .goals;

            if (goals && goals.length) {
              return `${val} / ${goals[0].value}`;
            }
            return val;
          },
        },
        legend: {
          show: true,
          showForSingleSeries: true,
          customLegendItems: ["Actual", "Expected"],
          markers: {
            fillColors: ["#00E396", "#775DD0"],
          },
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
