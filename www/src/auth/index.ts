import Vue from "vue";
import createAuth0Client from "@auth0/auth0-spa-js";
import auth0 from 'auth0-js';

/** Define a default action to perform after authentication */
const DEFAULT_REDIRECT_CALLBACK = () =>
  window.history.replaceState({}, document.title, window.location.pathname);

let instance : any;
let vm: any = {};

/** Returns the current instance of the SDK */
export const getInstance = () => instance;

/** Creates an instance of the Auth0 SDK. If one has already been created, it returns that instance */
export const useAuth0 = ({
  onRedirectCallback = DEFAULT_REDIRECT_CALLBACK,
  redirectUri = process.env.VUE_APP_AUTH0_CALLBACK_URI,
  ...options
}) => {
  if (instance) return instance;

  // The 'instance' is simply a Vue object
  instance = new Vue({
    data() {
      return {
        loading: true,
        isAuthenticated: false,
        user: {},
        popupOpen: false,
        error: null,
        token: null
      };
    },
    methods: {
      /** Authenticates the user using a popup window */
      async loginWithPopup(o: any) {
        vm.popupOpen = true;
        try {
          const authResult = await vm.webAuth.popup.authorize({
            redirectUri: process.env.VUE_APP_AUTH0_CALLBACK_URI
          }, (err: any, authResult: any) => {
            vm.authResult = authResult;
            localStorage.setItem('auth', JSON.stringify(authResult))
            vm.webAuth.client.userInfo(vm.authResult.accessToken, function(err: any, user: any) {
              vm.user = user;
              localStorage.setItem('authUser', JSON.stringify(user));
            });
            vm.isAuthenticated = true;
          });
        } catch (e) {
          console.error(e);
        } finally {
          vm.popupOpen = false;
        }
      }
    },
    /** Use this lifecycle method to instantiate the SDK client */
    async created() {
      vm = this;
      vm.webAuth = new auth0.WebAuth({
        domain: options.domain,
        clientID: options.clientId,
        redirectUri: process.env.VUE_APP_AUTH0_CALLBACK_URI,
        responseType: 'token'
      });
    }
  });

  return instance;
};

// Create a simple Vue plugin to expose the wrapper object throughout the application
export const Auth0Plugin = {
  // @ts-ignore
  install(Vue, options) {
    Vue.prototype.$auth = useAuth0(options);
  }
};