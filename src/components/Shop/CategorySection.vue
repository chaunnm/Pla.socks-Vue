<template>
  <div class="main-container">
    <h3>CATEGORIES</h3>
    <hr />
    <div class="categoryList-container">
      <ul class="level-1">
        <li>
          <img
            src="https://drive.google.com/uc?id=10Xz6m5wn_sT6NKTrNetyW_ckcuDeK2SK"
            alt=""
          />
          <p>Boxes Of Love (1)</p>
        </li>
        <li>
          <img
            src="https://drive.google.com/uc?id=1q_cr9tB0MYyNacHq16_DvkQQcIIg-nkn"
            alt=""
          />
          <p>Customized Socks (2)</p>
        </li>
        <ul class="level-2">
          <li>
            <img
              src="https://drive.google.com/uc?id=1EYcvwC5-6UEkB2tiVfi_s8NNHyRolj5m"
              alt=""
            />
            <p>Customized Performance Socks (3)</p>
          </li>
          <li>
            <img
              src="https://drive.google.com/uc?id=1_uzPi2mXK6g0B8nOKV9jyFPeeDixci8r"
              alt=""
            />
            <p>Dress Socks (4)</p>
          </li>
          <li>
            <img
              src="https://drive.google.com/uc?id=1rxGQ0pbUcIEIKgKVO5zU1eg_5ynIGhIw"
              alt=""
            />
            <p>Standard & Athlete Socks (5)</p>
          </li>
        </ul>
        <li>
          <img
            src="https://drive.google.com/uc?id=18emIX5Asf8BTTyAaYWEBD2s2bRTkjLQm"
            alt=""
          />
          <p>Socks For Kids (6)</p>
        </li>
        <ul class="level-2">
          <li>
            <img
              src="https://drive.google.com/uc?id=1OBgxZngh7Mxb6TczJgQeO5smjBVncT5W"
              alt=""
            />
            <p>Crew Socks (7)</p>
          </li>
          <li>
            <img
              src="https://drive.google.com/uc?id=1aUzDwBy51CHwUNro_aqKjgkcLOMnHr6J"
              alt=""
            />
            <p>Knee-High Socks (8)</p>
          </li>
        </ul>
        <li>
          <img
            src="https://drive.google.com/uc?id=1Ni0lGCZ-tbYy_B10xSy82KC66Lm6qObj"
            alt=""
          />
          <p>Socks For Men (9)</p>
        </li>
        <li>
          <img
            src="https://drive.google.com/uc?id=1SZK0QWvp7NY_VdyA5Z3hfK70a2RYvt8C"
            alt=""
          />
          <p>Socks For Women (10)</p>
        </li>
        <li>
          <img
            src="https://drive.google.com/uc?id=1W184eml-Lj6FyonVwC6nIfxPrHdvKanb"
            alt=""
          />
          <p>Socks For Summer (11)</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "CategorySection",
  data: () => ({
    filters: [
      { title: "Sort by popularity" },
      { title: "Sort by average rating" },
      { title: "Sort by lastest" },
      { title: "Sort by price: low to high" },
      { title: "Sort by price: high to low" },
    ],
  }),

  watch: {},
};
</script>

<style lang="scss" scoped>
.main-container {
  max-width: 300px;
  width: 100%;
  min-height: 100%;
  h3 {
    font-weight: 500;
    font-size: 20px;
    color: black;
  }
  hr {
    width: 40px;
    border: none;
    height: 2px;
    margin: 7px 0;
    background-color: rgb(91, 91, 91);
  }
  .categoryList-container {
    ul {
      list-style: none;
      &.level-1 {
        padding-left: 0;
      }
      li {
        padding: 10px;
        cursor: pointer;
        transition: 0.3s ease;
        border-radius: 3px;
        display: flex;
        p {
          margin-bottom: 0;
          margin: auto 0;
        }
        img {
          width: 30px;
          height: 30px;
        }
        &:hover {
          background-color: rgba(0, 0, 0, 0.09);
        }
      }
      &.level-2 {
        li {
          img {
            width: 25px;
            height: 25px;
            margin-top: auto;
            margin-bottom: auto;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 850px) {
  .main-container {
  }
}
</style>
