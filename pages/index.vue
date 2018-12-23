<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-flex xs12>
      <v-card class="mb-3">
        <v-card-text>
          <CityAddForm />
        </v-card-text>
      </v-card>

      <v-card>
        <v-card-text>
          <div
            v-for="city in cities"
            :key="city.name"
          >
            {{ city.name }} / {{ city.temp }} / {{ city.wind.direction }} {{ city.wind.speed }}  / {{ city.pressure }}
          </div>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

import CityAddForm from '@/containers/forms/CityAddForm';

export default {
  name: 'WeatherPage',

  components: {
    CityAddForm
  },

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
