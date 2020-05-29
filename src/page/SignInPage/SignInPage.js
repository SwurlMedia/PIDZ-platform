import { AbstractPageScrollComponent, getEventBus, ADD_COMPONENTS } from 'vue-transition-component';
import SignInPageTransitionController from './SignInPageTransitionController';
import BtnPrimaryFlat from '../../component/atom/BtnPrimaryFlat';

// @vue/component
export default {
  name: 'SignInPage',
  components: {
    BtnPrimaryFlat,
  },
  extends: AbstractPageScrollComponent,
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new SignInPageTransitionController(this);

      // When all components are ready we start adding the scrollComponents to the scroll tracker
      getEventBus().$emit(ADD_COMPONENTS, this.scrollComponents);

      this.isReady();
    },
  },
};
