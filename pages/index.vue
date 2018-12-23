<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-flex
      xs12
      sm8
      md6
    >
      <v-card>
        <div
          v-for="city in cities"
          :key="city.name"
        >
          {{ city.name }} / {{ city.temp }} / {{ city.wind.direction }} {{ city.wind.speed }}  / {{ city.pressure }}
        </div>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'WeatherPage',

  async fetch({ store, params }) {
    await store.dispatch('weather/fetchCities');
  },

  computed: {
    ...mapGetters({
      cities: 'weather/cities'
    })
  }
};
</script>
