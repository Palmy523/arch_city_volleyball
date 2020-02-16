import Vue from "vue";
// @ts-ignore
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#3F51B5",
        secondary: "#5C6BC0",
        offWhite: "#E8EAF6",
        darkGray: '#424242',
        accent: "#F44336",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FFC107"
      }
    }
  }
});
