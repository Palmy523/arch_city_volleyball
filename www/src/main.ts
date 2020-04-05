import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

// Import the plugin here
import { Auth0Plugin } from "./auth";



const authDomain = process.env.VUE_APP_AUTH0_DOMAIN;
const authClientId = process.env.VUE_APP_AUTH0_CLIENT_ID;

Vue.config.productionTip = false;

// Install the authentication plugin here
Vue.use(Auth0Plugin, {
  domain: authDomain,
  clientId: authClientId,
  //@ts-ignore
  onRedirectCallback: appState => {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    );
  }
});

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	// @ts-ignore
	vuetify,
	render: h => h(App)
}).$mount("#app");


