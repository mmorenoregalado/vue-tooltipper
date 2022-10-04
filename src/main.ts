import { createApp } from "vue";
import App from "./App.vue";
import { createTooltipPlugin } from "./toolTipPlugin";
import "./assets/main.css";

createApp(App)
  .use(createTooltipPlugin({ arrow: true, placement: "top" }))
  .mount("#app");
