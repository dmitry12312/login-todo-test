import Vue from 'vue'
import VueRouter from 'vue-router'
import ToDoView from "../views/ToDoView";
import LoginView from "../views/LoginView";
import store from "../store";



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Todo',
    component: ToDoView,
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView,
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});
router.beforeEach((to, from, next) => {
  if (to.name !== 'Login' && !store.state.isLoggedIn && !store.state.username) {
    next({path: '/login'});
  }
  else {
    next();
  }
})

export default router
