import Vue from 'vue';
import { MediaQueries } from 'vue-media-queries';
import App from './App.vue';

Vue.config.productionTip = false;

const mediaQueries = new MediaQueries();

Vue.use(mediaQueries);

new Vue({
  render: h => h(App),
  mediaQueries: mediaQueries,
}).$mount('#app');
