<template>
    <div class="info-block">
      <div class="info-block__header">

        <div class="info-block__header_left">
          <div class="info-block__detail_icon material-icons-outlined" :class="[isOpen? 'info-block_detail_icon_open' : '']" v-b-toggle="'collapse-' + category.id" @click="isOpen = !isOpen">
            expand_less
          </div>
          <div class="info-block__title">{{category.name}}</div>
        </div>

        <div class="info-block__header_right">
          <div class="info-block__count info-block_count_mr">{{category.education_programs_count}}</div>
          <div class="info-block__more_icon">
            <span class="material-icons-outlined">
               chevron_right
            </span>
          </div>
        </div>

      </div>
      <b-collapse :id="'collapse-' + category.id" class="info-block__content" visible>
        <swiper ref="mySwiper" :options="option" class="info-block__slider">
          <!-- slides -->
          <swiper-slide v-for="(item, key) in category.ready_education_programs" :key="key">
            <div class="swiper__image"></div>
            <div class="swiper__title">
              {{item.name}}
            </div>
          </swiper-slide>
          <swiper-slide class="swiper-slide__last">
            Все <br>программы
          </swiper-slide>
        </swiper>
      </b-collapse>



    </div>
</template>

<script>
  export default {
    name: 'InfoBlock',
    props: {
      category: {
        require: true,
        type: Object
      }
    },
    data() {
      return {
        isOpen: true,
        slides: 10,
        option: {
          slidesPerView: 'auto',
          loop: false,
        }
      }
    },
    methods: {
      onSwiper(swiper) {
        //console.log(swiper);
      },
      onSlideChange() {
        //console.log('slide change');
      },
    }
  }
</script>

<style scoped>

</style>
