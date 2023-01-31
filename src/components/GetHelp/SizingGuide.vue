<template>
  <div class="container">
    <div class="content">
      <h3 class="title">Sizing Guide</h3>
      <hr />
      <table>
        <thead>
          <tr class="row-1">
            <th class="column-1">&nbsp;</th>
            <th class="column-2">Women’s u.s. shoe size</th>
            <th class="column-3">Men’s u.s. shoe size</th>
          </tr>
        </thead>
        <tbody class="row-hover">
          <tr class="row-2">
            <td class="column-1">Medium</td>
            <td class="column-2">5.5 – 9.5</td>
            <td class="column-3">4 – 7.5</td>
          </tr>
          <tr class="row-3">
            <td class="column-1">Large</td>
            <td class="column-2">10 - 12</td>
            <td class="column-3">8 – 13</td>
          </tr>
        </tbody>
      </table>
      <div class="row">
        <div class="col">
          <div class="col-inner" @mouseout="hover = true">
            <h2 class="title">Womens sock heights</h2>
            <div class="box">
              <div class="box-image">
                <img
                  :class="{ zoomOut: hover }"
                  src="https://i.imgur.com/gt4gMxm.png"
                  alt="Womens sock heights"
                />
              </div>
              <div class="box-text">
                <p>
                  For women’s sock sizing, we offer 6 options: knee-high, calf
                  height, crew, anklet, micro-anklet and no-show.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="gap"></div>
        <div class="col">
          <div class="col-inner" @mouseout="hover = true">
            <h2 class="title">Womens sock heights</h2>
            <div class="box">
              <div class="box-image">
                <img
                  :class="{ zoomOut: hover }"
                  src="https://i.imgur.com/Q9ZSXtf.png"
                  alt="Womens sock heights"
                />
              </div>
              <div class="box-text">
                <p>
                  For men’s sock sizing, we offer 4 options: over the calf,
                  crew, ankle, and no-show..
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "sizing-guide",
  data() {
    return {
      isZooming: false,
      hover: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.test {
  background-color: #4db7b3 !important;
}

.container {
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 80px;

  .content {
    margin: 0 auto;

    .title {
      font-size: 28px !important;
      font-weight: 450;
      color: #555;
      text-align: center;
      margin: 20px;
    }

    hr {
      margin: 15px 0;
      border-width: 0;
      border-top: 1px solid #777;
      opacity: 0.1;
    }

    table {
      line-height: 1.6;
      border-collapse: collapse;
      width: 100%;
      margin-bottom: 50px;

      thead tr th {
        background-color: #4db7b3 !important;
        color: #fff;
        font-weight: 450;
        vertical-align: middle;
        border-bottom: 1px solid #ddd;

        padding: 5px;
        border: none;
        background: 0 0;
        text-align: left;

        letter-spacing: 0.05em;
        text-transform: uppercase;
      }

      tbody {
        tr:nth-child(1) {
          background-color: #fff;

          td {
            padding: 4px 4px;
          }

          td:nth-child(1) {
            font-weight: 600;
            padding-left: 10px;
            color: #555;
          }

          &:hover {
            background-color: #f3f3f3 !important;
          }
        }

        tr:nth-child(2) {
          background-color: #f9f9f9;
          border-top: 1px #ddd solid;

          td {
            padding: 4px 4px;
          }

          td:nth-child(1) {
            font-weight: 600;
            padding-left: 10px;
            padding-right: 10px;
            color: #555;
          }

          &:hover {
            background-color: #f3f3f3 !important;
          }
        }
      }
    }

    .row {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 100%;

      .gap {
        margin: 0 15px;
      }

      .col {
        flex: 1;
        // margin-right: 30px;

        .col-inner {
          .box {
            box-shadow: 0 1px 3px -2px rgb(0 0 0 / 12%),
              0 1px 2px rgb(0 0 0 / 24%);
            transition: transform 0.3s, box-shadow 0.3s, background-color 0.3s,
              color 0.3s, opacity 0.3s;
            padding: 10px;

            .box-image {
              // transition: opacity 0.3s, transform 0.3s, background-color 0.3s;
              overflow: hidden;
              z-index: 0;

              img {
                width: 100%;
                height: 500px;
              }
            }

            .box-text p {
              font-size: 0.9em !important;
              line-height: 1.6;
              text-align: center;
              z-index: 1000;
            }

            &:hover {
              box-shadow: 0 3px 6px -4px rgb(0 0 0 / 16%),
                0 3px 6px rgb(0 0 0 / 23%);
            }
          }

          .box:hover .box-image img {
            animation: zoomInImg 3s ease-in;
            transform: scale(1.3);
            transition: transform 0.3s, box-shadow 0.3s, background-color 0.3s,
              color 0.3s, opacity 0.3s;
          }
        }
      }
    }
  }
}

.test {
  background-color: #4db7b3 !important;
  color: pink !important;
}

.zoom-in {
  animation: zoomInImg 3s;
  transform: scale(1.3);
  transition: transform 0.3s, box-shadow 0.3s, background-color 0.3s, color 0.3s,
    opacity 0.3s;
}

.zoomOut {
  animation: zoomOutImg 3s ease-out;
  transform: scale(1);
  transition: transform 0.3s, box-shadow 0.3s, background-color 0.3s, color 0.3s,
    opacity 0.3s;
}

@keyframes zoomInImg {
  from {
    transform: scale(1);
  }

  to {
    transform: scale(1.3);
  }
}

@keyframes zoomOutImg {
  from {
    transform: scale(1.3);
  }

  to {
    transform: scale(1);
    // transition: 3s;
  }
}

@media screen and (max-width: 1080px) {
  .container {
    .content {
      margin: 50px 50px 80px 50px;
    }
  }
}

@media screen and (max-width: 650px) {
  .container {
    .content {
      .row {
        flex-direction: column;
      }
    }
  }
}
</style>
