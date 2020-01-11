import Vue from "vue";
import App from "./App.vue";
import ColorDirective from "./color";
import List from "./List";

Vue.directive('colored', ColorDirective);

Vue.component(List.name, List);

new Vue({
    el: '#app',
    render: h => h(App)
});
