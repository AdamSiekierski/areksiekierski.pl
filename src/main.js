import Vue from 'vue';
import { MediaQueries } from 'vue-media-queries';
import vueScrollto from 'vue-scrollto';
import Fragment from 'vue-fragment';
import App from './App.vue';

Vue.config.productionTip = false;

const mediaQueries = new MediaQueries();

Vue.use(mediaQueries);
Vue.use(vueScrollto);
Vue.use(Fragment.Plugin);

new Vue({
  render: (h) => h(App),
  mediaQueries: mediaQueries,
}).$mount('#app');
