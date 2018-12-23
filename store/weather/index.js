export const state = () => ({
  cities: []
});

export const mutations = {
  setCities(state, v) {
    state.cities = v;
  }
};

export const actions = {
  async fetchCities({ commit }) {
    const cities = await this.$axios.$get('/cities.json');

    commit('setCities', cities);
  }
};

export const getters = {
  cities: state => state.cities
};
