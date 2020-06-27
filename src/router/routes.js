import Login from '../view/Login';
import Main from '../view/Main';
import Join from '../view/Join';
import store from "../store";

export default [
  { path: '/',
    component: Login,
    beforeEnter: (to, from, next) => {
      if(store.state.userState.userId) {
        return next({ path: '/main'});
      }
      return next();
    },
  },
  { path: '/join',
    component: Join,
  },
  { path: '/main',
    component: Main,},
];
