<template>
    <div class="bottombar">
      <div class="bottombar__item">
				<NuxtLink to="/" class="bottombar__link">
					<span class="material-icons bottombar_item_home">
          	home
        	</span>
				</NuxtLink>
      </div>
      <div class="bottombar__item">
				<NuxtLink to="/categories" class="bottombar__link">
					<span class="material-icons-outlined bottombar_item_check">
          	playlist_add_check
					</span>
				</NuxtLink>
      </div>
      <div class="bottombar__item">
        <NuxtLink to="/" class="bottombar__link">
					<span class="material-icons bottombar_item_video">
          	play_circle_filled
        	</span>
				</NuxtLink>
      </div>
      <div class="bottombar__item">
        <NuxtLink to="/" class="bottombar__link">
					<span class="material-icons bottombar_item_chat">
						insert_comment
					</span>
				</NuxtLink>
      </div>
      <div class="bottombar__item">
        <NuxtLink to="/" class="bottombar__link">
					<span class="material-icons bottombar_item_profile">
						person
					</span>
				</NuxtLink>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'Bottombar'
  }
</script>

<style scoped>

</style>
