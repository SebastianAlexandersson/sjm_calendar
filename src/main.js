import Vue from 'vue';
import App from './App.vue';
import router from './router';
<<<<<<< HEAD
import store from "./store/index";
=======
// import todo from './components/todo-components';
// import store from './store';
>>>>>>> c839543e6190d648ee44f6606e40fe9521f6e976

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
