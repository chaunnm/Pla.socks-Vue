<template>
  <div class="main-container">
    <div class="orientation-container">
      <div class="orientation">
        <div class="left-img-container">
          <img
            src="https://drive.google.com/uc?id=1QT5V-HkzTgDSSvGRHFk9VZuXeIngbe8V"
            alt=""
            class="left-img"
          />
        </div>

        <div class="orientation-text">
          <p id="paragraph-1">We love recycled items</p>
          <p id="paragraph-2">We care about the quality</p>
          <p id="paragraph-3">We make awesome socks</p>
        </div>
        <div class="right-img-container">
          <img
            src="https://drive.google.com/uc?id=1bEam2WVUldo-fFaP6HPZFEe1jfzbiIVj"
            alt=""
            class="right-img"
          />
        </div>
      </div>
    </div>

    <div class="our-team-container">
      <div class="team-main-container">
        <h2>OUR TEAM MEMBER</h2>
        <div class="team-leader">
          <div
            class="member-container"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="0"
            data-aos-offset="300"
          >
            <div class="member-img">
              <img
                src="https://i.pinimg.com/474x/27/51/26/2751261315fafadbeff55f833136d4e2.jpg"
                alt=""
              />
            </div>
            <div class="member-information">
              <p class="member-name">Nguyễn Ngọc Minh Châu</p>
              <p class="member-role">CEO PLA.SOCKS</p>
            </div>
          </div>
        </div>
        <div class="team-member">
          <div
            class="member-container"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
            data-aos-offset="300"
          >
            <div class="member-img">
              <img
                src="https://khoinguonsangtao.vn/wp-content/uploads/2022/07/avatar-cute-2.jpg"
                alt=""
              />
            </div>
            <div class="member-information">
              <p class="member-name">Bùi Thị Diễn Châu</p>
              <p class="member-role">Marketing PLA.SOCKS</p>
            </div>
          </div>
          <div
            class="member-container"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="600"
            data-aos-offset="300"
          >
            <div class="member-img">
              <img
                src="https://khoinguonsangtao.vn/wp-content/uploads/2022/09/hinh-ve-don-gian-cute-dang-yeu-va-de-thuc-hien.jpg"
                alt=""
              />
            </div>
            <div class="member-information">
              <p class="member-name">Lê Thị Yến Nhi</p>
              <p class="member-role">Accountant PLA.SOCKS</p>
            </div>
          </div>
          <div
            class="member-container"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="900"
            data-aos-offset="300"
          >
            <div class="member-img">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS0ggZT1AEbdp9BvYiA1wP_qOov4sM03U_HQ&usqp=CAUg"
                alt=""
              />
            </div>
            <div class="member-information">
              <p class="member-name">Nguyễn Văn An</p>
              <p class="member-role">CEO PLA.SOCKS</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="water-consumption-title">
      <h1>REDUCE WATER CONSUMPTION</h1>
    </div>

    <div class="water-consumption-container">
      <p class="first-line">
        Fashion is a thirsty business; fashion is the
        <b>third largest user of water</b> globally after paper and oil
      </p>
      <p class="consumption-title">Why should we care?</p>
      <div class="consumption-img-container">
        <div class="left-consumption" data-aos="fade-up-left">
          <img src="https://i.imgur.com/Qk4odqU.png" alt="" />
          <p>Lack of drinking water</p>
        </div>
        <div class="right-consumption" data-aos="fade-up-right">
          <img src="https://i.imgur.com/14yb0Q5.png" alt="" />
          <p>Desertification</p>
        </div>
      </div>
    </div>

    <div class="water-consumption-title">
      <h1>REDUCE WASTE ACCUMULATION</h1>
    </div>

    <div class="water-consumption-container">
      <p class="first-line">
        As fast fashion grows, clothing has become more disposable
      </p>
      <p class="first-line">
        A staggering
        <b
          >10,000 items of clothing are being sent to landfill every five
          minutes</b
        >
      </p>

      <p class="consumption-title">Why should we care?</p>
      <div class="consumption-img-container">
        <div class="left-consumption" data-aos="fade-down-left">
          <img
            src="https://themeghalayan.com/wp-content/uploads/2022/02/Pune.jpg"
            alt=""
          />
          <p>Breakdown of waste system</p>
        </div>
        <div class="right-consumption" data-aos="fade-down-right">
          <img
            src="https://www.azocleantech.com/images/Article_Images/ImageForArticle_1093(1).jpg"
            alt=""
          />
          <p>Polluting the environment</p>
        </div>
      </div>
    </div>

    <div class="quote-container">
      <div class="quote">
        <div class="left-quote">
          <i class="fa-solid fa-quote-left"></i>
        </div>
        <h2>Fast fashion isn’t free. Someone else is paying</h2>
        <div class="right-quote">
          <i class="fa-solid fa-quote-right"></i>
        </div>
      </div>
      <p class="author">Lucy Siegle</p>
    </div>
  </div>
</template>

<script>
// import "./AboutUs.scss";
import AOS from "aos";
import "aos/dist/aos.css";

export default {
  name: "AboutUs",
  data: () => ({}),
  computed: {},
  methods: {},
  // mounted: {
  // typeEffect() {
  //   var p = 1;
  //   var i = 0;
  //   var txt1 = "We love recycled items";
  //   var txt2 = "We care about the quality";
  //   var txt3 = "We make awesome socks";
  //   var speed = 50;
  //   function typeWriter() {
  //     if (i < txt1.length) {
  //       document.getElementById("paragraph-1").innerHTML += txt1.charAt(i);
  //       i++;
  //       setTimeout(typeWriter, speed);
  //     }
  //   }
  // },

  // },
  mounted() {
    AOS.init({
      // Global settings:
      offset: 120, // offset (in px) from the original trigger point
      delay: 200, // values from 0 to 3000, with step 50ms
      duration: 1000, // values from 0 to 3000, with step 50ms
      easing: "ease-in-sine", // default easing for AOS animations
      once: true, // whether animation should happen only once - while scrolling down
      anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
    });
  },
  watch: {},
};
</script>

<style lang="scss" src="./AboutUs.scss" scoped></style>
