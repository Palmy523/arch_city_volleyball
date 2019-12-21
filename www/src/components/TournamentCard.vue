<template>
  <v-card class="d-inline-block">
    <v-sheet class="pa-1 darkGray" dark tile>
      <h5 class="text-center text-white">Feb 25, 2019</h5>
    </v-sheet>
    <v-sheet class="pa-5 primary" dark tile>
      <h5 class="text-center">Polar Bear Classic</h5>
    </v-sheet>
    <v-sheet class="offWhite" dark tile>
      <div><v-img 
        src="@/assets/acvbLogo1.png"
        height="225px"
        width="400px"
        aspect-ratio="1.778"
      >
      </v-img>
    </div>
    <v-row>
      <v-col class="text-center">
        <v-chip class="darkGray">COED</v-chip>
      </v-col>
      <v-col class="text-center">
        <v-chip class="darkGray">A/BB/B</v-chip>
      </v-col>
      <v-col class="text-center">
        <v-chip class="darkGray">Shorties</v-chip>
      </v-col>
    </v-row>
    <v-divider light></v-divider>
    <v-row class="pa-0" justify="center" align="center">
      <v-col class="text-center">
        <v-btn color="secondary">Sign Up</v-btn>
      </v-col>
    </v-row>
  </v-sheet>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "TournamentCard",
  data: () => ({
  })
});
</script>
