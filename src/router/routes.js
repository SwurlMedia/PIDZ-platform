import HomePage from '../page/HomePage';
import SignInPage from '../page/SignInPage';

export const RouteNames = {
  HOME: 'home',
  SIGN_IN: 'signin',
};

export default [
  {
    path: '/',
    component: HomePage,
    name: RouteNames.HOME,
  },
  {
    path: '/inloggen',
    component: SignInPage,
    name: RouteNames.SIGN_IN,
  },
];
