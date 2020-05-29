import { AbstractTransitionComponent } from 'vue-transition-component';
import BtnPrimaryFlatTransitionController from './BtnPrimaryFlatTransitionController';

// @vue/component
export default {
  name: 'BtnPrimaryFlat',
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
      this.transitionController = new BtnPrimaryFlatTransitionController(this);
      this.isReady();
    },
  },
};
