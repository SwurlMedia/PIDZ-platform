import HomePage from '../page/HomePage';
import SignInPage from '../page/SignInPage';
import RegistrationPage from '../page/RegistrationPage';

export const RouteNames = {
  HOME: 'home',
  SIGN_IN: 'signin',
  REGISTRATION: 'register',
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
];
