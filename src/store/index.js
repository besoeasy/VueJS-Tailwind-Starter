import { createStore } from 'vuex';

export default createStore({
	state: {
		count: 0,
	},
	getters: {
		count: (state) => state.count,
	},
	mutations: {},
	actions: {},
	modules: {},
});
