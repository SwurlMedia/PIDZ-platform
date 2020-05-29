import { AbstractTransitionComponent } from 'vue-transition-component';
import BtnPrimaryFlatTransitionController from './BtnPrimaryFlatTransitionController';

// @vue/component
export default {
  name: 'BtnPrimaryFlat',
  extends: AbstractTransitionComponent,
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new BtnPrimaryFlatTransitionController(this);
      this.isReady();
    },
  },
};
