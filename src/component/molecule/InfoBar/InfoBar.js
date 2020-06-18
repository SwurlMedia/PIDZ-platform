import { AbstractTransitionComponent } from 'vue-transition-component';
import InfoBarTransitionController from './InfoBarTransitionController';

// @vue/component
export default {
  name: 'InfoBar',
  extends: AbstractTransitionComponent,
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new InfoBarTransitionController(this);
      this.isReady();
    },
  },
};
