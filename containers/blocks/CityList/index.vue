<template>
  <div>
    <h2 class="ml-2 mb-3">
      Total cities: {{ cities.length }}
    </h2>

    <div
      v-for="(city, idx) in paginatedCities"
      :key="city.name"
      class="city"
    >
      <div>
        {{ city.name }} / {{ city.temp }} °C / {{ city.wind.direction }} {{ city.wind.speed }}  / {{ city.pressure }}
      </div>
      <div>
        <v-btn
          fab
          dark
          small
          color="primary"
          class="ma-0"
          @click="removeCity(idx)"
        >
          <v-icon dark>clear</v-icon>
        </v-btn>
      </div>
    </div>

    <div class="text-xs-center mt-4">
      <v-pagination
        v-model="page"
        :length="paginationLength"
        circle
      />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

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
  },

  methods: {
    ...mapActions({
      removeCityAction: 'weather/removeCity'
    }),
    removeCity(idx) {
      const storeIdx = idx + (this.page - 1) * this.perPage;

      this.removeCityAction(storeIdx);
      this.checkPage();
    },
    checkPage() {
      if (this.page > this.paginationLength) {
        this.page = this.paginationLength;
      }
    }
  }
};
</script>

<style>
.city {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 8px;
  border-bottom: 1px solid #000;
}

.city:hover {
  background: #d3d3d3;
}
</style>
