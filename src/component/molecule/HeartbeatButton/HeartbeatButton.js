import { AbstractTransitionComponent } from 'vue-transition-component';
import HeartbeatButtonTransitionController from './HeartbeatButtonTransitionController';

// @vue/component
export default {
  name: 'HeartbeatButton',
  extends: AbstractTransitionComponent,
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new HeartbeatButtonTransitionController(this);
      this.isReady();
    },
  },
};
