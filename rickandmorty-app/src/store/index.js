import Vue from 'vue';
import Vuex from 'vuex';
import $api from '../api';

Vue.use(Vuex)

const initialState = {
    episodes: {}
}

export default new Vuex.Store({
    state: { ...initialState },
    mutations: {
        setEpisodes(state, value) {
            state.episodes = value;
        }
    },
    actions: {
        async fetchEpisodes({ commit }, payload) {
            const episodes = await $api.episodes.getEpisodes(payload);
            commit('setEpisodes', episodes.data.results);
        }
    },
})