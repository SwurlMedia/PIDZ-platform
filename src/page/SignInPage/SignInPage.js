import { AbstractPageScrollComponent, getEventBus, ADD_COMPONENTS } from 'vue-transition-component';
import SignInPageTransitionController from './SignInPageTransitionController';
import BtnPrimaryFlat from '../../component/atom/BtnPrimaryFlat';
import User from '../../data/User';

// @vue/component
export default {
  name: 'SignInPage',
  components: {
    BtnPrimaryFlat,
  },
  extends: AbstractPageScrollComponent,
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new SignInPageTransitionController(this);

      // When all components are ready we start adding the scrollComponents to the scroll tracker
      getEventBus().$emit(ADD_COMPONENTS, this.scrollComponents);

      this.isReady();

      User.fetchUserDetails('zepRTOPcbh4iLhL5wGIT')
        .then(user => {
          console.log(user);
        })
        .catch(err => console.error(err));
    },
    signIn() {
      alert(`email: ${this.email} – password: ${this.password}`);
    },
  },
};
