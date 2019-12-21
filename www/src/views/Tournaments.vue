<template>
	<v-container
		fluid
	  pa-5
	  ma-0
	 >
	 	<v-row class="pa-0" justify="center" align="center">
			<v-col class="text-center">	
				<TournamentCard></TournamentCard>
			</v-col>
			<v-col class="text-center">		
				<TournamentCard></TournamentCard>
			</v-col>
			<v-col class="text-center">		
				<TournamentCard></TournamentCard>
			</v-col>
			<v-col class="text-center">		
				<TournamentCard></TournamentCard>
			</v-col>
			<v-col class="text-center">		
				<TournamentCard></TournamentCard>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
	import TournamentCard from '@/components/TournamentCard.vue'

	export default {
	  name: 'tournaments',
	  components: {
	    TournamentCard
	  }
	}
</script>
