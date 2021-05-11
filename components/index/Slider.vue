<template>
  <div class="slider">
    <swiper class="slider" :options="options">
      <swiper-slide v-for="(image, key) in images" :key="key">
        <div class="slider__slide" :style="'background-image: url('+image+')'"></div>
      </swiper-slide>
      <div class="slider__dots" slot="pagination">
        <span v-for="(item, key) in images" :key="key"></span>
      </div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'Slider',
  data() {
    return {
      slide: 0,
      images: [
        require('assets/images/slide_1.jpg'),
        require('assets/images/slide_1.jpg'),
        require('assets/images/slide_1.jpg'),
        require('assets/images/slide_1.jpg'),
      ],
      options: {
        autoplay : {
          delay: 5000
        },
        pagination: {
          el: '.slider__dots',
          type: 'bullets'
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
