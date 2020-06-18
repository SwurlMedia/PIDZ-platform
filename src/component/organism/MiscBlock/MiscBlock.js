import { AbstractScrollComponent } from 'vue-transition-component';
import MiscBlockTransitionController from './MiscBlockTransitionController';

// @vue/component
export default {
  name: 'MiscBlock',
  extends: AbstractScrollComponent,
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new MiscBlockTransitionController(this);
      this.isReady();
    },
  },
};
