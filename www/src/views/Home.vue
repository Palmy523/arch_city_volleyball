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
		          	<v-banner class="d-absolute mt-10 primary" style="word-break: break-word">
					  		Men's/Women's The Ultimate Tournament Is On Pickerington&#8209;OH <br/>Feb&#8209;22
							    <template v-slot:actions>
							      <v-btn
							        text
							        color="offWhite"
							        outlined
							      >
							        Sign Up Now
							      </v-btn>
							    </template>
							  </v-banner>
		            <v-img
		              src="https://dailybruin.com/images/2016/01/web.sp_.mvb_.AYeo_-640x461.jpg"
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
		      <h2>A/B/BB Tournaments.</h2>
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
