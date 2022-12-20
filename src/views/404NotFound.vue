<!-- <template>
  <div>Trang không tồn tại</div>
</template>

<script>
export default {
  name: "404NotFound",
};
</script>

<style lang="scss" scoped></style> -->
<template>
  <div class="error-container">
    <div class="first-section">
      <div class="error-left">
        <h2 class="error-title">🫢 Oops ! Page not found.</h2>
        <p class="error-content">
          Sorry, the page you were looking for doesn't exist or has been moved.
          We're working on it.
        </p>
      </div>
      <div class="error-right">
        <img
          src="https://drive.google.com/uc?id=1NlaXKd0PKXAk-k07hgWbPB6lKDZMd4Bh"
          alt="404-image"
          class="404-img"
        />
      </div>
    </div>

    <div class="second-section">
      <div class="back-tab-container">
        <p class="error-notif">
          Oops, why you are here? Looks like you took a wrong turn. Let's get
          you back on track.
        </p>
        <div class="back-link">
          <router-link to="/" class="back-route">
            ← Go back to home page
          </router-link>
        </div>
      </div>
      <div class="back-tab-container">
        <p class="error-notif">
          Oops, why you are here? Looks like you took a wrong turn. Let's get
          you back on track.
        </p>
        <div class="back-link">
          <router-link to="/" class="back-route">
            ← Go back to shop
          </router-link>
        </div>
      </div>
      <div class="back-tab-container">
        <p class="error-notif">
          Oops, why you are here? Looks like you took a wrong turn. Let's get
          you back on track.
        </p>
        <div class="back-link">
          <router-link to="/" class="back-route">
            ← Go back to about us
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "404NotFound",
};
</script>

<style lang="scss" scoped>
.error-container {
  max-width: 1080px;
  padding: 15px;
  padding-top: 2rem;
  margin: auto;
  box-sizing: border-box;
  .first-section {
    display: flex;
    border-bottom: 4px solid #f6f6f6;
    .error-left {
      display: flex;
      flex-direction: column;
      justify-content: center;
      h2 {
        font-size: 32px;
        color: black;
      }
      p {
        margin-top: 20px;
        line-height: 25px;
      }
    }
    .error-right {
      img {
        width: 28rem;
      }
    }
  }
  .second-section {
    margin: 30px 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 15px;
    .back-tab-container {
      border: 2px solid #eaeaea;
      padding: 15px;
      font-weight: 500;
      font-size: 15px;
      text-align: justify;
    }
    .back-route {
      text-decoration: none;
      transition: 0.3s ease;
      &:hover {
        opacity: 0.8;
      }
    }
  }
}

@media screen and (max-width: 960px) {
  .error-container {
    .first-section {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
  }
}
@media screen and (max-width: 700px) {
  .error-container {
    .second-section {
      grid-template-columns: repeat(2, 1fr);
      row-gap: 20px;
    }
  }
}
@media screen and (max-width: 480px) {
  .error-container {
    .first-section {
      .error-right {
        img {
          width: 80vw;
        }
      }
    }
    .second-section {
      display: flex;
      flex-direction: column;
    }
  }
}
</style>
