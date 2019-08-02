import Vue from 'vue';
import { MediaQueries } from 'vue-media-queries';
import vueScrollto from 'vue-scrollto';
import App from './App.vue';

Vue.config.productionTip = false;

const mediaQueries = new MediaQueries();

Vue.use(mediaQueries);
Vue.use(vueScrollto);

new Vue({
  render: h => h(App),
  mediaQueries: mediaQueries,
}).$mount('#app');
