import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

import { Auth0Plugin } from "./auth";

const authDomain = process.env.AUTH0_DOMAIN;
const authClientId = process.env.AUTH0_CLIENT_ID;

Vue.config.productionTip = false;

Vue.use(Auth0Plugin, {
	clientId: authClientId,
	domain: authDomain,
	// @ts-ignore
	onRedirectCallback: appState => {
		router.push(
			appState && appState.targetUrl
			? appState.targetUrl
			: window.location.pathname
			);
	}
});

new Vue({
	router,
	store,
	// @ts-ignore
	vuetify,
	render: h => h(App)
}).$mount("#app");


