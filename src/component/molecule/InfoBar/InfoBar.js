import { AbstractTransitionComponent } from 'vue-transition-component';
import InfoBarTransitionController from './InfoBarTransitionController';
import AvatarInfo from '../AvatarInfo';
import HeartbeatButton from '../HeartbeatButton';
import CategoryTag from '../../atom/CategoryTag';

// @vue/component
export default {
  name: 'InfoBar',
  components: {
    AvatarInfo,
    HeartbeatButton,
    CategoryTag,
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
