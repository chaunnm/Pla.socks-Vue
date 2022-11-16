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
          <div class="member-container">
            <div class="member-img">
              <img
                src="https://plasocks.com/wp-content/uploads/2022/11/Chau.jpg"
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
          <div class="member-container">
            <div class="member-img">
              <img
                src="https://plasocks.com/wp-content/uploads/2022/11/Chau.jpg"
                alt=""
              />
            </div>
            <div class="member-information">
              <p class="member-name">Nguyễn Ngọc Minh Châu</p>
              <p class="member-role">CEO PLA.SOCKS</p>
            </div>
          </div>
          <div class="member-container">
            <div class="member-img">
              <img
                src="https://plasocks.com/wp-content/uploads/2022/11/Chau.jpg"
                alt=""
              />
            </div>
            <div class="member-information">
              <p class="member-name">Nguyễn Ngọc Minh Châu</p>
              <p class="member-role">CEO PLA.SOCKS</p>
            </div>
          </div>
          <div class="member-container">
            <div class="member-img">
              <img
                src="https://plasocks.com/wp-content/uploads/2022/11/Chau.jpg"
                alt=""
              />
            </div>
            <div class="member-information">
              <p class="member-name">Nguyễn Ngọc Minh Châu</p>
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
        <div class="left-consumption">
          <img
            src="https://plasocks.com/wp-content/uploads/2022/07/lack-of-water-.jpeg"
            alt=""
          />
          <p>Lack of drinking water</p>
        </div>
        <div class="right-consumption">
          <img
            src="https://plasocks.com/wp-content/uploads/2022/07/c.jpeg"
            alt=""
          />
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
        <div class="left-consumption">
          <img
            src="https://themeghalayan.com/wp-content/uploads/2022/02/Pune.jpg"
            alt=""
          />
          <p>Breakdown of waste system</p>
        </div>
        <div class="right-consumption">
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

    <div class="start-shopping">
      <div class="shopping-bg"></div>
      <div class="banner">
        <h1 class="banner-text">Find your perfect pair of socks</h1>
        <div class="button-group">
          <button class="shop-btn">
            <div class="btn-text">SHOP MEN</div>
            <v-badge :content="1" :value="1" color="#f299c2" overlap>
              <i class="fa-solid fa-bag-shopping"></i>
            </v-badge>
          </button>
          <button class="shop-btn">
            <div class="btn-text">SHOP CUSTOM</div>
            <v-badge :content="1" :value="1" color="#f299c2" overlap>
              <i class="fa-solid fa-bag-shopping"></i>
            </v-badge>
          </button>
          <button class="shop-btn">
            <div class="btn-text">SHOP WOMEN</div>
            <v-badge :content="1" :value="1" color="#f299c2" overlap>
              <i class="fa-solid fa-bag-shopping"></i>
            </v-badge>
          </button>
        </div>
      </div>
    </div>

    <div class="modal">
      <div class="modal__icon">
        <img
          width="90"
          src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzIwMCcgd2lkdGg9JzIwMCcgIGZpbGw9IiNmZmZmZmYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA2NCA2NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjQgNjQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBkPSJNNTYuNTcsOC4zNDdjLTMuNDUtMi44NTgtNy45NTUtNC4wMjItMTIuMzU4LTMuMTg4Yy0wLjAwNywwLjAwMS0wLjAxNCwwLjAwMi0wLjAyLDAuMDA0TDI1Ljc5NSw5LjAyMSAgYy0wLjA0NiwwLjAxLTAuMDg3LDAuMDMtMC4xMywwLjA0NmMtMi40MzcsMC4yMTYtNC43MDEsMS4wMjEtNi42NjUsMi4yNjZWOGgzYzAuNTUzLDAsMS0wLjQ0NywxLTFWM2MwLTAuNTUzLTAuNDQ3LTEtMS0xaC04ICBjLTAuNTUzLDAtMSwwLjQ0Ny0xLDF2MTUuNjU5Yy0wLjYzNiwxLjY2Mi0xLDMuNDU4LTEsNS4zNDF2M0gzYy0wLjU1MywwLTEsMC40NDctMSwxdjExYzAsMC41NTMsMC40NDcsMSwxLDFoOC40NDdsLTIuOTk0LDYuNTg2ICBjLTEuOTMxLDQuMjQ4LTEuOTUyLDguMzcxLTAuMDYsMTEuMzExQzEwLjA5OCw2MC41NDMsMTMuMTU0LDYyLDE3LDYyYzUuODI3LDAsMTIuNDA4LTMuNDE2LDE3LTguMzM2VjYxYzAsMC41NTMsMC40NDcsMSwxLDFoOWg1ICBjMC41NTMsMCwxLTAuNDQ3LDEtMVYzNi45MWwxMS4zMy0zLjk2NkM2MS43MzEsMzIuODA0LDYyLDMyLjQyNSw2MiwzMlYxOS44OTZDNjIsMTUuNDE2LDYwLjAyMSwxMS4yMDYsNTYuNTcsOC4zNDd6IE0xNSw0aDZ2MmgtMyAgYy0wLjU1MywwLTEsMC40NDctMSwxdjUuODI3Yy0wLjEwMywwLjA5Mi0wLjE5NCwwLjE5Ni0wLjI5NCwwLjI5MWMtMC4xODMsMC4xNzQtMC4zNjMsMC4zNS0wLjUzNywwLjUzMiAgYy0wLjE1MywwLjE2MS0wLjMwMSwwLjMyNS0wLjQ0NywwLjQ5MmMtMC4xODYsMC4yMTMtMC4zNjYsMC40My0wLjU0LDAuNjUzYy0wLjA1OCwwLjA3NS0wLjEyNCwwLjE0My0wLjE4MSwwLjIxOVY0eiBNMTQsMjQgIGMwLTEuNzA5LDAuMzQtMy4zMzgsMC45NDItNC44MzRjMC4zOC0wLjk0NywwLjg3Ni0xLjg0MywxLjQ2My0yLjY3MmMwLjA2NS0wLjA5MiwwLjEzNS0wLjE4LDAuMjAyLTAuMjcgIGMwLjIyNi0wLjMwMywwLjQ2Ni0wLjU5NCwwLjcxOC0wLjg3NmMwLjA5Ni0wLjEwNywwLjE5MS0wLjIxNSwwLjI5LTAuMzE5YzAuMjc0LTAuMjg3LDAuNTYzLTAuNTYsMC44NjItMC44MjIgIGMyLjA2OS0xLjgwMyw0LjcwNy0yLjk1Nyw3LjYwOS0zLjE2MWMwLjAwMiwwLDAuMDA0LDAuMDAxLDAuMDA2LDAuMDAxbDAuMDUxLTAuMDAzQzI2LjQyNywxMS4wMjUsMjYuNzExLDExLDI3LDExICBjNi4xMzQsMCwxMS4yNzcsNC4yNzYsMTIuNjM3LDEwaC0yLjgyMUMzNi45MjgsMjAuNjg2LDM3LDIwLjM1MiwzNywyMHYtMWMwLTEuNjU0LTEuMzQ2LTMtMy0zYy0yLjA4NiwwLTMuOTI0LDEuMDcxLTUsMi42OSAgYy0xLjA3Ni0xLjYyLTIuOTE0LTIuNjktNS0yLjY5Yy0xLjY1NCwwLTMsMS4zNDYtMywzdjAuNWMwLDAuNTM5LDAuMTMzLDEuMDQ0LDAuMzUxLDEuNUgxN2MtMC41NTMsMC0xLDAuNDQ3LTEsMXY0djFoLTJWMjR6IE0zMCwyNSAgdi0yaDRoNS45NDlDMzkuOTc1LDIzLjMzMSw0MCwyMy42NjIsNDAsMjR2MUgzMHogTTQwLDI3djExSDMwVjI3SDQweiBNMzAuMTI3LDIxYzAuNDQ0LTEuNzI0LDIuMDEzLTMsMy44NzMtM2MwLjU1MiwwLDEsMC40NDgsMSwxICB2MWMwLDAuNTUyLTAuNDQ4LDEtMSwxSDMwLjEyN3ogTTE4LDI1di0yaDYuNUgyOHYySDE4eiBNMjgsMjd2MTFIMThWMjh2LTFIMjh6IE0yMywxOS41VjE5YzAtMC41NTIsMC40NDgtMSwxLTEgIGMxLjg2LDAsMy40MjksMS4yNzYsMy44NzMsM0gyNC41QzIzLjY3MywyMSwyMywyMC4zMjcsMjMsMTkuNXogTTQsMzh2LTloOWgzdjloLTNINHogTTM1LjU5OCw0OC4yMjUgIGMtMC4xMTYsMC4yMDEtMC4yMzksMC4zOTgtMC4zNjIsMC41OTZjLTAuMzE5LDAuNTA5LTAuNjYsMS4wMTctMS4wMzYsMS41MjFjLTAuMDA0LDAuMDA1LTAuMDA1LDAuMDExLTAuMDA5LDAuMDE3ICBDMzAuMDM0LDU1LjkyMywyMy4wNTksNjAsMTcsNjBjLTMuMTQzLDAtNS42MDItMS4xMzItNi45MjUtMy4xODZjLTEuNTE4LTIuMzU3LTEuNDQ1LTUuNzg0LDAuMTk4LTkuNEwxMy42NDQsNDBIMTdoMjIuNDQ3ICBsLTAuOCwxLjc2bC0yLjE5NCw0LjgyNmMtMC4xOCwwLjM5Ni0wLjM4MywwLjc4NS0wLjU5MiwxLjE3MkMzNS43NzYsNDcuOTE0LDM1LjY4OCw0OC4wNywzNS41OTgsNDguMjI1eiBNNDMsNjBoLTd2LTguNzI5ICBjMC4xNzgtMC4yNDUsMC4zNDUtMC40OTEsMC41MTEtMC43MzhjMC4wNjEtMC4wOSwwLjEyNC0wLjE3OSwwLjE4My0wLjI3YzAuMjU2LTAuMzkyLDAuNDkyLTAuNzg2LDAuNzE3LTEuMTggIGMwLjA3LTAuMTIyLDAuMTM4LTAuMjQ1LDAuMjA1LTAuMzY4YzAuMjM2LTAuNDM0LDAuNDYxLTAuODY4LDAuNjU3LTEuMzAxbDMuNDYtNy42MTFMNDMsMzkuMzZWNjB6IE00OCw2MGgtM1YzOC42NmwxLjEyNS0wLjM5NCAgTDQ4LDM3LjYxVjYweiBNNjAsMzEuMjlsLTExLjMyOSwzLjk2NmMwLDAtMC4wMDEsMC0wLjAwMSwwTDQyLDM3LjU5VjI2di0yYzAtMC40NzMtMC4wMjgtMC45MzgtMC4wNzEtMS40ICBjLTAuMDEzLTAuMTQ0LTAuMDM1LTAuMjg1LTAuMDUyLTAuNDI4Yy0wLjAzOS0wLjMyMS0wLjA4Ny0wLjYzOS0wLjE0Ni0wLjk1M2MtMC4wMjktMC4xNTUtMC4wNi0wLjMwOS0wLjA5NC0wLjQ2MyAgYy0wLjA3LTAuMzE1LTAuMTUxLTAuNjI1LTAuMjQtMC45MzJjLTAuMDM4LTAuMTMtMC4wNzEtMC4yNi0wLjExMi0wLjM4OWMtMC4xMzctMC40MjYtMC4yODctMC44NDYtMC40Ni0xLjI1NSAgYy0wLjAxNS0wLjAzNi0wLjAzNC0wLjA3MS0wLjA1LTAuMTA3Yy0wLjE2MS0wLjM3Mi0wLjMzOC0wLjczNi0wLjUyNy0xLjA5MmMtMC4wNjctMC4xMjUtMC4xMzktMC4yNDctMC4yMDktMC4zNyAgYy0wLjE1Mi0wLjI2Ni0wLjMxLTAuNTI4LTAuNDc3LTAuNzg0Yy0wLjA4NC0wLjEyOC0wLjE2OC0wLjI1NS0wLjI1NS0wLjM4Yy0wLjE4MS0wLjI1OS0wLjM3MS0wLjUxMS0wLjU2Ny0wLjc1OCAgYy0wLjA3OS0wLjEtMC4xNTQtMC4yMDItMC4yMzYtMC4yOTljLTAuMjgxLTAuMzM2LTAuNTc0LTAuNjYxLTAuODgyLTAuOTcxYy0wLjA0NS0wLjA0NS0wLjA5NS0wLjA4Ni0wLjE0MS0wLjEzMSAgYy0wLjI2OC0wLjI2Mi0wLjU0NS0wLjUxNC0wLjgzMi0wLjc1NmMtMC4xMTEtMC4wOTMtMC4yMjUtMC4xODEtMC4zMzgtMC4yNzFjLTAuMjM2LTAuMTg4LTAuNDc3LTAuMzY5LTAuNzI1LTAuNTQyICBjLTAuMTI2LTAuMDg4LTAuMjUyLTAuMTc2LTAuMzgtMC4yNmMtMC4yNjYtMC4xNzUtMC41MzktMC4zMzgtMC44MTYtMC40OTZjLTAuMTEtMC4wNjItMC4yMTYtMC4xMjktMC4zMjctMC4xODkgIGMtMC4zODYtMC4yMDctMC43ODEtMC4zOTktMS4xODYtMC41NzJjLTAuMDg2LTAuMDM3LTAuMTc2LTAuMDY2LTAuMjYzLTAuMTAxYy0wLjI1OC0wLjEwNS0wLjUxNi0wLjIxLTAuNzgxLTAuMzAxbDEyLjc2MS0yLjY3OCAgYzMuODE2LTAuNzE2LDcuNzEzLDAuMjksMTAuNzAxLDIuNzY2QzU4LjI4NSwxMi4zNjQsNjAsMTYuMDEzLDYwLDE5Ljg5NlYzMS4yOXoiPjwvcGF0aD48cGF0aCBkPSJNMTUuMTA1LDQyLjU1M2wtMyw2bDEuNzg5LDAuODk1TDE2LjYxOCw0NEgzMXYtMkgxNkMxNS42MjEsNDIsMTUuMjc1LDQyLjIxNCwxNS4xMDUsNDIuNTUzeiI+PC9wYXRoPjxyZWN0IHg9IjYiIHk9IjMxIiB3aWR0aD0iOCIgaGVpZ2h0PSIyIj48L3JlY3Q+PHBvbHlnb24gcG9pbnRzPSI0LDggNiw4IDYsNiA4LDYgOCw0IDYsNCA2LDIgNCwyIDQsNCAyLDQgMiw2IDQsNiAiPjwvcG9seWdvbj48cmVjdCB4PSI3IiB5PSIxMiIgd2lkdGg9IjIiIGhlaWdodD0iMiI+PC9yZWN0PjxyZWN0IHg9IjIiIHk9IjE3IiB3aWR0aD0iMiIgaGVpZ2h0PSIyIj48L3JlY3Q+PHJlY3QgeD0iNjAiIHk9IjQ0IiB3aWR0aD0iMiIgaGVpZ2h0PSIyIj48L3JlY3Q+PHJlY3QgeD0iNTMiIHk9IjUxIiB3aWR0aD0iMiIgaGVpZ2h0PSIyIj48L3JlY3Q+PHBvbHlnb24gcG9pbnRzPSI2MCw1NiA1OCw1NiA1OCw1OCA1Niw1OCA1Niw2MCA1OCw2MCA1OCw2MiA2MCw2MiA2MCw2MCA2Miw2MCA2Miw1OCA2MCw1OCAiPjwvcG9seWdvbj48L3N2Zz4="
          alt="Icon of Mailbox"
        />
      </div>
      <h1 class="modal__heading">✨ Subscribe Today ❤️‍🔥</h1>
      <p>
        Who doesn't! Get our newsletter for a 10% discount & the latest news and
        offers.
      </p>
      <div class="email-box">
        <input
          type="text"
          class="email-box__input"
          placeholder="💌 Email Address"
        />
        <button type="button" class="email-box__button">
          <i class="fa-regular fa-paper-plane"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutUs",
  data: () => ({}),
  computed: {},
  methods: {},
  mounted: {
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
  },
  watch: {},
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&display=swap");
.main-container {
  .orientation-container {
    width: 1080px;
    padding: 10px;
    margin: auto;

    .orientation {
      margin: auto;
      width: 100%;
      display: flex;
      justify-content: center;
      img {
        width: 100px;
      }
      .left-img {
      }
      .orientation-text {
        display: grid;
        grid-template-rows: auto auto auto;
        padding: 1em 3em;
        p {
          font-family: "Dancing Script", cursive;
          text-align: center;
          color: #333;
          font-weight: 600;
          font-size: 40px;
          width: 100%;
          transition: 0.2s ease;
        }
      }
      .right-img-container {
        display: flex;
        flex-direction: column;
        img {
          margin-top: auto;
        }
      }
    }
  }

  .our-team-container {
    display: flex;
    flex-direction: column;
    width: 100vw;
    position: relative;
    &:after {
      content: "";
      background: black;
      position: absolute;
      top: 0;
      left: 0;
      height: 3px;
      width: 30%;
      border-radius: 8px;
    }
    &:before {
      content: "";
      background: black;
      position: absolute;
      bottom: 0;
      right: 0;
      height: 3px;
      width: 30%;
      border-radius: 8px;
    }
    .team-main-container {
      width: 1080px;
      padding: 20px 10px;
      box-sizing: border-box;
      margin: auto;

      .team-leader,
      .team-member {
        .member-container {
          flex-direction: column;
          margin-left: auto;
          margin-right: auto;
          max-width: 300px;
          transition: 0.3s ease;
          padding: 10px 15px;
          &:hover {
            box-shadow: 0 10px 20px rgb(0 0 0 / 19%), 0 6px 6px rgb(0 0 0 / 22%);
          }
          .member-img {
            aspect-ratio: 1 / 1;
            width: 100%;

            img {
              width: 100%;
              padding: 2em;
              aspect-ratio: 1 / 1;
              border-radius: 200px;
              margin-left: auto;
              margin-right: auto;
            }
          }
          .member-information {
            text-align: center;
            .member-name {
              color: #333;
              font-weight: 600;
              font-size: 18px;
              margin-bottom: 0;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
            .member-role {
              color: #777;
              font-size: 15px;
              margin-bottom: 32px;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
          }
        }
      }

      .team-leader {
        display: block;
      }

      .team-member {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        column-gap: 10px;
      }
    }
  }

  .water-consumption-title {
    margin-top: 35px;
    background-color: #4db7b3;
    width: 100vw;
    h1 {
      color: white;
      text-align: center;
      padding: 10px;
    }
  }

  .water-consumption-container {
    width: 1080px;
    padding: 10px;
    margin: auto;
    .first-line {
      text-align: center;
      font-size: 16px;
    }
    .consumption-title {
      color: black;
      font-size: 18px;
      text-align: center;
    }
    .consumption-img-container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: auto;
      column-gap: 10px;
      width: 100%;
      div {
        img {
          margin: auto;
          width: 100%;
          height: 100%;
        }
        p {
          text-align: center;
          font-size: 17px;
          font-weight: 500;
        }
      }
    }
  }

  .quote-container {
    width: 1080px;
    margin: 50px auto;
    .quote {
      position: relative;
      display: flex;
      width: 100%;
      justify-content: center;
      .left-quote {
        svg {
          font-size: 50px;
        }
      }
      h2 {
        font-style: italic;
        font-size: 30px;
        padding: 30px 25px;
        color: black;
      }
      .right-quote {
        display: flex;

        svg {
          margin-top: auto;
          font-size: 50px;
        }
      }
      &:after {
        content: "";
        background: linear-gradient(to right, #4db7b3, #f299c2);
        position: absolute;
        bottom: 0;
        left: 35%;
        height: 3px;
        width: 30%;
        border-radius: 8px;
      }
    }

    .author {
      text-align: center;
      color: #333;
      font-style: italic;
      font-size: 17px;
      margin-top: 16px;
    }
  }

  .start-shopping {
    position: relative;
    max-width: 100vw;
    height: 100%;
    .shopping-bg {
      width: 100%;
      height: 450px;
      background: url("https://plasocks.com/wp-content/uploads/2022/07/LCole_2022-2677_less_saturated_2592x-1024x526.webp")
        no-repeat;
      background-size: cover;
      position: relative;
      &:after {
        content: ""; // ::before and ::after both require content
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: linear-gradient(120deg, #eaee44, #33d0ff);
        opacity: 0.3;
      }
    }
    .banner {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      display: block;
      row-gap: 20px;
      .banner-text {
        font-family: "Dancing Script", cursive;
        color: white;
        font-size: 45px;
        width: 100%;
      }
      .button-group {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        column-gap: 50px;
        width: 100%;
        .shop-btn {
          background-color: transparent;
          border: 3px solid white;
          text-align: center;
          width: 100%;
          display: grid;
          display: flex;
          padding: 10px 20px;
          box-sizing: border-box;
          transform: 0.3s, border 0.3s, background 0.3s, box-shadow 0.3s,
            opacity 0.3s, color 0.3s;
          .btn-text {
            color: white;
            font-size: 18px;
            display: inline-flex;
            flex-wrap: nowrap;
            margin: 0 auto;
            transform: translateX(13px);
            white-space: nowrap;
            animation: moveRight 0.3s ease-out;
            animation-fill-mode: backwards;
          }
          .v-badge {
            // display: none;
            transition: 0.3s ease;
            opacity: 0;
            svg {
              margin: auto 0px auto 0;
              font-size: 20px;
              color: #333;
            }
          }
          &:hover {
            background-color: white;
            .btn-text {
              color: #333;
              animation: moveLeft 0.3s ease-out;
              animation-fill-mode: backwards;
              transform: translateX(-7px);

              transition-delay: 0.3s;
            }
            .v-badge {
              opacity: 1;
            }
            @keyframes moveLeft {
              0% {
                color: #333;
                transform: translateX(13px);
              }

              100% {
                color: #333;
                transform: translateX(-4px);
              }
            }
            @keyframes moveRight {
              0% {
                opacity: 1;
                transform: translateX(-4px);
              }

              100% {
                color: white;
                transform: translateX(13px);
              }
            }
          }
        }
      }
    }
  }
  .modal {
    background: #4db7b3;
    color: white;
    width: 50rem;
    height: 100%;
    margin: 20px auto;
    margin-top: 60px;
    border-radius: 4px;
    text-align: center;
    padding: 10rem 4rem 4rem 4rem;
    position: relative;

    &__icon {
      position: absolute;
      top: -2rem;
      left: 50%;
      margin-left: -165px;
      background: #4db7b3;
      padding: 3rem 12rem 0 12rem;
      border-radius: 50%;
    }

    &__heading {
      text-transform: uppercase;
      font-size: 1.5rem;
    }

    p {
      font-size: 1rem;
      margin-bottom: 0;
    }
    .email-box {
      margin: auto;
      margin-top: 20px;
      width: 50%;
      position: relative;

      &__input {
        color: lighten(black, 20%);
        display: block;
        width: 100%;
        height: 3rem;
        border-radius: 4px;
        border: 1px solid darken(white, 20%);
        font-size: 1rem;
        padding: 1rem;
        outline: none;
        transition: 0.3s linear;
        &::placeholder {
          color: white;
          transition: 0.3s ease;
        }
        &:focus {
          border: 2.5px solid white;
          &::placeholder {
            opacity: 0.3;
          }
        }
      }

      &__button {
        border: none;
        position: absolute;
        font-size: 20px;
        right: 5%;
        top: 22%;
        transition: 0.3s ease;

        &:hover,
        &:focus {
          color: darken(#4db7b3, 20%);
        }
      }
    }
  }
}
</style>
