<template>
    <div class="program-index">
			<NuxtLink to="/" class="btn btn-back btn-non-focus">
					<span class="material-icons-outlined">
						arrow_back_ios
					</span>
			</NuxtLink>

			<div class="program program_themes_single" :style="'background-image: url('+program.img+')'">
				<div class="program__control program-index_control_indent">
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
							{{program.likes}}
						</div>
						<div class="program__stats_views program_stats_mr">
							<span class="material-icons program_stats_icon_mr">
								people
							</span>

							{{program.views}}
						</div>
						<div class="program__stats_duration">
							<span class="material-icons program_stats_icon_mr">
								query_builder
							</span>

							{{durationParse(program.duration)}}
						</div>
					</div>

					<div class="program__tags">
						<div class="program__tag" v-for="(item, key) in tags" :key="key">
							#тэг{{item}}
						</div>
					</div>
				</div>
			</div>

      <div class="program-index__title program-index_inner_content program-index_mt">
        {{program.title}}
      </div>

      <div class="program-index__text program-index_inner_content program-index_mt">
        Tatintius utatem deliqui officipicate ilite ipid quisit, si omnient, quis et voluptatem faccust fugiatiur,
        quodips untibus andicatiis alibersped mi, odit in comnien discitam, sit lam nus eum remodis ex et idiate nus denda nim alia aboribus, nimus quia.
      </div>

      <div class="program-index__cost program-index_inner_content program-index_mt">
        <div class="program-index__price">
          1000 р. <br/>
          или 60 р./ день
        </div>
        <div class="program-index__control">
          <button class="btn program-index__btn btn-non-focus">
            <span class="material-icons-outlined">
              done
            </span>
          </button>
          <button class="btn program-index__btn btn-non-focus">
            <span class="material-icons-outlined">
              star
            </span>
          </button>
        </div>
      </div>

      <div class="program-index__about program-index_inner_content program-index_mt-2">
        <div class="program-index__sub_title">О программе</div>
        <ul class="program-index__about_list program-index_mt">
          <li>
            <span class="program-index__about_name_field">автор:</span>
            <span class="program-index__about_value">Имя Фамилия</span>
          </li>
          <li>
            <span class="program-index__about_name_field">дата:</span>
            <span class="program-index__about_value">22.01.2021</span>
          </li>
          <li>
            <span class="program-index__about_name_field">тема:</span>
            <span class="program-index__about_value">Программирование, Дизайн</span>
          </li>
          <li>
            <span class="program-index__about_name_field">уровень:</span>
            <span class="program-index__about_value">повышение квалификации</span>
          </li>
          <li>
            <span class="program-index__about_name_field">объем:</span>
            <span class="program-index__about_value">01 час 45 мин</span>
          </li>
          <li>
            <span class="program-index__about_name_field">диплом:</span>
            <span class="program-index__about_value">Сертификат</span>
          </li>
        </ul>
      </div>

      <div class="program-index__sub_title program-index_inner_content program-index_mt-3">Учебный план</div>
      <div class="program-index__text program-index_inner_content program-index_mt">
        Tatintius utatem deliqui officipicate ilite ipid quisit, si omnient, quis et voluptatem faccust fugiatiur,
        quodips untibus andicatiis alibersped mi, odit in comnien discitam, sit lam nus eum remodis ex
        et idiate nus denda nim alia aboribus, nimus quia.
      </div>
		</div>
</template>

<script>
  export default {
    name: 'program',
		data() {
    	return {
				tags: 3
			}
		},
		computed: {
    	program() {
				return this.$store.state.program.programs.find(x => x.id == this.$route.params.id)
			}
		},
		methods: {
			durationParse(duration) {
				let hours = Math.trunc(duration/60);
				let minutes = duration - hours*60;

				return hours + ' час ' + minutes + ' мин '
			}
		}
	}
</script>

<style scoped>

</style>
