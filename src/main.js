import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

Vue.config.productionTip = false

Vue.directive('scroll', {
  inserted: function(el, binding) {
    let f = function(evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener('scroll', f);
      }
    };
    window.addEventListener('scroll', f);
  },
});

Vue.directive('theme', {
  bind(el, binding){
    if (binding.value == 'dark') {
      el.style.backgroundColor = '#' + '000000'
    } else {
      el.style.backgroundColor = '#' + 'FFFFFF'
    }
    
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
