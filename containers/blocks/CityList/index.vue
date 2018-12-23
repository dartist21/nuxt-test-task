<template>
  <div>
    <div
      v-for="city in paginatedCities"
      :key="city.name"
    >
      {{ city.name }} / {{ city.temp }} / {{ city.wind.direction }} {{ city.wind.speed }}  / {{ city.pressure }}
    </div>

    <div class="text-xs-center">
      <v-pagination
        v-model="page"
        :length="paginationLength"
        circle
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'CityList',

  data: () => ({
    page: 1,
    perPage: 2
  }),

  computed: {
    ...mapGetters({
      cities: 'weather/cities'
    }),
    paginationLength() {
      return Math.ceil(this.cities.length / this.perPage);
    },
    paginatedCities() {
      const start = (this.page - 1) * this.perPage;
      const end = start + this.perPage;

      return this.cities.slice(start, end);
    }
  }
};
</script>

<style>
</style>
