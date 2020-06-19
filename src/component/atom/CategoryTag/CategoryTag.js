import { AbstractTransitionComponent } from 'vue-transition-component';
import CategoryTagTransitionController from './CategoryTagTransitionController';

// @vue/component
export default {
  name: 'CategoryTag',
  extends: AbstractTransitionComponent,
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new CategoryTagTransitionController(this);
      this.isReady();
    },
  },
};
