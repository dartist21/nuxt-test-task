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
  },
  addCity({ getters, commit }, city) {
    const newCities = [...getters.cities, city];

    commit('setCities', newCities);
  }
};

export const getters = {
  cities: state => state.cities
};
