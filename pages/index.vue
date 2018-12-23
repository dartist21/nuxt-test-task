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
          <CityList />
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapActions } from 'vuex';

import CityAddForm from '@/containers/forms/CityAddForm';
import CityList from '@/containers/blocks/CityList';

export default {
  name: 'WeatherPage',

  components: {
    CityAddForm,
    CityList
  },

  async fetch({ store, params }) {
    await store.dispatch('weather/fetchCities');
  }
};
</script>
