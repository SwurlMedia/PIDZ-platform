import { AbstractTransitionComponent } from 'vue-transition-component';
import BtnSecondaryFlatTransitionController from './BtnSecondaryFlatTransitionController';

// @vue/component
export default {
  name: 'BtnSecondaryFlat',
  extends: AbstractTransitionComponent,
  props: {
    to: {
      type: Object,
      default: null,
    },
    type: {
      type: String,
      default: 'submit',
    },
  },
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new BtnSecondaryFlatTransitionController(this);
      this.isReady();
    },
  },
};
