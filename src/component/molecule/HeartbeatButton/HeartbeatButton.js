import { AbstractTransitionComponent } from 'vue-transition-component';
import HeartbeatButtonTransitionController from './HeartbeatButtonTransitionController';

// @vue/component
export default {
  name: 'HeartbeatButton',
  extends: AbstractTransitionComponent,
  data() {
    return {
      counter: Math.round(Math.random() * 100),
    };
  },
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new HeartbeatButtonTransitionController(this);
      this.isReady();
    },
    incrementLike() {
      this.counter = this.counter + 1;
    },
  },
};
