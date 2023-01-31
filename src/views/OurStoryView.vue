<template>
  <div class="story">
    <div class="change-page">
      <div class="btn-group">
        <button
          @click="selected = 1"
          :class="selected === 1 ? 'active' : 'inactive'"
        >
          Our Story
        </button>
        <button
          @click="selected = 2"
          :class="selected === 2 ? 'active' : 'inactive'"
        >
          About Us
        </button>
        <button
          @click="selected = 3"
          :class="selected === 3 ? 'active' : 'inactive'"
        >
          Sustainability
        </button>
      </div>
    </div>
    <OurStoryVue v-if="selected === 1" />
    <AboutUsVue v-else-if="selected === 2" />
    <SustainabilityVue v-else />
    <div class="start-shopping">
      <div class="shopping-bg"></div>
      <div class="banner">
        <h1 class="banner-text">Find your perfect pair of socks</h1>
        <div class="button-group">
          <button
            class="shop-btn"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
            <div class="btn-text">SHOP MEN</div>
            <v-badge :content="1" :value="1" color="#f299c2" overlap>
              <i class="fa-solid fa-bag-shopping"></i>
            </v-badge>
          </button>
          <button
            class="shop-btn"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
          >
            <div class="btn-text">SHOP CUSTOM</div>
            <v-badge :content="1" :value="1" color="#f299c2" overlap>
              <i class="fa-solid fa-bag-shopping"></i>
            </v-badge>
          </button>
          <button
            class="shop-btn"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
          >
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
import OurStoryVue from "@/components/OurStory/OurStoryTab/OurStory.vue";
import AboutUsVue from "@/components/OurStory/AboutUsTab/AboutUs.vue";
import SustainabilityVue from "@/components/OurStory/SustainabilityTab/Sustainability.vue";
import AOS from "aos";
import "aos/dist/aos.css";

export default {
  title: "Pla.Socks - Our Story",
  data: () => ({
    selected: 1,
  }),

  components: {
    OurStoryVue,
    AboutUsVue,
    SustainabilityVue,
  },

  watch: {
    $route() {
      this.selected = 1;
    },
  },

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
};
</script>

<style lang="scss" scoped>
.story {
  .change-page {
    display: flex;
    background-color: white;
    height: 5rem;
    .btn-group {
      display: block;
      width: fit-content;
      margin: auto;
      button {
        padding: 7px 10px;
        margin-right: 10px;
        color: #333;
        text-align: center;
        border-radius: 25px;
        // border: 2px dashed #4db7b3;
        background-color: transparent;
        transition: all ease 0.3s;
        &.active {
          background-color: #4db7b3;
          border: transparent;
          color: white;
          font-weight: 600;
        }
        &.inactive {
          background-color: transparent;
          // border: 2px dashed #4db7b3;
          color: #333;
          font-weight: 500;
        }
        &:not(.active):hover {
          // color: rgba(0, 0, 0, 0.5);
          background-color: rgba(0, 0, 0, 0.09);
        }
      }
    }
  }
  .start-shopping {
    position: relative;
    max-width: 100vw;
    height: 100%;

    .shopping-bg {
      width: 100%;
      height: 450px;
      background: url("https://i.imgur.com/sGIzDjl.png") no-repeat;
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

@media screen and (max-width: 800px) {
  .story {
    .modal {
      zoom: 0.8;
    }
  }
}

@media screen and (max-width: 670px) {
  .story {
    .start-shopping {
      .banner {
        .button-group {
          display: flex;
          flex-direction: column;
          .shop-btn {
            margin-top: 15px;
            &:first-of-type {
              margin: 0;
            }
          }
        }
      }
    }
    .modal {
      zoom: 1;
      width: 22rem;

      &__icon {
        margin-left: -130px;
        padding: 3rem 6rem 0 6rem;
        border-radius: 50%;
      }
      .email-box {
        margin-right: 10rem;
        width: 15rem;
      }
    }
  }
}
</style>
