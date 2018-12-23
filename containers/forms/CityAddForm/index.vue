<template>
  <v-form ref="form">
    <v-container>
      <v-layout wrap>
        <v-flex xs6>
          <v-text-field
            v-model="city.name"
            label="Name"
            required
          />
          <v-text-field
            v-model="city.temp"
            label="Temperature"
            required
          />
        </v-flex>
        <v-flex xs6>
          <v-text-field
            v-model="city.wind.direction"
            label="Wind direction"
            required
          />
          <v-text-field
            v-model="city.wind.speed"
            label="Wind speed"
            required
          />
        </v-flex>
        <v-flex xs12>
          <v-text-field
            v-model="city.pressure"
            label="Pressure"
            required
          />

        </v-flex>
        <v-btn
          @click="submit"
        >
          Add city
        </v-btn>
      </v-layout>
    </v-container>




    <!-- <v-btn @click="clear">clear</v-btn> -->
  </v-form>
</template>

<script>
import { mapActions } from 'vuex';
import cloneDeep from 'lodash/cloneDeep';

export default {
  name: 'CityAddForm',

  data: () => ({
    city: {
      name: '',
      temp: '',
      wind: {
        direction: '',
        speed: ''
      },
      pressure: ''
    }
  }),

  methods: {
    ...mapActions({
      addCity: 'weather/addCity'
    }),
    submit() {
      const city = cloneDeep(this.city);
      this.addCity(city);

      this.$refs.form.reset();
    }
  }
};
</script>

<style>
</style>
