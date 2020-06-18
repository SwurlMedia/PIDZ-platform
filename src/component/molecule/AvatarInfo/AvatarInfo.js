import { AbstractTransitionComponent } from 'vue-transition-component';
import AvatarInfoTransitionController from './AvatarInfoTransitionController';

// @vue/component
export default {
  name: 'AvatarInfo',
  extends: AbstractTransitionComponent,
  props: {
    image: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    profession: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
  },
  methods: {
    handleAllComponentsReady() {
      this.transitionController = new AvatarInfoTransitionController(this);
      this.isReady();
    },
  },
};
