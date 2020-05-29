import { AbstractTransitionComponent } from 'vue-transition-component';
import BtnSecondaryFlatTransitionController from './BtnSecondaryFlatTransitionController';

// @vue/component
export default {
  name: 'BtnSecondaryFlat',
  extends: AbstractTransitionComponent,
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new BtnSecondaryFlatTransitionController(this);
      this.isReady();
    },
  },
};
