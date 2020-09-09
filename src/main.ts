import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

const foo: stripe.Token | null = null;
console.log(foo);

new Vue({
  render: h => h(App),
}).$mount('#app')
