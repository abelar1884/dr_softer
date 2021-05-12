<template>
  <div class="index">

			<div class="program program_themes_big program_stats_mb" v-for="(item, key) in programs" :key="key" :style="'background-image: url('+item.img+')'">
				<div class="program_inner">
					<NuxtLink  :to="{name: 'program-id', params: {id: item.id}}">
						<div class="program__title">{{item.title}}</div>
					</NuxtLink>

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
								<span class="material-icons program_stats_icon_mr">
									star
								</span>
								{{item.likes}}
							</div>
							<div class="program__stats_views program_stats_mr">
								<span class="material-icons program_stats_icon_mr">
									people
								</span>

								{{item.views}}
							</div>
							<div class="program__stats_duration">
								<span class="material-icons program_stats_icon_mr">
									query_builder
								</span>

								{{durationParse(item.duration)}}
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
	import { mapMutations } from 'vuex';

  export default {
    name: 'index',
		data() {
    	return {
    		img: require('~/assets/images/program_img.png'),
				tags: 3
			}
		},
		computed: {
			programs() {
				return this.$store.state.program.programs;
			}
		},
		methods: {
    	durationParse(duration) {
				let hours = Math.trunc(duration/60);
				let minutes = duration - hours*60;

				return hours + ' час ' + minutes + ' минут '
			}
		}
  }
</script>

<style scoped>

</style>
