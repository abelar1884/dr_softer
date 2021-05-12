export const state = () => ({
	programs: [
		{
			id: 1,
			title: 'Название другой программы в несколько строк',
			img: require('~/assets/images/program_img.png'),
			likes: 156,
			views: 567,
			duration: 180
		},
		{
			id: 2,
			title: 'Название другой программы в несколько строк2',
			img: require('~/assets/images/program_img2.png'),
			likes: 98,
			views: 342,
			duration: 90
		}
	]
})

export const getters = {
	getProgramById: (state) => (id) => {
		return state.programs.find(x => x.id === id);
	}
}

export const mutations = {
	increment(state) {
		state.program ++;
	}
}

