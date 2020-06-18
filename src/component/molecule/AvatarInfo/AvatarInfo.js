import { AbstractTransitionComponent } from 'vue-transition-component';
import AvatarInfoTransitionController from './AvatarInfoTransitionController';

// @vue/component
export default {
  name: 'AvatarInfo',
  extends: AbstractTransitionComponent,
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new AvatarInfoTransitionController(this);
      this.isReady();
    },
  },
};
