import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

import "@/assets/css/icons.css";
import "@/assets/css/tailwind.css";
import "@/assets/scss/styles.scss";

import "focus-visible/dist/focus-visible.min.js";

const requireComponent = require.context(
  // The relative path of the components folder
  "./components",
  // Whether or not to look in subfolders
  false,
  // The regular expression used to match base component filenames
  /Base[A-Z]\w+\.(vue|js)$/,
);

requireComponent.keys().forEach(fileName => {
  // Get component config
  const componentConfig = requireComponent(fileName);

  // Get PascalCase name of component
  const componentName = fileName
    .split("/")
    .pop()
    .replace(/\.\w+$/, "");

  Vue.component(
    componentName,
    // Look for the component options on `.default`, which will
    // exist if the component was exported with `export default`,
    // otherwise fall back to module's root.
    componentConfig.default || componentConfig,
  );
});

Vue.config.productionTip = false;

document.body.addEventListener("mousedown", function() {
  document.body.classList.add("using-mouse");
});

document.body.addEventListener("keydown", function() {
  document.body.classList.remove("using-mouse");
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount("#app");
