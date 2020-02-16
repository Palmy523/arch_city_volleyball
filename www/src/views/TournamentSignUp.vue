<template>
  <v-container
  fluid
    pa-5
    ma-0
   >
    <v-sheet color="offWhite text-center">
      <v-row>
        <v-col cols="12" md="6">
          <v-card height="100%">
            <h1 class="secondary white--text text-center">Arch City Rumbler</h1>
            <v-img 
              src="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/76267128_157403062321402_2952145173905145856_n.jpg?_nc_cat=110&_nc_ohc=U2MI6ipovigAQk3gECA_c0AvApZMLmG2JNlM4kAIkMEwv9i2kH-Z04HQw&_nc_ht=scontent-ort2-1.xx&oh=cd4b8fe621b1c6ccc08398751157550a&oe=5E66AE49"
              height="400px">
            </v-img>
            <v-sheet class="text-left secondary pa-5" tile>
              <v-label dark>Feb 22, 2019</v-label>
              <br/>
              <v-label dark>Pickerington North High School</v-label>
              <br/>
              <v-label dark>12345 Example Road, Pickerington, OH</v-label>
              <br/>
              <v-label dark>Registration Fee: $170 Per Team</v-label>
            </v-sheet>
          </v-card>
        </v-col>
        <v-col cols="12" md="6">
          <v-card height="100%">
            <h1 class="secondary white--text">Please Enter Your Team Information</h1>
            <v-form class="pa-5">
              <v-text-field label="First Name"></v-text-field>
              <v-text-field label="Last Name"></v-text-field>
              <v-text-field label="Email"></v-text-field>
              <v-text-field label="Phone Number"></v-text-field>
              <v-select
                :items="['A', 'BB', 'B']"
                label="Division"
              ></v-select>
              <v-text-field label="Team Name (Optional)"></v-text-field>
              <v-btn class="secondary" dark>Submit</v-btn>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-sheet>
  </v-container>
</template>