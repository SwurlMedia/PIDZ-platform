import { AbstractTransitionComponent } from 'vue-transition-component';
import BtnLightFlatTransitionController from './BtnLightFlatTransitionController';

// @vue/component
export default {
  name: 'BtnLightFlat',
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
      this.transitionController = new BtnLightFlatTransitionController(this);
      this.isReady();
    },
  },
};
