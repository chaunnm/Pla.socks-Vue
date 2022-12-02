<template>
    <div class="reviewItem-container mt-10">
        <figure class="avatar-img" :style="{ backgroundImage: 'url(' + review.image + ')' }">
            <img :scr="review.image" alt=""/>
        </figure>
        <div class="content-container mt-5">
            <div class="review-rate">
                <i class="icon-rate fa-solid fa-star"></i>
                <i class="icon-rate fa-solid fa-star"></i>
                <i class="icon-rate fa-solid fa-star"></i>
                <i class="icon-rate fa-solid fa-star"></i>
                <i class="icon-rate fa-solid fa-star"></i>
            </div>
            <div class="review-title mt-3 mb-5"><b>{{review.itemTitle}}</b></div>
            <div class="review-content mb-5"><i>{{review.content}}</i></div>
            <div class="review-info"><b>{{review.name}}</b> / {{review.job}}</div>
        </div>
    </div>
</template>

<script>
export default {
  name: "ReviewItem",
  data: () => ({}),
  props: ["review"],
  //   computed: {},
  //   methods: {},
  //   mounted: {},
  //   watch: {},
};
</script>

<style lang="scss" src="./ReviewItem.scss" scoped></style>