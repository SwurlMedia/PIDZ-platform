import { AbstractPageScrollComponent, getEventBus, ADD_COMPONENTS } from 'vue-transition-component';
import RegistrationPageTransitionController from './RegistrationPageTransitionController';

// @vue/component
export default {
  name: 'RegistrationPage',
  extends: AbstractPageScrollComponent,
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new RegistrationPageTransitionController(this);

      // When all components are ready we start adding the scrollComponents to the scroll tracker
      getEventBus().$emit(ADD_COMPONENTS, this.scrollComponents);

      this.isReady();
    },
  },
};
