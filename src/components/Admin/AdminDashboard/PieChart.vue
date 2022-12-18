<template>
  <div>
    <ApexChart
      type="donut"
      width="380"
      :options="chartOptions"
      :series="series"
    ></ApexChart>
  </div>
</template>

<script>
import ApexChart from "vue-apexcharts";
export default {
  name: "PieChart",
  components: {
    ApexChart,
  },
  data() {
    return {
      series: [44, 55, 41, 17, 15],
      chartOptions: {
        chart: {
          type: "donut",
        },
        labels: ["Love", "Women ", "Kids", "Men", "Summer"],
        responsive: [
          {
            breakpoint: 500,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: "bottom",
                horizontalAlign: "center",
              },
            },
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
