import { AbstractTransitionComponent } from 'vue-transition-component';
import InfoBarTransitionController from './InfoBarTransitionController';
import AvatarInfo from '../AvatarInfo';

// @vue/component
export default {
  name: 'InfoBar',
  components: {
    AvatarInfo,
  },
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
      this.transitionController = new InfoBarTransitionController(this);
      this.isReady();
    },
  },
};
