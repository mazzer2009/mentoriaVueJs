import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [];
const routeLoader = require.context('./', true, /.route.js/);
routeLoader.keys().forEach((filename) => {
  const fileContent = routeLoader(filename).default;
  if (Array.isArray(fileContent)) {
    routes.concat(fileContent);
    return;
  }
  routes.push(fileContent);
});

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});
