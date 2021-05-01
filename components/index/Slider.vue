<template>
  <div class="slider">
    <b-carousel
      v-model="slide"
      indicators
    >
      <b-carousel-slide v-for="(image, key) in images" :img-src="image" :key="key"/>
    </b-carousel>
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
      ]
    }
  }
}
</script>

<style scoped>

</style>
