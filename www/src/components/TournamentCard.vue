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
        min-height="225px"
        min-width="400px"
        aspect-ratio="1.778"
      >
      </v-img>
    </div>
    <v-container>
      <v-row class="pa-5 ma-0" align="center" justify="center" dense>
        <v-col class="pa-1 text-center">
          <v-chip class="darkGray">Coed</v-chip>
        </v-col>
        <v-col class="pa-1 text-center">
          <v-chip class="darkGray">A/BB/B</v-chip>
        </v-col>
        <v-col class="pa-1 text-center">
          <v-chip class="darkGray">Shorties</v-chip>
        </v-col>
        <v-col class="pa-1 text-center">
          <v-chip class="darkGray">$170 Per Team</v-chip>
        </v-col>
        <v-col class="pa-1 text-center">
          <v-chip class="darkGray">$170 Per Team</v-chip>
        </v-col>
      </v-row>
    </v-container>
    <v-divider light></v-divider>
    <v-row class="pa-0" justify="center" align="center">
      <v-col class="text-center">
        <v-btn color="secondary" to="/tournamentSignUp">Sign Up</v-btn>
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


