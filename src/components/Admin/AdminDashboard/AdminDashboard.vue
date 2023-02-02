<template>
  <div class="dashboard-container">
    <div class="section">
      <div class="left">
        <div
          class="left-item earning-number"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <div class="earning-number-group">
            <div class="earning-number-item">
              <h3>Earning</h3>
              <h2>$100,000.75</h2>
            </div>
            <div class="earning-number-icon">
              <i class="fa-solid fa-sack-dollar"></i>
            </div>
          </div>
          <div class="btn-download">
            <span>Download</span> <i class="fa-solid fa-download"></i>
          </div>
        </div>
        <div
          class="left-item earning-chart"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          data-aos-delay="300"
        >
          <div class="earning-chart-group">
            <h3>Earning</h3>
            <div>
              <h3>$63,578,000</h3>
              <span>Monthly revernue</span>
            </div>
          </div>
          <div class="chart">
            <ApexChart
              height="150"
              type="bar"
              :options="apexBar1.options"
              :series="apexBar1.series"
            ></ApexChart>
          </div>
        </div>
      </div>
      <div
        class="right"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        data-aos-delay="300"
      >
        <div class="right-item">
          <div class="right-item-icon customer">
            <i class="fa-solid fa-user-secret"></i>
          </div>
          <div class="right-item-text">
            <div>
              39,525
              <sup>+2%</sup>
            </div>
            <span> Customers </span>
          </div>
        </div>
        <div class="right-item">
          <div class="right-item-icon sales">
            <i class="fa-solid fa-chart-column"></i>
          </div>
          <div class="right-item-text">
            <div>
              453,5
              <sup>+2%</sup>
            </div>
            <span> Sales </span>
          </div>
        </div>
        <div class="right-item">
          <div class="right-item-icon product">
            <i class="fa-solid fa-socks"></i>
          </div>
          <div class="right-item-text">
            <div>
              1,525
              <sup>+2%</sup>
            </div>
            <span> Products </span>
          </div>
        </div>
        <div class="right-item">
          <div class="right-item-icon refund">
            <i class="fa-solid fa-arrows-rotate"></i>
          </div>
          <div class="right-item-text">
            <div>
              500
              <sup>+2%</sup>
            </div>
            <span> Refunds </span>
          </div>
        </div>
        <div class="right-item">
          <div class="right-item-icon categories">
            <i class="fa-solid fa-shapes"></i>
          </div>
          <div class="right-item-text">
            <div>
              25
              <sup>+25%</sup>
            </div>
            <span> Categories </span>
          </div>
        </div>
        <div class="right-item">
          <div class="right-item-icon blog">
            <i class="fa-solid fa-blog"></i>
          </div>
          <div class="right-item-text">
            <div>
              12
              <sup>-10%</sup>
            </div>
            <span> Blogs </span>
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <div
        class="line-chart"
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
      >
        <v-card-title class="pa-6 pb-0">
          <v-row no-gutters>
            <v-col cols="7" sm="4" md="4" lg="5" class="d-flex align-center">
              <p>Daily Line Chart</p>
            </v-col>
            <v-col sm="6" md="6" lg="5" class="d-none d-sm-flex align-center">
              <v-icon size="18" color="warning">mdi-circle-medium</v-icon
              ><span
                class="card-dark-grey font-weight-regular mr-3"
                style="font-size: 12px"
                >Performance Socks</span
              >
              <v-icon size="18" color="primary">mdi-circle-medium</v-icon
              ><span
                class="card-dark-grey font-weight-regular mr-3"
                style="font-size: 12px"
                >Dress Socks
              </span>
              <v-icon size="18" color="#B1BCFF">mdi-circle-medium</v-icon
              ><span
                class="card-dark-grey font-weight-regular"
                style="font-size: 12px"
                >Athelete Socks</span
              >
            </v-col>
            <v-col cols="5" sm="2" md="2" lg="1" offset-lg="1">
              <v-menu>
                <template v-slot:activator="{ on, attrs }">
                  <v-select
                    class="main-chart-select"
                    v-model="mainApexAreaSelect"
                    v-bind="attrs"
                    v-on="on"
                    dense
                    flat
                    single-line
                    hide-details
                    :items="select"
                    outlined
                  ></v-select>
                </template>
              </v-menu>
            </v-col>
          </v-row>
        </v-card-title>
        <ApexChart
          height="350"
          type="area"
          :options="mainApexArea.options"
          :series="
            mainApexAreaSelect === 'Daily'
              ? mainApexArea.series
              : mainApexAreaSelect === 'Weekly'
              ? mainApexArea.series2
              : mainApexArea.series3
          "
        ></ApexChart>
      </div>
    </div>
    <div class="section-chart">
      <div class="cricle-chart">
        <v-card-title class="pa-6 pb-3">
          <p>Apex Pie Chart</p>
          <v-spacer></v-spacer>
          <v-menu>
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon v-bind="attrs" v-on="on">
                <v-icon color="textColor">mdi-dots-vertical</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item v-for="(item, i) in menu" :key="i" @click="() => {}">
                <v-list-item-title>{{ item }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-card-title>
        <v-card-text class="pa-6 pt-0">
          <v-row no-gutters>
            <v-col cols="12" class="pb-7">
              <PieChart />
            </v-col>
          </v-row>
        </v-card-text>
      </div>
      <div class="bar-chart">
        <v-card-title class="pa-6 pb-3">
          <p>Bar Chart</p>
          <v-spacer></v-spacer>
        </v-card-title>
        <v-card-text class="pa-6 pt-0">
          <v-row no-gutters>
            <v-col cols="12" class="pb-7">
              <BarChart />
            </v-col>
          </v-row>
        </v-card-text>
      </div>
    </div>
    <div class="section-table">
      <v-card-title class="pa-6 pb-0">
        <p>Support Requests</p>
        <v-spacer></v-spacer>
        <v-menu>
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on">
              <v-icon color="textColor">mdi-dots-vertical</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item v-for="(item, i) in menu" :key="i" @click="() => {}">
              <v-list-item-title>{{ item }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-card-title>
      <DashboardTable />
    </div>
  </div>
</template>

<script>
import ApexChart from "vue-apexcharts";
import BarChart from "./BarChart.vue";
import DashboardTable from "./DashboardTable.vue";
import PieChart from "./PieChart.vue";
import AOS from "aos";
import "aos/dist/aos.css";
export default {
  name: "AdminDashboar",
  components: {
    ApexChart,
    PieChart,
    BarChart,
    DashboardTable,
  },
  mounted() {
    AOS.init();
  },
  data() {
    return {
      menu: ["Edit", "Copy", "Delete", "Print"],
      mainApexAreaSelect: "Daily",
      select: ["Daily", "Weekly", "Monthly"],
      apexBar1: {
        options: {
          chart: {
            id: "chartFirst",
            toolbar: {
              show: false,
            },
          },
          fill: {
            colors: ["#fafafa"],
            opacity: 1,
          },
          plotOptions: {
            bar: {
              columnWidth: "60%",
              distributed: true,
              endingShape: "rounded",
              startingShape: "rounded",
            },
          },
          grid: {
            padding: {
              left: -20,
              right: 0,
            },
            margin: {
              bottom: 0,
            },
            xaxis: {
              lines: {
                show: false,
              },
            },
            yaxis: {
              lines: {
                show: true,
              },
            },
          },
          dataLabels: {
            enabled: false,
            dropShadow: {
              enable: false,
            },
          },
          legend: {
            show: false,
          },
          xaxis: {
            axisBorder: {
              show: false,
            },
            axisTicks: {
              show: false,
            },
            labels: {
              show: false,
            },
          },
          yaxis: {
            labels: {
              show: false,
            },
          },
        },
        series: [
          {
            data: [30, 23, 54, 69, 40, 25, 60],
          },
        ],
      },
      mainApexArea: {
        options: {
          chart: {
            width: "100%",
            toolbar: {
              show: false,
            },
          },
          dataLabels: {
            enabled: false,
          },
          grid: {
            xaxis: {
              lines: {
                show: false,
              },
            },
            yaxis: {
              lines: {
                show: false,
              },
            },
          },
          markers: {
            size: [5, 0, 0],
          },
          stroke: {
            width: [3, 3, 0],
            curve: ["straight", "smooth", "smooth"],
          },
          fill: {
            type: "linear",
          },
          legend: {
            show: false,
          },
          colors: ["#7aff2a", "#f29dc4", "#f3f5ff"],
          yaxis: {
            axisBorder: {
              show: true,
              color: "#B9B9B980",
            },
            labels: {
              style: {
                colors: [
                  "#B9B9B980",
                  "#B9B9B980",
                  "#B9B9B980",
                  "#B9B9B980",
                  "#B9B9B980",
                  "#B9B9B980",
                  "#B9B9B980",
                  "#B9B9B980",
                ],
                fontSize: "12px",
              },
            },
            tickAmount: 5,
          },
          xaxis: {
            labels: {
              style: {
                fontSize: "12px",
                colors: [
                  "#B9B9B980",
                  "#B9B9B980",
                  "#B9B9B980",
                  "#B9B9B980",
                  "#B9B9B980",
                  "#B9B9B980",
                  "#B9B9B980",
                  "#B9B9B980",
                  "#B9B9B980",
                  "#B9B9B980",
                  "#B9B9B980",
                  "#B9B9B980",
                  "#B9B9B980",
                  "#B9B9B980",
                ],
              },
            },
            tickAmount: 10,
          },
        },
        series: [
          {
            name: "Performance Socks",
            type: "line",
            data: [
              3100, 4000, 2800, 5100, 4200, 6090, 5100, 3100, 4000, 2800, 5100,
              4200, 6090, 5100,
            ],
          },
          {
            name: "Dress Socks",
            type: "line",
            data: [
              1100, 3200, 4500, 3020, 3400, 5200, 4100, 1100, 3200, 4500, 3020,
              3400, 5200, 4100,
            ],
          },
          {
            name: "Athelete Socks",
            type: "area",
            data: [
              2100, 2000, 1800, 4100, 1200, 3600, 6100, 2100, 2000, 1800, 4100,
              1200, 3600, 6100,
            ],
          },
        ],
        series2: [
          {
            name: "Tablet",
            type: "line",
            data: [
              2100, 3000, 2800, 6100, 5200, 5090, 4100, 2100, 2000, 3800, 6100,
              5200, 7090, 6100,
            ],
          },
          {
            name: "Mobile",
            type: "line",
            data: [
              1100, 3200, 4500, 3020, 3400, 5200, 4100, 1100, 3200, 4500, 3020,
              3400, 5200, 4100,
            ],
          },
          {
            name: "Desktop",
            type: "area",
            data: [
              2100, 2000, 1800, 4100, 1200, 3600, 6100, 2100, 2000, 1800, 4100,
              1200, 3600, 6100,
            ],
          },
        ],
        series3: [
          {
            name: "Tablet",
            type: "line",
            data: [
              4100, 5000, 4800, 8100, 7200, 7090, 6100, 4100, 4000, 5800, 8100,
              7200, 9090, 8100,
            ],
          },
          {
            name: "Mobile",
            type: "line",
            data: [
              4100, 5200, 7500, 6020, 6400, 8200, 7100, 4100, 6200, 7500, 6020,
              6400, 8200, 7100,
            ],
          },
          {
            name: "Desktop",
            type: "area",
            data: [
              5100, 5000, 4800, 7100, 4200, 6600, 9100, 5100, 5000, 4800, 7100,
              4200, 4600, 9100,
            ],
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.dashboard-container {
  padding: 40px 40px;
  .section {
    display: flex;
    .left {
      margin-right: 30px;
      flex: 1;
      .left-item {
        box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px,
          rgba(0, 0, 0, 0.23) 0px 3px 6px;
        padding: 30px;
        border-radius: 10px;
        margin-bottom: 30px;
      }
      .earning-number {
        .earning-number-group {
          display: flex;
          justify-content: space-between;
          .earning-number-item {
            h2 {
              color: #4db7b3;
            }
          }
          .earning-number-icon {
            width: 50px;
            height: 50px;
            border-radius: 50px;
            padding: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #4db7b3;
            .fa-sack-dollar {
              color: white;
              font-size: 20px;
            }
          }
        }
        .btn-download {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 150px;
          border-radius: 5px;
          background-color: #4db7b3;
          padding: 5px 20px;
          color: white;
          cursor: pointer;
          transition: all 0.5s ease;
          margin-top: 20px;
          .fa-download {
            // display: none;
            opacity: 0;
            transition: all 0.5s ease;
          }
          &:hover span {
            // margin-right: 10px;
          }
        }
        .btn-download:hover .fa-download {
          //   display: inline-block;
          margin-left: 10px;
          opacity: 1;
        }
      }
      .earning-chart {
        padding: 20px;
        background-color: #4db7b3;
        color: white;
        .earning-chart-group {
          display: flex;
          justify-content: space-between;
        }
        .chart {
          // min-width: ;
        }
      }
    }
    .right {
      flex: 2;
      display: grid;
      grid-template-columns: auto auto auto;
      .right-item {
        border-radius: 10px;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px,
          rgba(0, 0, 0, 0.23) 0px 3px 6px;
        padding: 20px;
        margin: 10px;
        height: fit-content;
        transition: all 0.3s ease;
        &:hover {
          box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
            rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
        }
        // height: 150px;
        .right-item-icon {
          margin-bottom: 10px;
          width: 50px;
          height: 50px;
          display: flex;
          justify-content: center;
          align-items: center;

          border-radius: 50px;
          i {
            font-size: 20px;
          }
          &.customer {
            background-color: #e5fafb;
            .fa-user-secret {
              font-size: 25px;
              color: #6cb8b9;
            }
          }
          &.sales {
            background-color: #fec90f;
            .fa-chart-column {
              font-size: 25px;
              color: #ffffff;
            }
          }
          &.product {
            background-color: #fff4e5;
            .fa-socks {
              font-size: 25px;
              color: #e46a76;
            }
          }
          &.refund {
            background-color: #ebfaf2;
            .fa-arrows-rotate {
              font-size: 25px;
              color: #00c292;
            }
          }
          &.categories {
            background-color: #ffeefc;
            .fa-shapes {
              font-size: 25px;
              color: #a32a8f;
            }
          }
          &.blog {
            background-color: #fbece1;
            .fa-blog {
              font-size: 25px;
              color: #c28000;
            }
          }
        }
      }
      .right-item-text {
        div {
          font-size: 20px;
          font-weight: 700;
          sup {
            color: red;
            font-size: 14px;
            font-weight: 300;
          }
        }
      }
    }
    .line-chart {
      width: 100%;
      box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
        rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
      padding: 20px;
      border-radius: 10px;
    }
  }
  .section-chart {
    display: flex;
    .cricle-chart {
      flex: 1;
      border-radius: 10px;
      margin-right: 50px;
      margin-top: 30px;
      box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
        rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    }
    .bar-chart {
      flex: 1;
      border-radius: 10px;
      margin-top: 30px;
      box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
        rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    }
  }
  .section-table {
    border-radius: 10px;
    margin-top: 30px;
    padding: 20px;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  }
}
@media screen and (max-width: 760px) {
  .dashboard-container .section .right {
    grid-template-columns: auto auto !important;
  }
  .dashboard-container .section-chart {
    flex-direction: column;
  }
  .dashboard-container .section-chart .cricle-chart {
    margin-right: 0 !important;
  }
}
// @media screen and (max-width: 680px) {
//   .dashboard-container .section .right {
//     grid-template-columns: auto !important;
//   }
// }
@media screen and (max-width: 680px) {
  .dashboard-container .section {
    flex-direction: column !important;
  }
  .dashboard-container .section .left {
    margin-right: 0;
  }
}
</style>
