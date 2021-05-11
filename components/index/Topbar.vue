<template>
  <div class="topbar">
    <div class="topbar__logo">
      <div class="topbar__title">
        Университет <br/> ФНС России
      </div>
    </div>
    <div class="topbar__control">
      <div class="topbar__search">
        <button class="btn topbar__search_btn topbar_search_btn_mr btn-non-focus">
          <span class="material-icons-outlined">
            search
          </span>
        </button>
      </div>
      <div class="topbar__burger">
        <button class="btn topbar__burger_btn btn-non-focus">
          <span class="material-icons-outlined">
            menu
          </span>
        </button>
      </div>
    </div>
    <!-- TODO - make reload btn  -->
    <button class="btn btn-reload" style="display: none">
      <span class="material-icons-outlined">
        cached
      </span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'Topbar'
}
</script>

<style scoped>

</style>
