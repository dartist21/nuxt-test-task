<template>
  <v-app>
    <v-toolbar
      fixed
      app
    >
      <v-toolbar-title>
        Weather in cities
      </v-toolbar-title>
    </v-toolbar>

    <v-content>
      <v-container>
        <nuxt/>
      </v-container>
    </v-content>

    <v-footer
      app
    >
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {};
</script>
