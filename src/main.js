import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from "./store";
import {library} from '@fortawesome/fontawesome-svg-core';
import "./assets/sass/app.sass";
import Vue2TouchEvents from 'vue2-touch-events';
import velocityPlugin from 'velocityjs';

import {
    faHome,
    faSync
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';

library.add(faHome, faSync);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.use(Vue2TouchEvents);

Vue.use(velocityPlugin);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
