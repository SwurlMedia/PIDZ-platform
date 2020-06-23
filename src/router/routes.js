import HomePage from '../page/HomePage';
import SignInPage from '../page/SignInPage';
import RegistrationPage from '../page/RegistrationPage';
import ArticlePage from '../page/ArticlePage';

export const RouteNames = {
  HOME: 'home',
  SIGN_IN: 'signin',
  REGISTRATION: 'register',
  ARTICLEPAGE: 'articlepage',
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
  {
    path: '/aanmelden',
    component: RegistrationPage,
    name: RouteNames.REGISTRATION,
  },
  {
    path: '/artikel',
    component: ArticlePage,
    name: RouteNames.ARTICLEPAGE,
  },
];
