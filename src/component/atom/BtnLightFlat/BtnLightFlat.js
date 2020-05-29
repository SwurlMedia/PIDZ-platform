import { AbstractTransitionComponent } from 'vue-transition-component';
import BtnLightFlatTransitionController from './BtnLightFlatTransitionController';

// @vue/component
export default {
  name: 'BtnLightFlat',
  extends: AbstractTransitionComponent,
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new BtnLightFlatTransitionController(this);
      this.isReady();
    },
  },
};
