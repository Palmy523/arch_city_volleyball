<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list dense>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-contact-mail</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Tournaments</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-contact-mail</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Free Agent Sign Up</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-contact-mail</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Pick-up Play</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="primary"
      dark
      extended
      fixed
    >
      <v-app-bar-nav-icon 
        @click.stop="drawer = !drawer" 
      />
      <v-toolbar-title>Arch City Volleyball</v-toolbar-title>
      <template v-slot:extension>
        <v-tabs
          align-with-title
          color="accent"
        >
          <v-tab to="/home">Home</v-tab>
          <v-tab to="/tournaments">Tournaments</v-tab>
          <v-tab to="/freeAgent">Free Agent Sign Up</v-tab>
          <v-tab to="/pickup">Pick-Up Play</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>

    <v-content class="offWhite">
      <router-view></router-view>
    </v-content>
    <v-footer
      color="indigo"
      app
    >
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",
  props: {
    source: String,
  },
  data: () => ({
    drawer: false,
  })
});
</script>

<style>
  .center-margins-y {
    position: absolute;
    top: 50%;
    bottom: 50%;
    margin-top: auto!important;
    margin-bottom: auto!important;
  }

  .in-front-of-image {
    z-index: 1!important;
  }
</style>