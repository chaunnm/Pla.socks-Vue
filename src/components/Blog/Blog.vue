<template>
  <div class="container">
    <div class="banner">
      <p class="banner-text">
        WHY RECYCLED SOCKS ARE <br />
        A BETTER CHOICE FOR THE <br />
        ENVIRONMENT
      </p>
      <router-link class="button" to="/recycles">CLICK ME!</router-link>
    </div>
    <div class="content">
      <div class="col-1">
        <div class="col-1-left">
          <br />
          <br />
          <br />
          <br />
          <!-- <p></p>
                <p></p> -->
          <h3 class="title">Why recycled socks?</h3>
          <p class="text-center">
            Textile manufacturers that care about our planet’s well-being use
            safe, ethical, and eco-friendly materials to manufacture socks. Most
            companies collect waste like industrial waste and textile scraps
            from anywhere, especially water bodies, and then taken through a
            series of machines and processes and turned into recycled yarns used
            to make very comfy recycled socks.
          </p>
        </div>

        <div class="col-1-right">
          <h3 class="title">These are the most common recycled fibers:</h3>
          <p class="text">
            <span
              >1. Recycled polyester comes from recycled plastic bottles</span
            >
            <br />
            <span
              >2. Recycled cotton comes from old garments or textile
              leftovers</span
            >
            <br />
            <span
              >3. Old wool garments and textile recycling produces recycled
              wool</span
            >
          </p>
          <br />
          <br />
          <br />
          <img src="https://i.imgur.com/4K3iJeq.png" alt="img-tai-che" />
        </div>
      </div>

      <div class="col-2">
        <div class="col-2-left">
          <h3 class="title">
            The benefits of using recycled materials include:
          </h3>
          <h4 class="sub-title">I) KEEP PLASTIC OUT OF DUMPING GROUNDS</h4>
          <p class="text">
            Dumping grounds are expensive and difficult to find. Plastic and
            textiles take years to decompose, thus occupying a lot of space for
            very long periods. Incineration is also not a good option as it
            causes air pollution.
          </p>
          <h4 class="sub-title">II) IT SAVES ON RESOURCES</h4>
          <p class="text">
            Producing virgin textiles consumes a lot of water and energy.
            Materials recycling is mechanical or chemical to minimize water and
            energy consumption. In the mechanical recycling process, the
            material heat application melts the material to make yarn. Sublimate
            printed recycled socks also save a lot of energy.
          </p>
          <h4 class="sub-title">III) REDUCED CARBON FOOTPRINT</h4>
          <p class="text">
            Recycling materials to make textiles reduces the need to make more
            new products that require a lot of energy. This ensures about 20%
            less GHG production. Chemical recycling is better than mechanical
            recycling as it produces fewer gases.
          </p>
        </div>

        <div class="col-2-right">
          <h3 class="title">Bottom-line</h3>
          <p class="text-center">
            When you feel like your socks, have served you enough and holey and
            unwearable, do not throw them in the trash. Donate or drop them at
            an outlet for used clothes no matter how worn out they are, and they
            will find their way into textile recycling companies. Recycled socks
            are comfy and sustainable.
          </p>
          <div class="video">
            <iframe
              width="100%"
              height="231"
              src="https://www.youtube.com/embed/akp20Qkcr-o"
              title="Smartwool Second Cut™ Project"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            >
            </iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "blog",
};
</script>

<style lang="scss" scoped>
.container {
  background-color: #f1f1f1;
  color: #777;
  // common
  .title {
    color: #777;
    font-size: 22px !important;
    margin: 0;
    padding: 0;
    margin-bottom: 20px;
    font-weight: 450 !important;
  }
  .text-center {
    text-align: center;
    line-height: 1.6;
    font-size: 16px;
  }
  .banner {
    background-image: url(https://i.imgur.com/yzSwK0B.png);
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px;
    min-height: 300px;
    color: #fff !important;
    .banner-text {
      max-width: 660px;
      text-transform: uppercase;
      font-size: 30px;
      font-weight: 600;
      text-align: center;
      line-height: 1.3;
    }

    .button {
      color: #fff;
      text-decoration: none;
      display: flex;
      border: 2px solid;
      padding: 6px 20px;
      font-weight: 550;

      &:hover {
        color: #777;
        background-color: white;
        transition: 0.3s ease;
        outline: none;
        border: white solid 2px;
      }
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px;
  }

  .col-1 {
    width: 100%;
    max-width: 1080px;
    margin: 50px auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    // overflow: hidden;

    .col-1-left {
      flex: 1;
      border-radius: 14px;
      box-shadow: 0 10px 20px rgb(0 0 0 / 19%), 0 6px 6px rgb(0 0 0 / 22%);
      background-color: #f1f1f1;
      padding: 10px;
      margin-right: 26px;
      max-width: 425px;

      .title {
        text-align: center;
      }
    }

    .col-1-right {
      flex: 1;
      margin-right: 100px;

      .text {
        span {
          display: inline-block;
          margin: 4px 0;
        }
      }
      img {
        width: 100%;
        height: 260px;
      }
    }
  }

  .col-2 {
    width: 100%;
    text-align: center;
    max-width: 1080px;
    margin: 50px auto;
    margin-bottom: 80px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    // overflow: hidden;
    .col-2-left {
      flex: 1;
      margin-right: 26px;
      .title {
        text-align: left;
      }
      .sub-title {
        font-style: italic;
        font-weight: 450;
        margin-bottom: 20px;
        text-align: left;
      }
      .text {
        text-align: left;
      }
    }

    .col-2-right {
      flex: 1;
      box-shadow: 0 10px 20px rgb(0 0 0 / 19%), 0 6px 6px rgb(0 0 0 / 22%);
      .title {
        text-align: center;
        margin-top: 20px;
      }
      .video {
        margin: 0;
        iframe {
          margin: 0;
          padding: 0;
        }
      }
    }
  }
}

@media screen and (max-width: 650px) {
  .container {
    .content {
      .col-1 {
        flex-direction: column;
        .col-1-left {
          margin-bottom: 30px;
        }
        .col-1-right {
          // align-items: center;
          margin-right: 0;
        }
      }
      .col-2 {
        flex-direction: column;
      }
    }
  }
}
</style>
