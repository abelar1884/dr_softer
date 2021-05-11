<template>
  <div>
    <slider/>
    <info-block :category="category" v-for="(category, key) in categories" :key="key" v-if="category.education_programs_count"/>

    <div class="alert error" v-if="error">
      {{error}}
    </div>
  </div>
</template>

<script>
import PageLayout from '~/layouts/page'
import Slider from '~/components/index/Slider'
import InfoBlock from '~/components/index/InfoBlock'

export default {
  components: { InfoBlock, Slider, PageLayout },
  data() {
    return {
      categories: null,
      error: null
    }
  },
  created () {
    this.getCategories();
  },
  methods: {
    async getCategories() {
      let self = this;

      await this.$axios.get('categories').then(function (response) {
        self.categories = response.data.data;
      }).catch(function (response) {
        self.error = response;
      });
    }
  }

}
</script>

<style>

</style>
