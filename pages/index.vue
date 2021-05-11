<template>
  <div class="index">
		<div class="program program_big_themes" :style="'background-image: url('+img+')'">
			<div class="program_inner">
				<div class="program__title">Название другой программы в несколько строк</div>

				<div class="program__control program_control_indent">
					<div class="program__control_btn program__control_btn_mb">
						<span class="material-icons">
							star
						</span>
					</div>
					<div class="program__control_btn program__control_btn_mb">
						<span class="material-icons">
							favorite
						</span>
					</div>
					<div class="program__control_btn program__control_btn_mb">
						<span class="material-icons">
							insert_comment
						</span>
					</div>
					<div class="program__control_btn">
						<span class="material-icons">
							notifications_active
						</span>
					</div>
				</div>

				<div class="program__info">
					<div class="program__stats program_stats_mb">
						<div class="program__stats_like program_stats_mr">
							<span class="material-icons">
								star
							</span>
							12
						</div>
						<div class="program__stats_views program_stats_mr">
							<span class="material-icons">
								people
							</span>

							452
						</div>
						<div class="program__stats_duration">
							<span class="material-icons">
								query_builder
							</span>

							1 час 23 мин
						</div>
					</div>

					<div class="program__tags">
						<div class="program__tag" v-for="(item, key) in tags" :key="key">
							#тэг{{item}}
						</div>
					</div>
				</div>
			</div>
		</div>
  </div>
</template>

<script>
  export default {
    name: 'index',
		data() {
    	return {
    		img: require('assets/images/program_img.png'),
				tags: 3
			}
		}
  }
</script>

<style scoped>

</style>
