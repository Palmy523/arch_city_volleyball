<template>
	<v-container
	  class="fill-height"
	  fluid
	  pa-0
	  ma-0
  >
	  <v-sheet 
		  color="offWhite"
		  width="100%"
		  tile
		>
		  <v-layout row wrap align-center>
		    <v-col class="pa-12" cols="12" md="6" sm="12">
		      <v-carousel>
		        <v-carousel-item>
		          <v-sheet height="100%" dark color="offWhite" tile>
		          	<v-banner class="primary" style="word-break: break-word">
					  		Arch City Rumbler Pickerington&#8209;OH <br/>Feb&#8209;22
							    <template v-slot:actions>
							      <v-btn
							        text
							        class="offWhite"
							        light
							        outlined
							        to="tournamentSignUp"
							      >
							        Sign Up Now
							      </v-btn>
							    </template>
							  </v-banner>
		            <v-img
		              src="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/76267128_157403062321402_2952145173905145856_n.jpg?_nc_cat=110&_nc_ohc=U2MI6ipovigAQk3gECA_c0AvApZMLmG2JNlM4kAIkMEwv9i2kH-Z04HQw&_nc_ht=scontent-ort2-1.xx&oh=cd4b8fe621b1c6ccc08398751157550a&oe=5E66AE49"
		              aspect-ratio="1"
		              height="100%"
		              width="100%"
		            ></v-img>
		          </v-sheet>
		        </v-carousel-item>
		        <v-carousel-item>
		          <v-sheet height="100%" light color="offWhite" tile>
		            Slide 2
		          </v-sheet>
		        </v-carousel-item>
		        <v-carousel-item>
		          <v-sheet height="100%" light color="offWhite" tile>
		            Slide 3
		          </v-sheet>
		        </v-carousel-item>
		      </v-carousel>
		    </v-col>
		    <v-col class="pa-12" cols="12" md="6" sm="12">
		      <h2>Columbus Coed, Mens, and Womens Volleyball.</h2>
		      <h2>A/BB/B Tournaments.</h2>
		      <h2>Pick-Up Play.</h2>
		      <div>
		        Arch City Volleyball is your one stop shop for A/BB/B volleyball in Columbus, OH. We continually host pick-up games and tournaments in the greater Columbus area. Our goal is to find and connect players in the community. <br/><br/>Create a team, find a team, or sign up as a free agent today!
		      </div>
		      <v-row class="pa-0 mt-10" justify="center" align="center">
		        <v-col class="text-center">
		          <v-btn color="secondary">Create A Team</v-btn>
		        </v-col>
		        <v-col class="text-center">
		          <v-btn color="secondary">Find A Team</v-btn>
		        </v-col>
		        <v-col class="text-center">
		          <v-btn color="secondary">Free Agent Sign Up</v-btn>
		        </v-col>
		      </v-row>
		    </v-col>
		  </v-layout>
		</v-sheet>
	</v-container>
</template>

<script>
  import contentService from '@/services/contentService';

  export default {
    name: 'Home',
    data: () => {
      carouselContent: []
    },
    created: async function() {
      contentService.getCarouselContent().then((data) => {
        this.carouselContent = data
      }).catch((err) => {
        console.error(err);
      });
    }
  }
</script>
